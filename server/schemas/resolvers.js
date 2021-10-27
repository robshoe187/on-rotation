const { User, Album, Order, Category } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        categories: async () => {
          return await Category.find();
        },
        albums: async (parent, { category, name }) => {
          const params = {};
    
          if (category) {
            params.category = category;
          }
    
          if (name) {
            params.name = {
              $regex: name
            };
          }
    
          return await Album.find(params).populate('category');
        },
        album: async (parent, { _id }) => {
          return await Album.findById(_id).populate('category');
        },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.albums',
                populate: 'category'
              })
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id).populate({
                path: 'orders.albums',
                populate: 'category'
              })
              return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
          },
          checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ albums: args.albums });
            const line_items = [];
      
            const { albums } = await order.populate('albums')
            console.log(albums)
            for (let i = 0; i < albums.length; i++) {
              const album = await stripe.products.create({
                name: albums[i].title,
                description: albums[i].description,
                images: [`${url}/images/${albums[i].image}`]
              });
              console.log('3')
              const price = await stripe.prices.create({
                product: album.id,
                unit_amount: albums[i].price * 100,
                currency: 'usd',
              });
              console.log('4')
              line_items.push({
                price: price.id,
                quantity: 1
              });
              console.log('5')
            }
            console.log('2')
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
            console.log('1')
            return { session: session.id };
          }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

            return { token, user };
        },
        addOrder: async (parent, { albums }, context) => {
            console.log(context);
            if (context.user) {
              const order = new Order({ albums });
      
              await User.findByIdAndUpdate(context.user._id, { $push: { orders: order } });
      
              return order;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          },
          updateAlbum: async (parent, { _id, quantity }) => {
            const decrement = Math.abs(quantity) * -1;
      
            return await Album.findByIdAndUpdate(_id, { $inc: { quantity: decrement } }, { new: true });
          },
          login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
      
            if (!user) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw new AuthenticationError('Incorrect credentials');
            }
      
            const token = signToken(user);
      
            return { token, user };
          }



    }
};

module.exports = resolvers;
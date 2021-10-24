const { User, Album, Order } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
    Query: {
        albums: async () => {
            return await Album.find();
        },
        album: async (parent, { _id }) => {
             return await Album.findById(_id)
         },
        user: async (parent, args, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
      
              user.orders.sort((a, b) => b.purchaseDate - a.purchaseDate);
      
              return user;
            }
      
            throw new AuthenticationError('Not logged in');
          },
          order: async (parent, { _id }, context) => {
            if (context.user) {
              const user = await User.findById(context.user._id)
              return user.orders.id(_id);
            }
            throw new AuthenticationError('Not logged in');
          },
          checkout: async (parent, args, context) => {
            const url = new URL(context.headers.referer).origin;
            const order = new Order({ products: args.albums });
            const line_items = [];
      
            const { albums } = await order.populate('products').execPopulate();
      
            for (let i = 0; i < albums.length; i++) {
              const album = await stripe.albums.create({
                name: albums[i].name,
                description: albums[i].description,
                images: [`${url}/images/${albums[i].image}`]
              });
      
              const price = await stripe.prices.create({
                album: album.id,
                unit_amount: albums[i].price * 100,
                currency: 'usd',
              });
      
              line_items.push({
                price: price.id,
                quantity: 1
              });
            }
      
            const session = await stripe.checkout.sessions.create({
              payment_method_types: ['card'],
              line_items,
              mode: 'payment',
              success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
              cancel_url: `${url}/`
            });
      
            return { session: session.id };
          }
    },
    Mutation: {

    }
}

module.exports = resolvers;
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
        
    },

    Mutation: {

    }
}

module.exports = resolvers;
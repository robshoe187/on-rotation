const { gql } = require("apollo-server-express");

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    orders: [Order]
}

type Album {
    _id: ID
    title: String
    artist: String
    description: String
    image: String
    price: Float
    quantity: Int
    ratings: []
}

type Order {
    _id: ID
    purchaseDate: String
    albums: [Album]
}

type Auth {
    token: ID
    user: User
}

type Checkout {
    session: ID
}

type Query {
    albums(_id: ID!): [Album]
    user: User
    order(_id: ID!) : Order
    checkout(albums: [ID]!): Checkout
    
}

type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    addOrder(albums: [ID]!): Order
    updateUser(username: String, email: String, password: String): User
    updateAlbum(_id: ID!, quantity: Int!): Album
    login(email: String!, password: String!): Auth
  }


`;


module.exports = typeDefs;
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");

const { typeDefs, resolvers } = require("./schemas");
const { authMiddleware } = require("./utils/auth");
const db = require("./config/connection");

const PORT = process.env.PORT || 3001;
const app = express();

const myPlugin = {
  // Fires whenever a GraphQL request is received from a client.
  async requestDidStart(requestContext) {
    console.log("Request started! Query:\n" + requestContext.request.query);

    return {
      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      async parsingDidStart(requestContext) {
        console.log("Parsing started!");
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      async validationDidStart(requestContext) {
        console.log("Validation started!");
      },
      //helps to console errors
      async didEncounterErrors(requestContext) {
        console.log("Error!", requestContext.errors);
      },
    };
  },
};

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
    plugins: [myPlugin],
  });
  await server.start();
  server.applyMiddleware({ app });
  console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
};

startServer();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// // Serve up static assets
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/build/index.html'));
// });

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import {StoreProvider } from './utils/GlobalState'
import Album from "./pages/Album";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Nomatch from "./pages/Nomatch"


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
    <Router>
      <StoreProvider>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/album:id" component={Album} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route component={Nomatch} />
      </Switch>
      </StoreProvider>
    </Router>
    </ApolloProvider>
  )
}

export default App;

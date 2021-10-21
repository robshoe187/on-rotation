import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Album from "./pages/Album";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/album" component={Album} />
        <Route exact path="/cart" component={Cart} />
      </Switch>   
    </Router>
  )
}

export default App;

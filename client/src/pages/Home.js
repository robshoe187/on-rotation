import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
    <div className="container">
      <Header></Header>
      <Nav></Nav>
    </div>
          <ProductList />
    < Cart />
    <Footer></Footer>
    </> 
    )
}

export default Home;
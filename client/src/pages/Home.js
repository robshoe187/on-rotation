import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu"
import Cart from "../components/Cart";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
    <div className="container">
      <Header></Header>
      <Nav></Nav>
    </div>
    <CategoryMenu />
    <div className="container pt-5">
        <div className="row">
          <ProductList />
        </div> 
    </div> 
    < Cart />
    <Footer></Footer>
    </> 
    )
}

export default Home;
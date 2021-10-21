import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import ProductItem from "../components/ProductItem";
import Footer from "../components/Footer";

const Home = () => {
    return(
        <>
    <div className="container">
      <Header></Header>
      <Nav></Nav>
    </div>
    <div className="container pt-5">
        <div className="row">
          <ProductItem></ProductItem>
        </div>
    </div> 
    <Footer></Footer>
    </> 
    )
}

export default Home;
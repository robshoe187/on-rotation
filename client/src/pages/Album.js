import React, { useState } from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Rating from "../components/Rating";
import { useQuery } from "@apollo/client";
import { QUERY_ALBUM } from "../../src/utils/queries";
import { useParams } from "react-router-dom";

const Album = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(QUERY_ALBUM, {
    variables: { id },
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <Header />
      <Nav />
      <div className="container pt-5">
        <div className="row">
          <>
            <div className="col">
              <img
                src={require(`../assets/album/${data.album.image}`).default}
                alt={data.album.album}
                key={data.album.id}
              />
            </div>
            <div className="col">
              <h2>{data.album.artist}</h2>
              <h3>{data.album.album}</h3>
              <span className="price">
                $ {data.album.price}
                <button className="cartButton">Add to Cart</button>
              </span>
              <p className="pt-1">Rating: {data.album.rating}/5</p> <Rating />
              <p>{data.album.description}</p>
            </div>
          </>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Album;

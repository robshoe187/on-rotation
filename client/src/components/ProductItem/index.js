import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_ALBUMS } from "../../utils/queries";

const ProductItem = () => {
  const { loading, error, data } = useQuery(QUERY_ALBUMS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      {data.albums.map((album) => (
        <div className="col">
          <a href={`/album/${album._id}`}>
            <img
              src={require(`../../assets/album/${album.image}`).default}
              alt={album.album}
              key={album.id}
            />
          </a>
          <ul className="list-group list-group-flush">
            <li className="list-group-item artist-name">{album.album}</li>
            <li className="list-group-item">{album.artist}</li>
            <li className="list-group-item">
              $ {album.price}
              <button className="cartButton">Add to Cart</button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default ProductItem;

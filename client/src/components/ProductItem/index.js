import React, { useState } from "react";

const ProductItem = () => {
    const [products] = useState([
    {
        id: 1,
        album: "Madvillainy",
        artist: "Madvillain",
        image: "Madvillainy.png",
        price: 40
    },
    {
        id: 2,
        album: "Californication",
        artist: "The Red Hot Chili Peppers",
        image: "Californication.jpg",
        price: 25
    },
    {
        id: 3,
        album: "Saturdays = Youth",
        artist: "M-83",
        image: "Saturdays_=_Youth.png",
        price: "30"
    },
    {
        id: 4,
        album: "Sticky Fingers",
        artist: "The Rolling Stones",
        image: "Sticky-Fingers.png",
        price: 25
    },
    {
        id: 5,
        album: "Stranger Things Vol. 1 ",
        artist: "Kyle Dixon & Michael Stein",
        image: "Stranger_Things_S1V1.png",
        price: 30
    },
    {
        id: 6,
        album: "Untrue",
        artist: "Burial",
        image: "Untrue.jpg",
        price: 35
    }
    ])
    return(
        <>
            {products.map((album) => (
                <div className="col">
                <a href="/album">
                    <img src={require(`../../assets/album/${album.image}`).default}
                    alt={album.album}
                    key={album.id}
                    />
                </a>    
                <ul className="list-group list-group-flush">
                    <li className="list-group-item artist-name">{album.album}</li>
                    <li className="list-group-item">{album.artist}</li>
                    <li className="list-group-item">$ {album.price}<button className="cartButton">Add to Cart</button></li>
                </ul>
                </div>
                
            ))}
        </>    
                
        
    )
}

export default ProductItem;
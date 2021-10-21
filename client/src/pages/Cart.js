import React, {useState} from "react";
import Header from "../components/Header"; 
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Cart = () => {

    const [product] = useState([
        {
            id: 1,
            album: "Madvillainy",
            artist: "Madvillain",
            image: "Madvillainy.png",
            price: 40,
            description: `Madvillainy is a studio album by American hip hop duo Madvillain, consisting of rapper MF Doom and producer Madlib. It was released on March 23, 2004, on Stones Throw Records.

            The album was recorded between 2002 and 2004. Madlib created most of the instrumentals during a trip to Brazil in his hotel room using minimal amounts of equipment: a Boss SP-303 sampler, a turntable, and a tape deck. Fourteen months before the album was released, an unfinished demo version was stolen and leaked onto the internet. Frustrated, the duo stopped working on the album and returned to it only after they had released other solo projects.
            
            While Madvillainy achieved only moderate commercial success, it became one of the best-selling Stones Throw albums. It peaked at number 179 on the US Billboard 200, and attracted attention from media outlets not usually covering hip hop music, including The New Yorker. Madvillainy received widespread critical acclaim for Madlib's production and MF Doom's lyricism, and is regarded as Doom's magnum opus. It has ranked in various publications' lists of all-time greatest albums, including at 411 on NME's list of The 500 Greatest Albums of All Time and at 365 on Rolling Stone's 500 Greatest Albums of All Time.`
        }
    ])
    return(
        <>
        <Header />
        <Nav />
        <div className="container pt-5">
            <div className="row border-bottom">
                <div className="col-3"></div>
                <div className="col"><h3>Product</h3></div>
                <div className="col"><h3>Quantity</h3></div>
                <div className="col"><h3>Price</h3></div>
                <div className="col-2"></div>
            </div>
        {product.map((album) => (
                    <>                  
                        <div className="row border-bottom">
                            <div className="col-3"></div>
                            <div className="col">{album.album} by {album.artist}</div>
                            <div className="col">1</div>
                            <span className="col">$ {album.price}</span>
                            <div className="col-2"></div>
                        </div>
                    </>        
                    ))}
                <div className="row pt-4">
                   <div className="col-7"></div>
                    <strong className="col">Total: $ </strong>
                    <button className="col">Checkout</button>
                    <div className="col-2"></div>
                </div> 
                </div>    

        <Footer />
        </>
    )
}
export default Cart;
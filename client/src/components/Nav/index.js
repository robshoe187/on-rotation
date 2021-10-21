import React from "react";  

const Nav = () => {
    return(
        <div className="row justify-content-md-center border-top nav pt-1">
            <a className="col-md-auto text-secondary" href="/">Home</a>
            <a className="col-md-auto text-secondary" href="/album">Featured</a>
            <a className="col-md-auto text-secondary" href="/">Genre</a>
            <a className="col-md-auto text-secondary" href="/cart">Cart</a>
        </div>
    )
}
export default Nav;

import React from "react";  

const Nav = () => {
    return(
        <div className="row justify-content-md-center border-top nav pt-1">
            <a className="col-md-auto text-secondary" href="/">Home</a>
            <a className="col-md-auto text-secondary" href="/signup">Signup</a>
            <a className="col-md-auto text-secondary" href="/login">Login</a>
            <a className="col-md-auto text-secondary" href="/orderHistory">Order History</a>
        </div>
    )
}
export default Nav;

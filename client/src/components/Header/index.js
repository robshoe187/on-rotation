import React from 'react';

const Header = () => {

    return (
        <div className="row justify-content-md-center">
            <a className="col-md-auto" href="/">
                <img src={require(`../../assets/logo/on-rotation.jpg`).default} 
                alt="On Rotation"/>
            </a>
        </div>
    )
}

export default Header;
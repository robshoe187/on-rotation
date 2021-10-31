import React from "react";

const Rating =()=> {
    return(
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
                Rating
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <li><button className="dropdown-item" type="button">0</button></li>
                <li><button className="dropdown-item" type="button">1</button></li>
                <li><button className="dropdown-item" type="button">2</button></li>
                <li><button className="dropdown-item" type="button">3</button></li>
                <li><button className="dropdown-item" type="button">4</button></li>
                <li><button className="dropdown-item" type="button">5</button></li>
            </ul>
            </div>
    )
}

export default Rating;
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Nav from '../components/Nav';

import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import Footer from '../components/Footer';

function OrderHistory() {
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }
    return (
        <>
        <Header />
        <Nav />
          <div className="container my-1">
          <Link className="btn btn-light" to="/">← Back to Albums</Link>
    
            {user ? (
              <>
                <h2>
                  Order History for {user.username} 
                </h2>
                {user.orders.map((order) => (
                  <div key={order._id} className="my-2">
                    <h3>
                      {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                    </h3>
                    <div className="flex-row">
                      {order.albums.map(({ _id, image, name, price }, index) => (
                        <div key={index} className="card px-1 py-1">
                          <Link to={`/album/${_id}`}>
                            <img alt={name} src={`/album/${image}`} />
                            <p>{name}</p>
                          </Link>
                          <div>
                            <span>${price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </>
            ) : null}
          </div>
          <Footer />
        </>
      );
    }
    
    export default OrderHistory;
import React, { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ORDER } from '../utils/mutations';
import { idbPromise } from '../utils/helpers';
import Header from '../components/Header';

function Success() {
  
    const [addOrder] = useMutation(ADD_ORDER);

    useEffect(() => {
        async function saveOrder() {
          const cart = await idbPromise('cart', 'get');
          const albums = cart.map((item) => item._id);
    
          if (albums.length) {
            const { data } = await addOrder({ variables: { albums } });
            const albumData = data.addOrder.albums;
    
            albumData.forEach((item) => {
              idbPromise('cart', 'delete', item);
            });
          }
    
          setTimeout(() => {
            window.location.assign('/');
          }, 3000);
        }
    
        saveOrder();
      }, [addOrder]);
};

return (
    <div>
      <Header>
        <h1>Success!</h1>
        <h2>Thank you for your purchase!</h2>
        <h2>You will now be redirected to the home page</h2>
      </Header>
    </div>
  );


export default Success;
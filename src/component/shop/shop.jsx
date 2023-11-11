import React, { useEffect, useState } from 'react';
import './shop.css';

const shop = (props) => {

    const [products, setProducts] = useState([]);

    useEffect ( () =>{
        fetch ('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [] )
    return (
        
        <div className='total-component'>
             <div className="main-shop">
                     <h1>this is a component: {products.length}</h1>
             </div>

             
             <div className="cart">
                  <p className='order'>Order summary </p>
             </div>
        </div>
    );
};

export default shop;
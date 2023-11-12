import React, { useEffect, useState } from 'react';
import './shop.css';
import Product from '../product/product';

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
                     {
                        products.map(product => <Product
                        key={product.id}
                        product = {product}
                 
                        ></Product>)
                     }
                    
             </div>

             
             <div className="cart">
                  <p className='order'>Order summary </p>
             </div>
        </div>
    );
};

export default shop;
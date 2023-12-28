import React, { useEffect, useState } from 'react';
import './shop.css';

import Product from '../product/product';
import MyCart from '../MyCart/MyCart';





const shop = (props) => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect ( () =>{
        fetch ('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))

    }, [] )

    const handleAddToCart = (product) =>{
        const newCart = [...cart,product];
        setCart(newCart);
    }

    return (
        
        <div className='total-component'>
             <div className="main-shop">
                     {
                        products.map(product => <Product
                        key={product.id}
                        product = {product}
                        handleAddToCart= {handleAddToCart}
                 
                        ></Product>)
                     }
                    
             </div>

             
             <div className="cart">
             <MyCart mycart = {cart}></MyCart>


             </div>
        </div>
    );
};

export default shop;
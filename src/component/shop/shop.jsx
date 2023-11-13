import React, { useEffect, useState } from 'react';
import './shop.css';
import Product from '../product/product';


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
                  <p className='order'>Order summary </p>
                  <p className='order'>Selected {cart.length}</p>
             </div>
        </div>
    );
};

export default shop;
import React from 'react';
import './product.css';


const Product = (props) => {
    const { img, name, seller, ratings, price, } = props.product 
    return (
        
        <div className='product'>
                 <img src={img} alt="" />

             <div className='product-information'>

                  <h6 className='product-name'>{name}</h6>
                  <p className='price'>price:${price}</p>
                  <p className='seller'>Manufacturar:{seller}</p>
                  <p className='rating'>Ratings: {ratings}star</p>
            </div>
            <button className='add-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;
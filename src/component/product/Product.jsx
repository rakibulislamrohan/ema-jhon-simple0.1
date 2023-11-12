import React from 'react';
import './product.css';


const Product = (props) => {
    const { img, name, seller, ratings, price } = props.product 
    return (
        
        <div className='product'>
                 <img src={img} alt="" />

                <div className='product-information'>

                 <h6 className='product-name'>{name}</h6>
                 <p className='price'>price:{price}</p>
                 <p>Manufacturar:{seller}</p>
                 <p>Ratings: {ratings}star</p>

                </div>
        </div>
    );
};

export default Product;
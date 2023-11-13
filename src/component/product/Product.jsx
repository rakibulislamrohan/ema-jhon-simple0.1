import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    const { img, name, seller, ratings, price, } = props.product
     
    const   handleAddToCart = props.handleAddToCart;

    
     
     
    return (
        
        <div className='product'>
                 <img src={img} alt="" />

             <div className='product-information'>

                  <h6 className='product-name'>{name}</h6>
                  <p className='price'>price:${price}</p>
                  <p className='seller'>Manufacturar:{seller}</p>
                  <p className='rating'>Ratings: {ratings}star</p>
            </div>
            <button onClick={()  => handleAddToCart (props.product)}
             className='add-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;
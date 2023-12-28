import React from 'react';


const MyCart = (props) => {
    const Mycart = props.mycart;
    // const {cart} = props;
    return (
        <div>
                  <p className='order'>Order summary </p>
                  <p className='order'>Selected {Mycart.length}</p>
        </div>

    );
};

export default MyCart;
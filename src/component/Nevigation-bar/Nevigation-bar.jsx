import React from 'react';
import logo from '../../images/Logo.svg';
import './nevigation-bar.css';
const NevBar = (props) => {
    return (
        
        <div className='Navbar'>

            <div className='Logo' >

                <img src={logo}/>

            </div>
            <div className='button'>
                <a className='order' href="">Order</a>
                <a className='order' href="">Order Review</a>
                <a className='order' href=""> Manage Inventory</a>
                <a className='order' href=""> login</a>

            </div>

        </div>
    );
};

export default NevBar;
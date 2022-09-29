import './Body.css'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Addcart from '../Addcart/Addcart';

const Body = () => {
    const [carts,setCarts]=useState([])
    useEffect(()=>{
        fetch('activitys.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    return (
        <div className='main-body'>
            <div>
                <Cart carts={carts}></Cart>
            </div>
            <div className='addCart-container'>
                <Addcart></Addcart>
            </div>
        </div>
    );
};

export default Body;
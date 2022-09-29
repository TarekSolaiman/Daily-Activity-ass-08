import './Body.css'
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Addcart from '../Addcart/Addcart';
import Qussen from '../Qussen/Qussen';

const Body = () => {
    const [carts,setCarts]=useState([])
    const [newtime,setNewtime]=useState(0);
    useEffect(()=>{
        fetch('activitys.json')
        .then(res=>res.json())
        .then(data=>setCarts(data))
    },[])
    const addWorkTime=(time)=>{
        let addtime=newtime+time;
        setNewtime(addtime);    
    }
    return (
        <div className='main-body'>
            <div>
                <Cart carts={carts} addWorkTime={addWorkTime}></Cart>
            </div>
            <div className='addCart-container'>
                <Addcart Time={newtime}></Addcart>
            </div>
            <div>
                <Qussen></Qussen>
            </div>
        </div>
    );
};

export default Body;
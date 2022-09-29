import './Addcart.css'

import React from 'react';

const Addcart = (props) => {
    const {Time}=props
    return (
        <div className='addCart'>
            <NameDL></NameDL>
            <h3>Add a break</h3>
            <BrackTime workTime={Time}></BrackTime>
        </div>
    );
};

const NameDL=()=>{
    return(
        <div className='personel-cont'>
            <img className='my-img' src="https://dailytimes.com.pk/assets/uploads/2020/09/a7dd69ef575cddc4928d8ce28089d11c-1280x720.jpg" alt="" />
            <h2>MD. Faysal Bin Nasir</h2>
            <p>Kashmir , Indea</p>
        <div className='personel-dls'>
            <div className='dls-item'>
                <p>80<span>kg</span></p>
                <p className='title'>Weight</p>
            </div>
            <div className='dls-item'>
                <p>6.3<span>in</span></p>
                <p className='title'>Height</p>
            </div>
            <div className='dls-item'>
                <p>25<span>yrs</span></p>
                <p className='title'>Age</p>
            </div>
        </div>
        </div>
    )
}

const BrackTime=(props)=>{
    const {workTime}=props
    
    return(
        <div>
            <div className='barak-btn-cont'>
                <button><p>20 s</p></button>
                <button><p>30 s</p></button>
                <button><p>40 s</p></button>
                <button><p>50 s</p></button>
            </div>
            <div>
                <h2>Active Details</h2>
                <p>Work time : {workTime}</p>
                <p>brake time : {}</p>
            </div>
        </div>
    )
}



export default Addcart;
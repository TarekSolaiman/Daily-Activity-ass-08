import './Addcart.css'

import React, { useState } from 'react';

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
    const [brakeTime,setBraketime]=useState(0)

    const addBrake=(time)=>{
        setBraketime(time)
        localStorage.setItem('Braek-Time',JSON.stringify(time))
    }
    
    
    return(
        <div>
            <div className='barak-btn-cont'>
                <button onClick={()=>addBrake(20)}><p>20 s</p></button>
                <button onClick={()=>addBrake(30)}><p>30 s</p></button>
                <button onClick={()=>addBrake(40)}><p>40 s</p></button>
                <button onClick={()=>addBrake(50)}><p>50 s</p></button>
            </div>
            <div>
                <h2>Active Details</h2>
                <p>Work time : {workTime}</p>
                <p>brake time : {brakeTime}</p>
            </div>
            <button onClick={tostAlart} className='completed-btn'><p>Activity Completed</p></button>
        </div>
    )
}

const tostAlart=()=>{
    alert('Activity completed now ready new activity')
}



export default Addcart;
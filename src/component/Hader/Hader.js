import "./Hader.css"
import logo from '../../Logo/DailyActivity.png'
import React from 'react';

const Hader = () => {
    return (
        <div>
            <nav className="hader">
                <img src={logo} alt="" />
                <p><span>Daily</span> Activity</p>
            </nav>
        </div>
    );
};

export default Hader;
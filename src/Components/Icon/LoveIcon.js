import React from 'react';
import '../components.css';

function LoveIcon(props) {
    return (
        <div className='Hlcir'>
            <img src={require("../Logos/love_icon.svg").default} className="hend_icon" alt="logo" />
        </div>
    );
}

export default LoveIcon;
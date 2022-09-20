import React, { useState } from 'react';
import '../components.css';

function LoveIcon(props) {
    const [value,setValue]=useState(true)

    function onClick(){
        setValue(!value)   
    }

    return (
        <div className='Hlcir' onClick={onClick}>
            <img className='hend_icon' alt="logo" src={require(value ? '../Logos/love_icon.svg' : "../Logos/love_fill_icon.svg").default} />
        </div>
    );
}

export default LoveIcon;
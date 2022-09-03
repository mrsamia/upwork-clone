import React from 'react';
import pen_icon from './Logos/pen_icon.svg';
import { FaPen } from "react-icons/fa";
import './components.css';
function Pen_Icon(props) {
    return (
        <div className='cir'>
          <img src={pen_icon} className="pen_icon" alt="logo" />
          {/* <FaPen className="pen_icon "/> */}
        </div>
    );
}

export default Pen_Icon;
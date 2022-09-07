import React from 'react';
import pen_icon from './Logos/pen_icon.svg';
import { FaPen } from "react-icons/fa";
import './components.css';
function Pen_Icon(props) {
    return (
        <div className='cir'>
          <img src={pen_icon} className="pen_icon" alt="logo" />
          {/* <FaPen className="pen_icon "/> */}
         
          
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
  Launch demo modal
</button>

<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalCenterTitle">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
    );
}

export default Pen_Icon;
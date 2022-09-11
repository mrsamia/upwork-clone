import React, { Fragment, useState } from 'react';
import pen_icon from './Logos/pen_icon.svg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { FaPen } from "react-icons/fa";
import './components.css';
function Pen_Icon(props) {
  const [modalShow, setModalShow] = useState(false)

  function clickHandler() {
    setModalShow(true)
  }
  function onHide() {
    console.log("clicked")
    setModalShow(false)
  }
  console.log(modalShow)
  return (
    <Fragment>
      <div className='cir' onClick={clickHandler}>
        <img src={pen_icon} className="pen_icon" alt="logo" />
        {/* <FaPen className="pen_icon "/> */}
      </div>
      <Modal show={modalShow} onHide={onHide}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
}

export default Pen_Icon;
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './modal.css';
import '../components.css';
function Moodal(props) {

    return (
        <div className=' d-flex justify-content-center '>
        <Modal show={props.show} onHide={props.onHide} className="modalWidth">
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button className='cancle_btn' >Cancle</Button>
          <Button onClick={props.onClick} className='save_btn'>Save</Button>  
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Moodal;
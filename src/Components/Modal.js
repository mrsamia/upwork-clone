import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../Components/Modal/modal.css';
import '../Components/components.css';
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
          <Button className='start_netwrk_btn'>Cancle</Button>
          <Button onClick={props.onClick}>Save</Button>  
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Moodal;
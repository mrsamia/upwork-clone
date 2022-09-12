import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
function Moodal(props) {

    return (
        <div>
        <Modal show={props.show} onHide={props.onHide}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>{props.body}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={props.onClick}>Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
        </div>
    );
}

export default Moodal;
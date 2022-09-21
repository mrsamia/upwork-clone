import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
function HandIconModal(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (

        <div>
            <Modal show={show} onHide={handleClose} className="modalWidth">
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Just not interested
                        Vague Description
                        Unrealistic Expectations
                        Too Many Applicants
                        Job posted too long ago
                        Poor reviews about the client</p>
                </Modal.Body>
                <Modal.Footer onClick={handleClose}>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default HandIconModal;
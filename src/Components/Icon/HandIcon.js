
import '../components.css';
import React, { Fragment, useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function HandIcon(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (<Fragment>
        <div className='Hlcir' onClick={handleShow}>
            <img src={require("../Logos/thumb_icon.svg").default} className="hend_icon" alt="logo" />

        </div>
        <Modal show={show} onHide={handleClose}>

            <Modal.Body>
                <ul className='ulPadding'>    
                <ol className='ulPadding'>Just not interested</ol>
                <ol className='ulPadding'>Job posted too long ago</ol>
                <ol className='ulPadding'>Vague Description</ol>
                <ol className='ulPadding'>Unrealistic Expectations</ol>
                <ol className='ulPadding'>Too Many Applicants</ol>
                <ol className='ulPadding'>Job posted too long ago</ol>
                <ol className='ulPadding'> Poor reviews about the client</ol></ul>
            </Modal.Body>

        </Modal>
        </Fragment>
    );
}

export default HandIcon;
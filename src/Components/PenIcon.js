import React, { Fragment, useState } from 'react';
import pen_icon from './Logos/pen_icon.svg';
import './components.css';
import modalData from './Modal/modalData';
import Modal from './Modal/Modal';



function Pen_Icon(props) {
  const [modalShow, setModalShow] = useState(false)
  const data = modalData.find(item => item.id === props.id)

  function clickHandler() {
    setModalShow(true)
  }
  function onHide() {
    console.log("clicked")
    setModalShow(false)
  }

  return (
    <Fragment>
      <div className='cir' onClick={clickHandler}>
        <img src={pen_icon} className="pen_icon" alt="logo" />
      </div>
      <Modal
        show={modalShow}
        onHide={onHide}
        title={data?.title}
        body={data?.body}
        onClick={onHide}
      />

    </Fragment>
  );
}

export default Pen_Icon;
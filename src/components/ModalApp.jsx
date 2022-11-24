import React from 'react';
import {Button ,Modal} from 'react-bootstrap';


  const ModalApp =(props)=> {
  const {show,title ,actionBtn,modalAction ,size ,handleClose} = props;
   //handel modal action
  const modalActions = ()=>{
        modalAction();
  }

  return (
    <div className='modal-app'>   
      {
        props.modalTitle ? 
         <Button variant="primary" onClick={props.handleShow}>
          {props.modalTitle}
        </Button>  : null
      }
      <Modal show={show} onHide={handleClose} size={size}>
        <Modal.Header closeButton>
          <Modal.Title>{title} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}> Close </Button>
          <Button onClick={modalActions}> {actionBtn} </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ModalApp;
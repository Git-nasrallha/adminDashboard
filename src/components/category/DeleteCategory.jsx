import React  from "react";
import ModalApp from "../ModalApp";


const DeleteCategory = (props) => {
  const {
      handleClose, 
      show ,
      expandedArray 
      ,checkedArray ,
      deletCatedory
    } = props;
  



  return (
    <ModalApp
      show={show}
      handleClose={handleClose}
      title="Are You Sure To Want To Delete This Item ?"
      actionBtn="yes"
      modalAction={deletCatedory}

    >
      <h3>expanded</h3>    
      {
        expandedArray && expandedArray.map((item,index)=><p key={index}> {item.name} </p>)
      }
      {/*checked array */}
      <h3>checked</h3>   
      {
        checkedArray && checkedArray.map((item,index)=><p key={index}> {item.name} </p>)
        
      }
    </ModalApp>
  );
};

export default DeleteCategory;

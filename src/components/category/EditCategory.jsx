import React  from "react";
import { Form, Row, Col } from "react-bootstrap";
import ModalApp from "../ModalApp";
import { categoryList } from "../../helperFunction/helper";

const EditCategory = (props) => {
  const {
     categories,
      handleClose, 
      show ,expandedArray 
      ,checkedArray ,handleChange ,
      updateCategory
    } = props;
  



  return (
    <ModalApp
      show={show}
      handleClose={handleClose}
      title="Category Form"
      actionBtn="Save"
      modalAction={updateCategory}
      size="lg"
    >
      <h3>expanded</h3>    
      <Form>
      {
        expandedArray && expandedArray.map((item,index)=>{
         return(
          <Row key={index}>
          <Col>
            <Form.Group className="mb-3" controlId="categoryName.ControlInput">
              <Form.Control
                type="text"
                placeholder="Category Name"
                value={item.name}
                onChange = {(e)=>handleChange('name' , e.target.value , index ,'expanded')}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
               value={item.parentId}
               onChange = {(e)=>handleChange('parentId' , e.target.value , index ,'expanded')}
              >
                <option value=" "> Select Parent Category </option>
                {categoryList(categories).map((option) => {
                  return (
                    <option key={option.id} value={option.id}>
                      {option.name}{" "}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
                 value={item.type}
                 onChange={(e) => handleChange('type', e.target.value, index, 'expanded')}
              >
                <option value=" "> Select Type </option>
                <option value="product">product</option>
                <option value="page">page</option>
                <option value="store">store</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
         )
        })
      }
      </Form>
      {/*checked array */}
      <h3>checked</h3>    
      <Form>
      {
        checkedArray && checkedArray.map((item,index)=>{
         return(
          <Row key={index}>
          <Col>
            <Form.Group className="mb-3" controlId="categoryName.ControlInput">
              <Form.Control
                type="text"
                placeholder="Category Name"
                value={item.name}
                onChange = {(e)=>handleChange('name' , e.target.value , index ,'checked')}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
                value={item.parentId}
                onChange = {(e)=>handleChange('parentId' , e.target.value , index ,'checked')}
              >
                <option value=" "> Select Parent Category </option>
                {categoryList(categories).map((option) => {
                  return (
                    <option key={option.id} value={option.id}>
                      {option.name}{" "}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Select
                value={item.type}
                onChange={(e) => handleChange('type', e.target.value, index, 'checked')}
              >
                <option value=" "> Select Type </option>
                <option value="product">product</option>
                <option value="page">page</option>
                <option value="store">store</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
         )
        })
      }
      </Form>
    </ModalApp>
  );
};

export default EditCategory;

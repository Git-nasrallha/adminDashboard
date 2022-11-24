import React, { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { addCategory } from "../../store/actions/categoryAction";
import ModalApp from "../ModalApp";
import { categoryList } from "../../helperFunction/helper";

const AddCategory = (props) => {
  const { categories, dispatch, show, handleClose } = props;
  const [categoryName, setCategoryName] = useState("");
  const [parentId, setParentId] = useState("");
  const [categoryImage, setCategoryImage] = useState("");

  // add new category
  const addNewCategory = () => {
    const newCategory = {
      name: categoryName,
      parentId,
      categoryImage,
    };
    if(categoryName==""){
        alert("Category Name Is Required");
        return;
    }
    dispatch(addCategory(newCategory));
    setCategoryName("");
    setParentId("");
    handleClose();
  };

  return (
    <div>
      <ModalApp
        show={show}
        title="Category Form"
        actionBtn="Add"
        handleClose={handleClose}
        modalAction={addNewCategory}
      >
        <Form>
          <Row>
            <Col md={6}>
              <Form.Group
                className="mb-3"
                controlId="categoryName.ControlInput"
              >
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Category Name"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Select
                  value={parentId}
                  onChange={(e) => setParentId(e.target.value)}
                >
                  <option>select parentId</option>
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
              <Form.Group controlId="formFile" className="mb-3 mt-3">
                <Form.Control
                  type="file"
                  name="categoryImage"
                  placeholder="Category Image"
                  onChange={(e) => {
                    setCategoryImage(e.target.files[0]);
                  }}
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </ModalApp>
    </div>
  );
};

export default AddCategory;

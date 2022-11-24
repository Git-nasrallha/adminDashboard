import React, { useState } from "react";
import { Form, Button ,Container ,Row ,Col } from "react-bootstrap";
import { useSelector ,useDispatch } from "react-redux";
import {categoryList} from "../../helperFunction/helper";
import { createProduct } from "../../store/actions/products";

const AddProduct = () => {
  const {categories} = useSelector(state=>state.category);
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: "",
    category: "",
  });
  const [productPictures, setProductPicters] = useState([]);

  const handelProductPictures = (e) => {
    setProductPicters([...productPictures, e.target.files[0]]);
  };
  const handelChange = (e) => {
    setProductData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  
  const { name, price, quantity, description, category } = productData;
  //handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
   const form = new FormData();
   form.append("name", name);
   form.append("quantity", quantity);
   form.append("price", price);
   form.append("description", description);
   form.append("category", category);
   productPictures.forEach(pic => {
    form.append("productImages", pic);
   });
  dispatch(createProduct(form));
    setProductData({
      name: "",
      price: "",
      quantity: "",
      description: "",
      category: "",
    });
    setProductPicters([]);

  };

  return (
    <div className="add-product">
        <h2 className="text-center text-capitalize">product form</h2>
        <Container>
            <Form onSubmit={handelSubmit}>
              <Row>
                <Col md={12}>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                    >
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={handelChange}
                    />
                    </Form.Group>
                </Col>  
                <Col md={6}>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                    >
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="number"
                        name="price"
                        value={price}
                        onChange={handelChange}
                    />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                    >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control
                        type="number"
                        name="quantity"
                        value={quantity}
                        onChange={handelChange}
                    />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                    <Form.Label>Parent Category</Form.Label>
                    <Form.Select
                        name="category"
                        value={category}
                        onChange={handelChange}
                    >
                        <option value=" "> </option>
                        {
                            categoryList(categories).map((option)=>{
                            return(
                                <option key={option.id} value={option.id}>{option.name} </option>
                            )
                            })
                        }
                    </Form.Select>
                    </Form.Group> 
                </Col> 
                <Col md={6}> 
                    <Form.Group controlId="formFile" className="mb-3 mt-3">
                    <Form.Label>product Pictures</Form.Label>
                    <Form.Control
                        type="file"
                        multiple
                        name="productImages"
                        onChange={handelProductPictures}
                    />
                    </Form.Group>
                </Col>
                <Col md={12}>  
                    <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                    >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="description"
                        value={description}
                        onChange={handelChange}
                    />
                    </Form.Group>
                </Col>    
                </Row>
                <Button type="submit">Add Product</Button>
              </Form>
        </Container>
    </div>
  );
};

export default AddProduct;

import React, { useState ,useEffect } from "react";
import { Form, Button ,Container ,Row ,Col } from "react-bootstrap";
import { useSelector ,useDispatch } from "react-redux";
import {categoryList} from "../../helperFunction/helper";
import {useParams,useNavigate} from "react-router-dom";
import  {editingProduct, updatingProduct} from "../../store/actions/products";



const EditProduct = () => {
  const {categories} = useSelector(state=>state.category);
  const [updatedData,setUpateData] = useState({
    name:"",
    price:"",
    quantity:"",
    category:"",
    description:""
  })
  // const [name , setName] =useState("");
  // const [price , setPrice] =useState("");
  // const [quantity , setQuantity] =useState("");
  // const [category , setCategory] =useState("");
  // const [description , setDescription] =useState("");

  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [productPictures, setProductPicters] = useState([]);

  const handelProductPictures = (e) => {
    setProductPicters([...productPictures, e.target.files[0]]);
  };
  const handlechange = (e)=>{
    setUpateData(prevState=>({
       ...prevState,
      [e.target.name]:e.target.value
      })
     )
  }
  const {name,price,quantity,category,description} = updatedData;
    const {id} = useParams();    
    useEffect(()=>{
      dispatch(editingProduct(id)).unwrap()
      .then((originalPromiseResult) => {
        // handle result here
        // setName(originalPromiseResult.name);
        // setPrice(originalPromiseResult.price);
        // setQuantity(originalPromiseResult.quantity);
        // setDescription(originalPromiseResult.description);
        // setCategory(originalPromiseResult.category);
        setUpateData(originalPromiseResult);
      })
      .catch((rejectedValueOrSerializedError) => {
        // handle error here
        console.log(rejectedValueOrSerializedError)
      })
      
    },[dispatch ,id]);
   
  //handel submit
  const handelSubmit = (e) => {
    e.preventDefault();
    // const updateProduct = new FormData();
    // updateProduct.append("name", name);
    // updateProduct.append("quantity", quantity);
    // updateProduct.append("price", price);
    // updateProduct.append("description", description);
    // updateProduct.append("category", category);
    // updateProduct.append("id", id);
    // productPictures.forEach(pic => {
    //   updateProduct.append("productImages", pic);
    // });
   
    const obj={
      id,
      updatedData
    };
    dispatch(updatingProduct(obj));
    navigate('/products');
  };

  
  
  return (
    <div className="add-product">
        <h2 className="text-center text-capitalize">product form</h2>
        <Container>
            <Form onSubmit={handelSubmit} >
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
                        value= {name}
                        onChange={handlechange}
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
                        value= {price}
                        onChange={handlechange}
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
                        value= {quantity}
                        onChange={handlechange}
                    />
                    </Form.Group>
                </Col>
                <Col md={6}>
                    <Form.Group>
                    <Form.Label>Parent Category</Form.Label>
                    <Form.Select
                        name="category"
                        value= {category}
                        onChange={handlechange}
                    >
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
                        value= {description}
                        onChange={handlechange}
                 
                    />
                    </Form.Group>
                </Col>    
                </Row>
                <Button  type="submit">Save</Button>
              </Form>
        </Container>
    </div>
  );
};

export default EditProduct;

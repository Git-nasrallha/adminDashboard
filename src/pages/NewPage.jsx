import React, { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import Layout from "../components/Layout";
import ModalApp from "../components/ModalApp";
import { categoryList } from "../helperFunction/helper";
import { useSelector ,useDispatch } from "react-redux";
import { createProductPage } from "../store/actions/productPageActions";
import { useEffect } from "react";

const NewPage = () => {
  const { categories } = useSelector((state) => state.category);
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryId, setCategoryId] = useState('');
  const [type, setType] = useState('');
  const [pageData , setPageData] = useState({
    title:"",
    description:""
  });
  
  const handleShow = () => {setShow(true)};
   const handelBannersImage = (e)=>{
    setBanners([...banners,e.target.files[0]])
  }
  const handelProductsImage = (e)=>{
    setProducts([...products ,e.target.files[0]])
  };
  const handleChangeCategory = (e)=>{
    const category = categoryList(categories).find(cate=>cate.id == e.target.value);
    setCategoryId(e.target.value);
    setType(category.type);
  }
  const handleChange = (e)=>{
    setPageData(prevState=>({
        ...prevState,
        [e.target.name]:e.target.value
    }))
  };
  const {title,description} = pageData;
  // function create page
  const createPage = () => {
    const form = new FormData();
    if(title === ""){
      alert("Page Name Is Required");
      return;
    }
    form.append("title",title);
    form.append("category",categoryId);
    form.append("type",type);
    form.append("description",description);
    banners.map(banner=>{
      form.append("banners",banner)
    });
    products.map(product=>{
      form.append("products",product)
    });
    dispatch(createProductPage(form));
    setPageData({
        title:"",
        description:""
    })
    setShow(false);
  };

  return (
      <ModalApp
        modalTitle="Create New Category"
        show={show}
        handleShow={handleShow}
        handleClose={() => setShow(false)}
        title="Create New Page"
        actionBtn="Create Page"
        modalAction={createPage}
      >
        <Row>
          <Col md={12}>
            <Form.Group className="mb-3" controlId="categoryId.ControlInput">
              <Form.Control type="text" placeholder="page Title" name="title" 
                value={title}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group>
              <Form.Select name="category" value={categoryId} onChange={handleChangeCategory}>
                <option> selecte Category </option>
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
          <Col md={12}>
            <Form.Group
              className="my-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                rows={3}
                name="description"
                value={description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3 mt-3">
              <Form.Control
                type="file"
                multiple
                name="banners"
                onChange={handelBannersImage}
              />
            </Form.Group>
          </Col>
          <Col md={12}>
            <Form.Group controlId="formFile" className="mb-3 mt-3">
              <Form.Control
                type="file"
                multiple
                name="products"
                onChange={handelProductsImage}
              />
            </Form.Group>
          </Col>
        </Row>
      </ModalApp>
  );
};

export default NewPage;

import React from "react";
import { Row, Col ,Card } from "react-bootstrap";
const ProductData = (props) => {
  const { name, price, description, category, productPictures } =props.product;
  
  return (
    <div className="product-data">
      <h2 className="my-5 text-center text-capitalize"> {name}</h2>
      <Row>
        <Col md={5}>
         <div className=" d-flex">
            <div className="product-images d-flex justify-content-between">  
              {
              productPictures.map((pic)=>{
                return <img key={pic._id} src={`http://localhost:5000/public/${pic.img}`} />
              })
              }
            </div>
          <div className="main-image"> <img src={`http://localhost:5000/public/${productPictures[0].img}`} /> </div>
         </div>
        </Col>
        <Col md={7}>
          <Card>
            <Card.Header> {category.name} </Card.Header>
            <Card.Body>
              <Card.Title> {name}</Card.Title>
              <Card.Text><strong>description </strong>{description}</Card.Text>
              <p> <strong>Price:</strong>  ${price}  </p>
          
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductData;

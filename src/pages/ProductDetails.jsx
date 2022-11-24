import React from 'react'
import { Container } from 'react-bootstrap'
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getProductBySlug } from '../helperFunction/helper';
import ProductData from '../components/products/ProductData';

const ProductDetails = () => {
  const {isLoading , products} = useSelector(state=>state.product);
  const {slug} = useParams();
  let product ;
  if(products){
    product = getProductBySlug(products, slug);
  };
 
  if (!product) {
    return <div className="alert alert-danger text-center">
      <p> no sush Product could be found </p>
    </div>
  };

  return (
    <div className='product-detalis'>
      <Container>
        {
          isLoading ? <p> product Loading.... </p> :  <ProductData product={product} />
        }
      </Container>
    </div>
  )
}

export default ProductDetails

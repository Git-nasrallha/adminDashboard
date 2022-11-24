import React from "react";
import { Link } from "react-router-dom";
import { useSelector ,useDispatch } from "react-redux";
import {RiEditFill} from "react-icons/ri";
import {AiFillDelete} from "react-icons/ai";
import { deleteProduct} from "../store/actions/products";
import DataTable from "../components/DataTable";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Products = () => {
  const { isLoading, products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  //columns
 const columns=[
  { field: 'id', headerName: 'ID', width: 170 },
  { field: 'Name', headerName: 'Product Name', width: 200 },
  { field: 'description', headerName: 'Product Description', width: 300 },
  { field: 'slug', headerName: 'Slug', width: 200 },
  { field: 'price', headerName: 'price', width: 120 },
  { field: 'quantity', headerName: 'stock', width: 120 },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 160,
    renderCell:(params)=>{
      return(
        < div className="action">
        <Link to={`edit/${params.row.id}`} title="Edit Product" > <RiEditFill/></Link>
        <button onClick={()=>dispatch(deleteProduct(params.row.id))} title="Delete Product" > <AiFillDelete/> </button>
        <Link to={`${params.row.slug}`} title="View Product" > <RemoveRedEyeIcon/> </Link>
        </div>
      )
    }
  }
];
//rows
 const rows = products && products.map(product=>{
  return {
    id:product._id , 
    Name:product.name , 
    description:product.description,
    slug:product.slug , 
    price:product.price,
    quantity:product.quantity
  }
})

  return (
    <div className="products-page">
      <div className="category-header d-flex justify-content-between ">
        <h3>Products</h3>
        <Link to="addProduct" className="btn-add">Add New Product</Link>
      </div>
      <div className="products-content text-center mt-5 text-capitalize">
        {
          isLoading ? <p className="alert alert-info">products Loading ....</p>
            :<DataTable columns={columns} rows={rows}/>
        }
      </div>
    </div>
  );
};

export default Products;

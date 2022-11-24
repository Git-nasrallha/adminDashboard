import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import { useSelector ,useDispatch } from "react-redux";
import {RiEditFill} from "react-icons/ri";
import {AiFillDelete} from "react-icons/ai";
import DataTable from "../components/DataTable";
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

const Users = () => {
  const { isLoading, users } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  //columns
 const columns=[
  { field: 'id', headerName: 'ID', width: 150 },
  { field: 'firstName', headerName: 'First name', width: 100 },
  { field: 'lastName', headerName: 'Last name', width: 100 },
  { field: 'email', headerName: 'Email', width: 100 },
  { field: 'role', headerName: 'user Role', width: 80 },
  { field: 'password', headerName: 'password', width: 150 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 150,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'action',
    headerName: 'Action',
    sortable: false,
    width: 140,
    renderCell:(params)=>{
      return(
        < div className="action">
        <Link to={`/users/edit/${params.row.id}`} title="Edit user" > <RiEditFill/></Link>
        <button onClick={()=>console.log(params.row)} title="Delete user" > <AiFillDelete/> </button>
        <Link to={`/user/${params.row.id}`} title="View user" > <RemoveRedEyeIcon/> </Link>
        </div>
      )
    }
  }
];
//rows
 const rows = users && users.map(user=>{
  return {
    id:user._id , 
    firstName:user.firstName,
    lastName:user.lastName,
    email:user.email,
    role:user.role , 
    password:user.password
  }
})


  return (
    <div className="products-page">
        <div className="category-header d-flex justify-content-between ">
          <h3>Users</h3>
          <Link to="/users/register" className="btn-add"> Add New User </Link>
        </div>
        <div className="products-content text-center mt-5 text-capitalize">
          {
            isLoading ? <p className="alert alert-info">users Loading ....</p>
             :<DataTable columns={columns} rows={rows}/>
          }
          
        </div>
    </div>
  );
};

export default Users;

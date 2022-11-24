import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Categories from '../pages/Categories';
import AddProduct from '../components/products/AddProduct';
import Products from '../pages/Products';
import Root from '../pages/Root';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ProductDetails from '../pages/ProductDetails';
import EditProduct from '../components/products/EditProduct';
import NewPage from '../pages/NewPage';
import Users from '../pages/Users';
import Orders from './../pages/Orders';

const RouteApp = () => {
  return (
    <>
      <Routes>
        <Route path='/'  exact element={<Root/>} >
          <Route index element={<Home />} />
          <Route path='products'>
            <Route index exact element={<Products/>}/>
            <Route path='addProduct' element={<AddProduct/>} />
            <Route path=':slug' exact element={<ProductDetails/>} />
            <Route path='edit/:id' exact element={<EditProduct/>} />
          </Route>
          <Route path='categories' exact element={<Categories/>} />
          <Route path='page' exact element={<NewPage/>} />
          <Route path='users' exact element={<Users/>}/>
          <Route path='orders' exact element={<Orders/>}/>
        </Route>
        <Route>
          <Route path='users/register' exact element={<Register/>} />
          <Route path='users/login' exact element={<Login/>} />
        </Route>
      </Routes>
    </>
  )
}

export default RouteApp

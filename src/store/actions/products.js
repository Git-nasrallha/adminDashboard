import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {config} from '../../config/data.js';
import {toast} from "react-toastify"

const apiUrl = 'http://localhost:5000/api/products';

export const createProduct =createAsyncThunk('product/createProduct', async(newProduct,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/addproduct` , newProduct, config);
        return res.data.product;
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});
// edit product
export const editingProduct = createAsyncThunk("edit/product",async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}/editproduct/${id}`, config);
        return res.data.selectedProduct;
        
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});
// update product
export const updatingProduct = createAsyncThunk("update/product",async(payload,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const {id,updatedData} = payload;
        const res = await axios.put(`${apiUrl}/updateproduct/${id}`,updatedData, config);
       if(res.status === 200){
            toast.info(`${res.data.name} Is Successfully Updated`,{
                position:"top-right",
                autoClose:1000
            })
        }
     return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})
//delete product
export const deleteProduct =createAsyncThunk('product/deleteProduct', async(id,thunkAPI)=>{
    const {rejectWithValue , getState} = thunkAPI;
    try {
        const products = getState().product.products.slice();
        const res = await axios.delete(`${apiUrl}/deleteproduct/${id}`, config);
        const newProducts = products.filter(item=>item._id !== id);
        return newProducts;   
    } catch (error) {
        console.log(error.response.data);
        return rejectWithValue(error.response.data);
    }
});
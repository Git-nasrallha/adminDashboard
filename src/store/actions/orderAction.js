import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/order';

// all orders
export const getOrders = createAsyncThunk('order/getOrders',async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}`,config);
        return res.data;
    }catch (error) {
       return rejectWithValue(error.response.data) 
    }
});
// update order statsus 
export const updateOrderType = createAsyncThunk('order/updateOrderType',async(payload,thunkAPI)=>{
    const {rejectWithValue , dispatch} = thunkAPI;
    try {
        const res = await axios.put(`${apiUrl}/updateOrderType`,payload,config);
        if(res.status === 200){
            dispatch(getOrders());
        }
       // return res.data;
    }catch (error) {
       return rejectWithValue(error.response.data) 
    }
});

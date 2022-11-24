import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/users/admin/createPage';


export const createProductPage = createAsyncThunk("carete/newPage" , async(pageData,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(apiUrl,pageData,config);
        //return res.data
        console.log(res.data)
    } catch (error) {
        console.log(error.response.data)
        return rejectWithValue(error.response.data)
    }
});


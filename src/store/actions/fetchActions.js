import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/fetchData';


export const getAllData = createAsyncThunk("fetchAll/data" , async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get(apiUrl,config);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
});


import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/users/admin';

export const register = createAsyncThunk('auth/register',async(user,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/register`,user);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
}); // end register user

export const login = createAsyncThunk('auth/login',async(user,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.post(`${apiUrl}/login`,user);
        if(res.data){
            const token = JSON.stringify(res.data.token);
            localStorage.setItem('token',token);
        }
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
}); // end login user

export const logout =()=>{
    localStorage.removeItem('token');
};

//user loaded
export const userLoaded = createAsyncThunk('auth/userLoaded',async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const res = await axios.get(`${apiUrl}/getAdmin`, config);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.response.data.errors)
    }
}); //end user loaded
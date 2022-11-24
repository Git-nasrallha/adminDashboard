import {createSlice} from "@reduxjs/toolkit";
import { login, register, userLoaded } from "../actions/authAction";

const token = JSON.parse(localStorage.getItem('token'))

const INT_STATE ={
    token: token ? token : null ,
    isLoding:false,
    isError:false,
    isAuthontecated:false,
    errors:null,
    admin:null
};

const authSlice = createSlice({
    name:"auth",
    initialState:INT_STATE,
    extraReducers:{
        // register user
        [register.pending]:(state)=>{ 
            state.isLoding = true
            state.isError = false
            state.isAuthontecated = false
            state.errors = null
            state.admin = null
        },
        [register.fulfilled]:(state , actions)=>{
            state.isLoding = false
            state.isError = false
            state.isAuthontecated = true
            state.errors = null
            state.admin = actions.payload.admin
        },
        [register.rejected]:(state , actions)=>{ 
            state.isLoding = false
            state.isError = true
            state.isAuthontecated = false
            state.errors = actions.payload 
            state.admin = null
        },
        //loginin
        [login.pending]:(state)=>{ 
            state.token = null
            state.isLoding = true
            state.isError = false
            state.isAuthontecated = false
            state.errors = null
            state.admin = null
        },
        [login.fulfilled]:(state , actions)=>{
            state.token = actions.payload.token
            state.isLoding = false
            state.isError = false
            state.isAuthontecated = true
            state.errors = null
            state.admin = actions.payload.admin
        },
        [login.rejected]:(state , actions)=>{
            state.token = null 
            state.isLoding = false
            state.isError = true
            state.isAuthontecated = false
            state.errors = actions.payload 
            state.admin = null
        },
        //user loaded
        [userLoaded.pending]:(state)=>{ 
            state.isLoding = true
            state.isError = false
            state.isAuthontecated = false
            state.errors = null
            state.admin = null
        },
        [userLoaded.fulfilled]:(state , actions)=>{
            state.isLoding = false
            state.isError = false
            state.isAuthontecated = true
            state.errors = null
            state.admin = actions.payload.admin
        },
        [userLoaded.rejected]:(state , actions)=>{
            state.token = null 
            state.isLoding = false
            state.isError = true
            state.isAuthontecated = false
            state.errors = actions.payload 
            state.admin = null
        }
    }
});

export default authSlice.reducer;
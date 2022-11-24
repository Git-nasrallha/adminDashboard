import {createSlice} from "@reduxjs/toolkit";
import { getAllData } from "../actions/fetchActions";


const INT_STATE ={
    isLoading:false,
    isError:false,
    users:null,
    errors:null
};

const userSlice = createSlice({
    name:"user",
    initialState:INT_STATE,
    extraReducers:{
        //get users
        [getAllData.pending]:(state)=>{
            state.isLoading = true
        },
        [getAllData.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.users = action.payload.users
            state.errors = null
        },
        [getAllData.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.users = null
            state.errors = action.payload
        }
    }
        
});

export default userSlice.reducer;
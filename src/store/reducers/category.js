import {createSlice} from "@reduxjs/toolkit";
import { addCategory, deletCategories, updatedCategory } from "../actions/categoryAction";
import { getAllData } from "../actions/fetchActions";

const INT_STATE ={
    isLoading:false,
    isError:false,
    categories:null,
    errors:null
};

const categorySlice = createSlice({
    name:"category",
    initialState:INT_STATE,
    extraReducers:{
        //get categories
        [getAllData.pending]:(state)=>{
            state.isLoading = true
        },
        [getAllData.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.categories = action.payload.categories
            state.errors = null
        },
        [getAllData.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.categories = null
            state.errors = action.payload
        },
         //add new category
         [addCategory.pending]:(state)=>{
            state.isLoading = true
        },
        [addCategory.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.categories = action.payload
            state.errors = null
        },
        [addCategory.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.categories = null
            state.errors = action.payload
        },
        //update  category
        [updatedCategory.pending]:(state)=>{
            state.isLoading = true
        },
        [updatedCategory.fulfilled]:(state)=>{
            state.isLoading = false
            state.isError = false
            state.errors = null
        },
        [updatedCategory.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.categories = null
            state.errors = action.payload
        },
        //delete  category
        [deletCategories.pending]:(state)=>{
            state.isLoading = true
        },
        [deletCategories.fulfilled]:(state)=>{
            state.isLoading = false
            state.isError = false
            state.errors = null
        },
        [deletCategories.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.categories = null
            state.errors = action.payload
        }
    }
});

export default categorySlice.reducer;
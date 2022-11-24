import {createSlice} from "@reduxjs/toolkit";
import { getAllData } from "../actions/fetchActions";
import { createProduct, deleteProduct,editingProduct } from "../actions/products";

const INT_STATE ={
    isLoading:false,
    isError:false,
    products:null,
    isEdit:false,
    errors:null
};

const productSlice = createSlice({
    name:"product",
    initialState:INT_STATE,
    extraReducers:{
        //get products
        [getAllData.pending]:(state)=>{
            state.isLoading = true
        },
        [getAllData.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.isError = false
            state.products = action.payload.products
            state.errors = null
        },
        [getAllData.rejected]:(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.products = null
            state.errors = action.payload
        },
        // add new product
        [createProduct.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
            state.errors = null

        },
        [createProduct.fulfilled]:(state , action)=>{
            state.isLoading = false
            state.isError = false
            state.products = [...state.products , action.payload]
            state.errors = null

        },
        [createProduct.rejected]:(state ,action)=>{
            state.isLoading = false
            state.isError = true
            state.products = null
            state.errors = action.payload

        },
         //edit product
         [editingProduct.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
            state.isEdit =false
            state.product = null
            state.errors = null
        },
         // delete product
         [deleteProduct.pending]:(state)=>{
            state.isLoading = true
            state.isError = false
            state.errors = null

        },
        [deleteProduct.rejected]:(state ,action)=>{
            state.isLoading = false
            state.isError = true
            state.products = null
            state.errors = action.payload

        }
    }
});

export default productSlice.reducer;
import { createSlice } from '@reduxjs/toolkit';
import { getOrders } from './../actions/orderAction';

const INIT_STATE = {
    isLoading:false,
    orders:[],
    isError:false,
    error:null
}

const ordersSlice = createSlice({
    name:"orders",
    initialState:INIT_STATE,
    extraReducers:{
        [getOrders.pending]:(state)=>{
            state.isLoading = true
        },
        [getOrders.fulfilled]:(state,action)=>{
            state.isLoading = false
            state.orders = action.payload
            state.isError = false
            state.error = null
        },
        [getOrders.rejected]:(state,action)=>{
            state.isLoading = false
            state.orders = []
            state.isError = true
            state.error = action.payload
        },
    }
});

export default ordersSlice.reducer;

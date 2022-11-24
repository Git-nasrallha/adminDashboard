import {configureStore} from '@reduxjs/toolkit';
import Auth from './reducers/auth';
import category from "./reducers/category";
import product from "./reducers/product";
import user from "./reducers/users";
import orders from "./reducers/orderSlice";


const store = configureStore({
    reducer:{
        Auth,
        category,
        product,
        user,
        orders
    }
});

export default store;
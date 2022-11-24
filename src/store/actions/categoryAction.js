import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from 'axios';
import { getAllData } from "./fetchActions";
import {config} from '../../config/data.js';

const apiUrl = 'http://localhost:5000/api/categories';

// add new category
export const addCategory =createAsyncThunk('category/addCategory',async(newCategory,thunkAPI)=>{
   const {rejectWithValue,getState} = thunkAPI;
   try {
    const categories = getState().category.categories.slice();
        const res = await axios.post(`${apiUrl}/addCategory`,newCategory,config);
        const _category = res.data.category;

        const handelAddNewCategory = (parentId,categories , category)=>{
            if(parentId == null){
                return [
                    ...categories ,{
                        _id:category._id,
                        name:category.name,
                        slug:category.slug,
                        children:[]
                    }
                ]
            }
            let myCategories = [];
            categories.map(cate=>{
                if(cate._id == parentId){
                    myCategories.push({
                        ...cate,
                        children: cate.children ?
                        handelAddNewCategory(parentId,[...cate.children,{
                        ...category
                        }],category) : []
                    })
                }else{
                    myCategories.push({
                        ...cate,category,
                        children: cate.children ?
                        handelAddNewCategory(parentId,cate.children,category) : []
                    })
                }
            })
            return myCategories;
        };
        const newCategories  = handelAddNewCategory(_category.parentId,categories,_category);
        return newCategories;
   } catch (error) {
    return rejectWithValue(error.response.data)
   }
});
// update category
export const updatedCategory =createAsyncThunk('category/updateCategory',async(updateCategory,thunkAPI)=>{
    const {rejectWithValue , dispatch} = thunkAPI;
    try {
         const res = await axios.put(`${apiUrl}/updateCategory`,updateCategory,config);
         //const category = res.data;
         if(res.status === 201){
            dispatch(getAllData())
         }
         return true;
    } catch (error) {
     return rejectWithValue(error.response.data)
    }
 });
 // delete category
export const deletCategories =createAsyncThunk('delete/deletCategory',async(ids,thunkAPI)=>{
    const {rejectWithValue , dispatch} = thunkAPI;
    try {
         const res = await axios.post(`${apiUrl}/deleteCtegory`,{ids} ,config);
         if(res.status === 201){
            dispatch(getAllData())
         }
         return true;
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
 });
 

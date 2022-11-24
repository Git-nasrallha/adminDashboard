import React ,{useState} from 'react';
import CheckboxTree from 'react-checkbox-tree';
import {ImCheckboxUnchecked} from "react-icons/im";
import {AiFillCheckSquare} from "react-icons/ai";
import {BiUpArrow ,BiDownArrow} from "react-icons/bi";
import {IoIosAdd, IoIosCloudUpload, IoIosTrash} from "react-icons/io";
import Layout from '../components/Layout';
import {useSelector , useDispatch} from "react-redux";
import AddCategory from '../components/category/AddCategory';
import EditCategory from '../components/category/EditCategory';
import {renderCategory, updateAndDelteCheckedAndExpanded } from '../helperFunction/helper';
import { deletCategories, updatedCategory } from '../store/actions/categoryAction';
import DeleteCategory from '../components/category/DeleteCategory';


const Categories = () => {
    const {categories} = useSelector(state=>state.category);
    const [show , setShow] = useState(false);
    const [showUpdateModal , setShowUpdateModal] = useState(false);
    const [showDeleteModal , setShowDeleteModal] = useState(false);
    const [checked , setChecked] = useState([]);
    const [expanded , setExpanded] = useState([]);
    const [checkedArray , setCheckedArray] = useState([]);
    const [expandedArray , setExpandedArray ] = useState([]);

    const dispatch = useDispatch();
    // handel show modal
    const handleShow = ()=>{setShow(true)};
    // handel edit category
    const editCategory = ()=>{
     const updateData= updateAndDelteCheckedAndExpanded(categories,checked,expanded);
      setCheckedArray(updateData.checkedArray);
      setExpandedArray(updateData.expandedArray);
      setShowUpdateModal(true);
    };

    // handleChange function
    const handleChangeInput = (key , value ,index, type)=>{
      if(type == 'checked'){
      const updateCheckedArray = checkedArray.map((item,_index)=> index == _index ? { ...item , [key]:value } : item )
      setCheckedArray(updateCheckedArray)
      }else if(type == 'expanded'){
        const updateExpandeddArray = expandedArray.map((item,_index)=> index == _index ? { ...item , [key]:value } : item )
        setExpandedArray(updateExpandeddArray)
      }
    }
    //update function category
    const updateCategoriesForm = () => {
      const form = new FormData();
      expandedArray.forEach((item) => {
          form.append('_id', item.id);
          form.append('name', item.name);
          form.append('parentId', item.parentId?item.parentId:"");
          form.append('type', item.type?item.type:"");
      });
      checkedArray.forEach((item) => {
          form.append('_id', item.id);
          form.append('name', item.name);
          form.append('parentId', item.parentId ? item.parentId:"");
          form.append('type', item.type?item.type:"");
      });
      dispatch(updatedCategory(form));
      setShowUpdateModal(false);
      
  };
  //show delete modal
  const showDelteModalFun = ()=>{
    const deleteData= updateAndDelteCheckedAndExpanded(categories,checked,expanded);
      setCheckedArray(deleteData.checkedArray);
      setExpandedArray(deleteData.expandedArray);
      setShowDeleteModal(true);
  }
  //delet category function
  const deletCatedory=()=>{
    const checkedArrayIds = checkedArray.map(item=>({_id:item.id}));
    const expandedArrayIds = expandedArray.map(item=>({_id:item.id}));
    const ids = expandedArrayIds.concat(checkedArrayIds);
    if(checkedArray.length > 0){
      dispatch(deletCategories(checkedArrayIds))
    }
    setShowDeleteModal(false);
  }
  return (
    <div className='categories-page'>
        <div className='category-header d-flex justify-content-between '>
                <h3>Categories</h3>
              <div>
                <button size="sm" onClick={handleShow} > <IoIosAdd/> Add New Category</button>
                <button size="sm" onClick={editCategory} > <IoIosCloudUpload/> Edit Category</button>
                <button size="sm"  onClick={showDelteModalFun}> <IoIosTrash/>  delete Category</button>
              </div>
        </div>
        <CheckboxTree
          nodes={renderCategory(categories)}
          checked={checked}
          expanded={expanded}
          onCheck={(checked) => setChecked(checked)}
          onExpand={(expanded) => setExpanded(expanded)}
          icons={{
            check: <AiFillCheckSquare />,
            uncheck: <ImCheckboxUnchecked />,
            halfCheck: <AiFillCheckSquare />,
            expandClose: <BiUpArrow />,
            expandOpen: <BiDownArrow />,
          }}
        />
        <AddCategory 
            categories={categories} 
            dispatch={dispatch} 
            show={show}
            handleClose={()=>setShow(false)} 
        />
        <EditCategory 
            categories={categories} 
            show={showUpdateModal}
            handleClose={()=>setShowUpdateModal(false)} 
            checkedArray={checkedArray}
            expandedArray={expandedArray}
            handleChange = {handleChangeInput}
            updateCategory={updateCategoriesForm}
        />
          <DeleteCategory 
            show={showDeleteModal}
            handleClose={()=>setShowDeleteModal(false)} 
            checkedArray={checkedArray}
            expandedArray={expandedArray}
            deletCatedory={deletCatedory}
        />
    </div>
  )
}

export default Categories

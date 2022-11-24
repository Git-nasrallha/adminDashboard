  //category list
  export const categoryList = (categories , options=[])=>{
    categories && categories.map(category => {
        options.push({
          id:category._id ,
          name:category.name ,
          parentId:category.parentId,
          type:category.type
        });
        if(category.children.length > 0){
            categoryList(category.children , options)
        }
    }) ;
    return options;
};

// get one product by slug
export const getProductBySlug =(arr,value)=>{
    return arr.find(item=>item.slug == value)
};

// get one product by id
export const getProductById =(arr,value)=>{
    return arr.find(item=>item._id == value)
};
// render category
export const renderCategory = (categories) => {
    let allCategories = [];
    categories &&
      categories.map((category) => {
        allCategories.push({
          value: category._id,
          label: category.name,
          children:
            category.children.length > 0 && renderCategory(category.children),
        });
      });
    return allCategories;
};

// hanle function updateAndDelteCheckedAndExpanded
export const updateAndDelteCheckedAndExpanded =(categories,checked ,expanded)=>{
  const categoriesList = categoryList(categories);
      const checkedArray = [];
      const expandedArray = [];
      // get all categories in checked and expanded
      checked && checked.forEach((catId)=>{
        const category = categoriesList.find(cate=>cate.id == catId);
        category && checkedArray.push(category);
      }); // end checked
      expanded && expanded.forEach((catId)=>{
        const category = categoriesList.find(cate=>cate.id == catId);
        category && expandedArray.push(category);
      }) // end expanded
      //return
      return{
        expandedArray,
        checkedArray
      }
}



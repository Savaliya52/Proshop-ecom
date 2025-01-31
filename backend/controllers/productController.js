import asyncHandler from "../middleware/asyncHandler.js";
import Product from '../models/productModel.js'

//@desc         fetch all products
// @route       GET/api/products
//@acsess       Public
const getProducts = asyncHandler(async (req,res) => {
    const products = await Product.find({});
    res.json(products);
});
//@desc         fetch all products
// @route       GET/api/products/:id
//@acsess       Public
const getProductById= asyncHandler(async (req,res) => {
    const product = await Product.findById(req.params.id);

    if(product){
   return  res.json(product);
   }else{
    throw new Error('Resource Not found');
   }

});

export {getProductById, getProducts};
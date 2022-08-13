const ProductsModel=require("../models/ProductsModel");

exports.ProductList=async(req,res)=>{
    res.status(200).json({status:"success"})
}
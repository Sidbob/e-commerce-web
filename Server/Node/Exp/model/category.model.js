import Mongoose from "mongoose";
 const { Schema } = Mongoose;

 const schema = new Schema({
     category_name:{
         type: String
     },
 })
















 const Category = Mongoose.model('Category', schema);
 export default Category;
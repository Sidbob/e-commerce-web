import Mongoose from "mongoose";
const { Schema } = Mongoose;

 const schema = new Schema({
     subcategoryname:{
         type: String
     },

     category_id: { type: Schema.Types.ObjectId, ref: 'Category'}



 });


const Subcategory = Mongoose.model('Sub-category', schema);
export default Subcategory;
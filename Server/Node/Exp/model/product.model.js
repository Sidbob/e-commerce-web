import Mongoose from "mongoose";
const { Schema } = Mongoose;


const schema = new Schema ({

ProductName: {
    type : String
},
Description: {
    type: String
},
Price: {
    type: Number
},
short_desp:{
    type:String
},
ImageFile:{
    type:String
},
Category_id: { type: Schema.Types.ObjectId, ref: 'Category'},
Subcategory_id: {type: Schema.Types.ObjectId, ref: 'Subcategory'},
});




const Product = Mongoose.model  ('Product' , schema);
export default Product;
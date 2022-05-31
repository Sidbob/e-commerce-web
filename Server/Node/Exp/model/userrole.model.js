import Mongoose from "mongoose";
const { Schema } = Mongoose;

const schema =  new Schema ({
    Role: {
        type: String
    }

})



const Userrole = Mongoose.model  ('UserRole' , schema);
export default Userrole;
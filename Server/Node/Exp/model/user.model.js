import Mongoose from "mongoose";
const { Schema } = Mongoose;

const schema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    contact_number: {
        type: String
    },

    // Role_id: { type: Schema.Types.ObjectId, ref: 'UserRole' },

    password: {
        type: String
    },
});

const User = Mongoose.model('User', schema);
export default User;
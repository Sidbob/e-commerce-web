import { combineReducers } from "redux";
import { cartReducer } from "./reducer";
// import { SaveCartReducer } from "./reducer";


const rootred = combineReducers({
    cartReducer,
    // SaveCartReducer
});

export default rootred;
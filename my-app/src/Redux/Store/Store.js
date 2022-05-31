import { createStore } from "redux";
import rootred from "../Reducer/main";

const Store = createStore(
    rootred
);

export default Store;
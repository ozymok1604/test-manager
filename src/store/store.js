import { createStore } from "redux";
import { toDoReducer } from "./reducer";

const store = createStore(toDoReducer);

export default store;

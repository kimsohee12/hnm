//Reducer 를 합치는 작업!
import { combineReducers } from "redux";
import authenticateReducer from './authenticateReducer'
import productReducer from "./productReducer";



//reducer 를 객체 형태로 넣어둠 
export default combineReducers({
    auth : authenticateReducer,
    product : productReducer
});
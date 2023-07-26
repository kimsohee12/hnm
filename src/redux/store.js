import {createStore, applyMiddleware} from"redux";
import thunk from "redux-thunk";
import productReducer from "./reducers/productReducer";

//applyMiddleware : 리덕스 미들웨어 적용
//                                     thunk 라는 미들웨어를 적용 시켜줌 
let store = createStore(productReducer,applyMiddleware(thunk))

export default store
import {createStore, applyMiddleware} from"redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'
//state 바뀐 값을 확인 하고 싶을 때마다 바로 실시간으로 확인할 수 있는 
//DevTools (크롬창에서 확인 가능)
import { composeWithDevTools } from "redux-devtools-extension";

//applyMiddleware : 리덕스 미들웨어 적용
//Reducer 파일이 여러개가 되면 Reducer들을 합쳐주고 합친걸 store에 적용시켜줘야함
//reducer들을 합친 reducers폴더 안에 index 파일인 rootReducer을 넣어줌

//                                     thunk 라는 미들웨어를 적용 시켜줌 
let store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk)))

export default store
import {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countReducer } from "./Reducers/todoReducer";
import { todoManager } from "./Reducers/todoList";
import { imagesReducer } from "./Reducers/imagesReducer";
import { aboutReducer } from "./Reducers/aboutReducer";
import { instagramReducer } from "./Reducers/Instagram/instagramReducer"; 


const middleWare = [thunk]

const rootReducer = combineReducers({
    counter: countReducer,
    todoManager,
    imagesReducer,
    aboutReducer,
    instagramReducer,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
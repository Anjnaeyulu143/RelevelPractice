import {createStore,combineReducers,applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { countReducer } from "./Reducers/todoReducer";
import { todoManager } from "./Reducers/todoList";


const middleWare = [thunk]

const rootReducer = combineReducers({
    counter: countReducer,
    todoManager,
})

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWare))
)

export default store;
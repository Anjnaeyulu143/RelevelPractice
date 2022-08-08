import { addTodo,removeTodo } from "../Actions"

const intialState = {
    usersList:[],
    name:"vinay"
}


export const todoManager = (state=intialState,action)=> {
    switch(action.type){
        case addTodo:
            return {...state,usersList : action.payload,name:"Anjan"}
        case removeTodo:
            return {...state,usersList:action.payload}
        default:
            return state
    }
}


import { incrementCount,decrementCount } from "../Actions"

const intialState = {
    count:10
}

export const countReducer = (state=intialState,action)=>{
    switch(action.type){
        case incrementCount:
            return {
                ...state,
                count:action.payload
            }
        case decrementCount:
            return {
                ...state,
                count:action.payload
            }
        default:
            return state
    }
}
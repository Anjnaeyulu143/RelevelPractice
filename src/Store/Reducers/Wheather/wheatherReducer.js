import { wheatherData } from "../../Actions/WheatherApp" 

const initialState = {
    data : {}
}

export const wheatherReducer = (state=initialState,action) => {
    switch (action.type){
        case wheatherData:
            return action.payload
        
        default:
            return state
    }
}
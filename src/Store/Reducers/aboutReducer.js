import {aboutUser} from "../Actions"

const initialState = {
    aboutUsersData : []
}

export const aboutReducer = (state=initialState,action) => {
    switch(action.type){
        case aboutUser:
            return {
                ...state,
                aboutUsersData: action.payload
            }
        default:
            return state
    }
}
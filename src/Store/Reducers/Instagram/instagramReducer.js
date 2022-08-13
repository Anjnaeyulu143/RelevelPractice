import { imagesData,modalToggle,postDetails } from "../../Actions/InstagramApp"


const intialState = {
    data : {},
    boolean: false,
    currentPost:{}
}


export const instagramReducer = (state=intialState,action) => {
    switch (action.type){
        case imagesData:
            return {
                ...state,
                data:action.payload
            }
        case modalToggle:
            return {
                ...state,boolean:action.payload
            }

        case postDetails:
            return{
                ...state,
                currentPost:action.payload
            }
                    

        default:
            return state
    }
}
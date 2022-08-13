
import { initialState } from "../../data";

export const imagesData = "IMAGES_DATA";
export const modalToggle = "MODAL_TOGGLE";
export const postDetails = "POST_DETAILS";


export const instagramData = () => (dispatch,getstate) => {

    
    dispatch({
        type:imagesData,
        payload:initialState
    })

}


export const toggleModal = (bool) => (dispatch,getState) => {

    const {instagramReducer} = getState();

    const {boolean} = instagramReducer
    
    dispatch({
        type:modalToggle,
        payload:bool
    })

}

export const viewPostData = (post) => (dispatch,getState) => {
    const {instagramReducer:{currentPost}} = getState();

    dispatch({
        type:postDetails,
        payload:post
    })
}
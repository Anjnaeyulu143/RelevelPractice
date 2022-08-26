import { initialState } from "../../data";

export const imagesData = "IMAGES_DATA";
export const modalToggle = "MODAL_TOGGLE";
export const postDetailsReducer = "POST_DETAILS";

export const instagramData = () => (dispatch, getState) => {
  const { instagramReducer } = getState();

  dispatch({
    type: imagesData,
    payload: {
      ...instagramReducer,
      data: initialState,
    },
  });
};

export const toggleModal = (bool) => (dispatch, getState) => {
  const { instagramReducer } = getState();

  dispatch({
    type: modalToggle,
    payload: {
      ...instagramReducer,
      boolean: bool,
    },
  });
};

export const viewPostData = (userDetails) => (dispatch, getState) => {
  const { instagramReducer } = getState();

  const { bool, postDetails } = userDetails;

  dispatch({
    type: postDetailsReducer,
    payload: {
      ...instagramReducer,
      boolean: bool,
      currentPost: postDetails,
    },
  });
};

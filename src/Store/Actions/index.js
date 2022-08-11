import axios from "axios";



export const imagesData = "IMAGES_DATA";
export const incrementCount = 'INCREMENT_COUNT';
export const decrementCount = "DECREMENT_COUNT";
export const addTodo = "ADD_TODO";
export const removeTodo = "REMOVE_TODO"
export const deleteUser = "DELETE_USER";
export const aboutUser = "ABOUT_USER";

export const aboutRoute = (data) => (dispatch,getState) => {
    

    // const {aboutReducer:{aboutUsersData}} = getState();

    dispatch({
        type:aboutUser,
        payload:data
    })

}


export const backendData = () => async(dispatch,getState) => {

    const data = await axios.get(" https://jsonplaceholder.typicode.com/albums")

    dispatch({
        type:imagesData,
        payload: data.data.slice(0,10)
    })

}



export const imageDelete = (user) => (dispatch,getState) => {
    const {imagesReducer} = getState();
    const {data} = imagesReducer;

    console.log(imagesReducer)
    
    const filteredDate = data?.filter((eachItem => eachItem.id !== user.id))

    dispatch({
        type:deleteUser,
        payload:filteredDate
    })
}


export const userInfo = (user) => (dispatch,getState) => {
    const {todoManager} = getState()
    console.log(getState())
    console.log(todoManager)

    const {usersList} = todoManager

    const hasTodo = usersList?.find(i => i.id === user.id )

    if (!hasTodo && user.todoName !== '') {
        dispatch({
            type:addTodo,
            payload:[...usersList,user]
        })
    }
}

export const userInfoDelete = (user) => (dispatch,getState) => {
    const {todoManager} = getState()


    const {usersList} = todoManager

    const filterdList = usersList?.filter(eachItem => eachItem.id !== user.id)


    dispatch({
        type: removeTodo,
        payload: filterdList
    })

}



export const increaseValue = (a) => (dispatch,getState) => {

    const {counter} = getState();

    const {count} = counter;
 
    dispatch({
        type:incrementCount,
        payload: count+10
    })

    
}

export const decreaseValue = (b) => (dispatch,getState) => {
    
    const {counter} = getState();

    const {count} = counter;


    dispatch({
        type:decrementCount,
        payload: count - 10
    })
  
}

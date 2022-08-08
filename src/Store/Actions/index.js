

export const incrementCount = 'INCREMENT_COUNT';
export const decrementCount = "DECREMENT_COUNT";
export const addTodo = "ADD_TODO";
export const removeTodo = "REMOVE_TODO"


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

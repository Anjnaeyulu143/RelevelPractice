import data from "../../WheatherData";


export const wheatherData = "WHEATHER__DATA";



export const fetchingWheatherData = () => (dispatch,getState) => {

    const {wheatherReducer} = getState()

    dispatch({
        type:wheatherData,
        payload:{
            ...wheatherReducer,data:data
        }
    })

    console.log(wheatherReducer)


}
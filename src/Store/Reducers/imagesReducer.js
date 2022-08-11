// import axios from "axios"
// import { useEffect, useState } from "react";
import { imagesData,deleteUser } from "../Actions";


//   const gettingData = async() => {
//     const [data,setData] = useState()
//     try{
//       const backendData = await axios.get("https://jsonplaceholder.typicode.com/albums");

//       setData(backendData.data.slice(0,10))
//     }catch(error){
//       console.log(error)
//     }
//   }


//   useEffect(() => {
//       gettingData()
//   },[])


//   console.log(data)



const initialState = {
    data : []
}

export const imagesReducer = (state=initialState,action)=>{
    switch(action.type){
        case imagesData:
            return {...state,data:action.payload}

        case deleteUser:
            return {
                ...state,
                data:action.payload
            }

        default:
            return state
    }
}
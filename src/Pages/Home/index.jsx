import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { backendData,imageDelete } from '../../Store/Actions'

export const Home = () => {


  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(backendData())
  },[dispatch])

  const {data} = useSelector(state => state.imagesReducer)


  const deleteUser = (user) => {
    dispatch(imageDelete(user))
  } 

  console.log(data)


  return (
    <div>
      {
        data?.map((eachItem) => (
          <div style={{display:"flex",alignItems:"center"}}>
            <h1 key={eachItem.id}>{eachItem.title}</h1>
            <Button onClick = {() => deleteUser(eachItem)}>Delete</Button>
          </div>
        ))
      }
    </div>
  )
}


import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import { userInfo,increaseValue, decreaseValue } from '../../Store/Actions'
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { Modal } from '../Modal';


export const Todo = () => {

  const [todo,setTodo] = useState('')
  const [showModal,setShowModal] = useState(false)

  const [currentUser,setCurrentUser] = useState('')

  const dispatch = useDispatch();

  const usersList = useSelector(state => state.todoManager.usersList)


  // console.log(usersList)

  const userinfo = {
    id : uuidv4(),
    todoName:todo
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      dispatch(userInfo(userinfo))
      setTodo("")
  }


  const countReducer = useSelector(state => state.counter)

  const {count} = countReducer

  const dispatchModal = (user) => {
    setCurrentUser(user)
    setShowModal(true)
  }
  
  // console.log(currentUser)


  // console.log(count)

  // const today = new Date()
  
  // console.log(today)

  return (
    <div style={{minHeight:"100vh",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
      <div>
        <Button variant="outlined" onClick={() => dispatch(increaseValue())}>Increment</Button>
        <Typography>{count}</Typography>
        <Button variant='outlined' onClick = {() => dispatch(decreaseValue())}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
      <div>
        <input name="name" type="name"      onChange={(e) => setTodo(e.target.value)} value={todo}/>
       </div>
       <div style={{textAlign:"right"}}>
          <Button variant='outlined' style={{marginTop:"1rem"}} type="submit">Add</Button>
       </div>

      </form>

      <div>
        {
          usersList?.map(eachItem => (
            <div style={{display:"flex",alignItems:"center",paddingLeft:"1rem"}} key={eachItem.id}>
                <Typography>{eachItem.todoName}</Typography>
                <Button onClick={() => dispatchModal(eachItem)}>Delete</Button>
            </div>

          ))
        }
      </div>
      {
        showModal && <Modal closeModal={setShowModal} userInfo = {currentUser}/> 
      }
    </div>
  )
}

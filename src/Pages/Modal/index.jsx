import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { userInfoDelete } from '../../Store/Actions' 

import "./index.css"

export const  Modal = ({userInfo ,closeModal}) => {

    const dispatch = useDispatch()

    // console.log(closeModal)

    const deleteUser = (user) => {
        closeModal(false)
        dispatch(userInfoDelete(user))
    }

  return (
    <div className="modalBackgroud">
        <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => closeModal(false)}>X</button>
            </div>
            <div className="title">
               <h1>Are You want to delete this user</h1>
            </div>
            <div className="body">
              <p>Move into the trash</p>
            </div>
            <div className="footer">
              <Button varinat="outlined" onClick={() =>  deleteUser(userInfo)}>Confirm</ Button>
              <Button varint="outlined" onClick={() => closeModal(false)}>Cancel</Button>
            </div>
        </div>
    </div>
  )
}


import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleModal } from '../../Store/Actions/InstagramApp'

import "./index.css"

export const  Modal = () => {

    const dispatch = useDispatch()

    const {currentPost} = useSelector(state => state.instagramReducer)

    console.log(currentPost);

    // console.log(closeModal)

    // const deleteUser = (user) => {
    //     closeModal(false)
    //     dispatch(userInfoDelete(user))
    // }


  return (
    <div className="modalBackgroud">
      <div className="titleCloseBtn" style={{margin:"2.5rem",color:"black"}}>
        <button onClick={() => dispatch(toggleModal(false))}>X</button>
      </div>
      <div style={{height:"100%"}} className=" margin-16 flex-row">
          <div className="modalContainer">
            
            <img src={currentPost.image} className="image" style={{height:"100%",width:"60%"}}/>
          </div>
      </div>
        {/* <div className="modalContainer">
            <div className="titleCloseBtn">
                <button onClick={() => dispatch(toggleModal(false))}>X</button>
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
        </div> */}
    </div>
  )
}



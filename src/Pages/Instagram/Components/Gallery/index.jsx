import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { instagramData } from '../../../../Store/Actions/InstagramApp';
import "./index.css"
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import { toggleModal,viewPostData } from '../../../../Store/Actions/InstagramApp';


export const Gallery = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(instagramData())
    },[dispatch])

    const {data} = useSelector((state) => state.imagesReducer)
    
    const {user} = data;

    const sendData = (post) => {
        dispatch(toggleModal(true))
        dispatch(viewPostData(post))
    }


  return (
    <div className="margin-16 padding-16 flex-row-center grid-layout">
        {
            user?.posts.map(eachItem => {
                return (
                    <>
                        <div className="gallery__container">
                        <img src={eachItem.image} className="image"/>
                        <div className="gallery__image flex-row-center" style={{height:"100%",width:"100%"}} onClick={() => sendData(eachItem)}>
                            <div className='flex-row-center'>
                            <FavoriteIcon/>
                            <span>{eachItem.likes}</span>
                            </div>
                            <div className='flex-row-center'>
                            <ChatBubbleIcon/>
                            <span>{eachItem.comments}</span>
                            </div>
                        </div>
                        </div>
                    </>        
                )
            })
        }
    </div>
  )
}

import React, { useState } from 'react'
import {Header} from "./Header";
import {Profile} from "./Profile";
import {Gallery} from "./Gallery"
import { Modal } from '../../Modal';
import { useSelector } from 'react-redux';
import { Divider } from '@mui/material';

export const Instagram = () => {

  const {boolean} = useSelector(state => state.instagramReducer)

  console.log(boolean)

  return (
    <div>
        <Header/>
        <Divider/>
        <Profile/>
        <Gallery/>
        
        {
          boolean && <Modal/>
        }

    </div>
  )
}

import React from 'react';
import "./index.css";
import { Avatar } from '@mui/material';
import {images} from "../../../../Constants" 

export const Header = () => {
  return (
    <div className="flex-row br-2 margin-16">
        <h1 className="title-m">Instagram</h1>
        <div>
            <Avatar src={images.photo1}/>
        </div>
    </div>
  )
}

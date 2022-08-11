
import React, { useEffect } from 'react'
import {useLocation,useNavigate} from 'react-router-dom'

export const Profile = ({toggle}) => {

 const navigate = useNavigate()

  useEffect(() => {
    if (!toggle){
      navigate('/',{replace:true})
    }
  })



  console.log(useLocation())


  return (
    <div>
        <h1>Profile</h1>
    </div>
  )
}


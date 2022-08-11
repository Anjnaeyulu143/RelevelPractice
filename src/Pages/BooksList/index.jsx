import { Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const BooksList = () => {
  return (
    <div>
      <Typography variant='subtitle1'>BooksList</Typography>
      <br/>
      <Link to="/books/1">book1</Link>
      <br/>
      <Link to="/books/2">book2</Link>
    </div>
  )
}

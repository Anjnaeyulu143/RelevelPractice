import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useDispatch } from 'react-redux'
import { aboutRoute } from '../../Store/Actions'
import "./index.css"

export const AboutUs = () => {

  const [pageCount,setPageCount] = useState(0);

  const {data,isLoading} = useQuery([],async() => {
      return await axios.get("https://jsonplaceholder.typicode.com/albums")
  })



  const dispatch = useDispatch();

  
  useEffect(() => {
      dispatch(aboutRoute(data?.data.slice(0,50)))
  },[dispatch,data?.data])


  const usersPerPage = 10;
  const pagesVisited = usersPerPage * pageCount;

  const displayUsers = data?.data.slice(0,50)


  const renderUsers = displayUsers?.slice(pagesVisited,pagesVisited+usersPerPage).map(eachItem => {
    return (
      <>
      <Typography variant="h6">{eachItem.id}</Typography>
      <Typography variant="subtitle1">{eachItem.title}</Typography>
    </>
    )
})


  const page = Math.ceil(displayUsers?.length/usersPerPage)


  const changePage = ({selected}) => {
    setPageCount(selected)
  }


  return (
    <div className="aboutUsContainer">
      <h1>About Us</h1>
      {
        isLoading && <h1>Loading...</h1>
      }
      {/* <div style={{display:"flex",justifyContent:"center",flexDirection:"column",minHeight:"100vh",alignItems:"center"}}>
          {renderUsers}
      </div> */}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount = {page}
        onPageChange = {changePage}
        containerClassName = {"paginationBttns"}
        previousLinkClassName = {"previousBttns"}
        activeLinkClassName = {"paginationActive"}
      />
    </div>
  )
}



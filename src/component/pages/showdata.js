import React from 'react'
import "./showdata.css"
import { useNavigate } from 'react-router-dom'

export const ShowData = () => {
  let navigate=useNavigate()
   let showdata = sessionStorage.getItem("videosData")
   function navigateHandler(){
       navigate("/")
   }
   
  return (
    <div className='container'>
    <div className="box">
    <div className="boxheader">Request Data (JSON)</div>
    <div className="jsondata">
    {showdata}
    </div>
    <button className="closebutton" onClick={navigateHandler}>Close</button>
   </div>
   </div>
  )
}

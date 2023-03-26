


import "./Home.css"
import React from 'react'
import Autoverifier from '../Autoverifier'
import Manualverifier from '../Manualverifier'
import { Video } from "../videos/video"


export const Home = () => {
 
  return (
    <div>
    <h2> WELCOME TO THE API CHECKER WORLD</h2>
    <div className="display">
    
    <Autoverifier/>
    <Manualverifier/>
    <Video/>
   </div></div>
  )
}

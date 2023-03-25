


import "./Home.css"
import React from 'react'
import Autoverifier from '../Autoverifier'
import Manualverifier from '../Manualverifier'
import { Video } from "../videos/video"


export const Home = () => {
  return (
    <div><div className="display">
    <Autoverifier/>
    <Manualverifier/>
    <Video/>
   </div></div>
  )
}

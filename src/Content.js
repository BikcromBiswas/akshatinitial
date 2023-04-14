import React from 'react'
import items from "./data";
const Content = (props) => {
  return (
    <div className="mcont">
      <div className="cont">
        <div className="img">
        <img src={props.image} alt="image" width="400px" height="350px" />
        </div>
        <div className="info">{props.title}</div>
        <button className="vote">Vote Now</button>
      </div>
    </div>
  )
}

export default Content
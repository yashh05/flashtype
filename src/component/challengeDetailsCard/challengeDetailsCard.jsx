import React from 'react'
import "./challengeDetailsCard.css";
const ChallengeDetailsCard=({type,detail})=>{
  return (
    <div className='detail-card'>
    <div className="card-name" style={{fontFamily:"Poppins",fontWeight:"bold",letterSpacing:"3px",fontSize:"25px"}}>{type}</div>
    <div className='detailnumber'>
    <h1>{detail}</h1>
    </div>
    </div>
  )
}

export default  ChallengeDetailsCard;
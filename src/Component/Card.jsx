import React from 'react'
import {useNavigate } from 'react-router-dom'

const Card = (props) => {
    const Navigate=useNavigate()
    const allProps=()=>{
        Navigate("/details",{state:{image:props.img,id:props.id,aired:props.aired,rating:props.rating,rank:props.rank, score:props.score, status:props.status, season:props.season ,title:props.title, story:props.story, trailer:props.trailer , year:props.year ,episode:props.episode}})
    }
  return (
    <div className=" ml-2  sm:ml-5  border border-gray-950   rounded-xl shadow-slate-500  shadow-md h-[100%] flex justify-center items-center">
        <img onClick={allProps} src={props.img} className='  h-full w-full object-cover rounded-md '></img>
       
    </div>
  )
}

export default Card

import { useLocation } from 'react-router-dom';
import Navbar from '../Component/Navbar';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import VideoCard from '../Component/VideoCard';
import CartIcon from '../Component/CartIcon';
import { Atom } from 'react-loading-indicators';

const Detail = () => {
   const [loading, setLoading]=useState(false)
      const[item,setitem]=useState([])
  
  const location =useLocation()
  const{image,episode,id,aired,rating,rank,score,status,season,title,story,trailer,year}=location.state
 

  const anime= async()=>{
    try{
     setLoading(true)
     const response = await axios.get(`https://api.jikan.moe/v4/anime/${id}/characters?limit=10`);
     console.log(response.data.data)
     setitem(response.data.data);
     
    }
    catch(e){
     console.log(e.message)
    }
    finally{
     setLoading(false)
    }
     
 }
 useEffect(()=>{
     anime()
 },[])


 if(loading){
     return(
         <>
         {/* <h1 className=' mt-12 flex place-self-center text-2xl  font-poppins font-bold'>Loading..........</h1> */}
         <div className=' mt-72 h-72 flex align-middle justify-center'>
         <Atom color="#a59c8d" size="large" text="" textColor="" />
         </div>
         
         </>
     )
 }
  return (
   <>
   <Navbar/>

  <div className=' z-40 flex align-middle justify-center mt-10'>
  {/* Card Container */}
  <div className="flex w-[80%] flex-col sm:flex-row   sm:w-full sm:max-w-screen-md bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition ">
    {/* Card Image */}
    <div className="w-full sm:w-1/3">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    {/* Card Content */}
    <div className="flex flex-col justify-between p-4 w-full sm:w-2/3">
      {/* Card Header */}
      <h2 className="text-2xl font-bold text-purple-400">
        {title}
      </h2>
      {/* Card Details */}
      <ul className="space-y-2 text-sm mt-4">
        <li><strong>Aired:</strong>{aired}</li>
        <li><strong>Rating:</strong> {rating}</li>
        <li><strong>Rank:</strong> {rank}</li>
        <li><strong>Score:</strong> {score}</li>
        <li><strong>Status:</strong> {status}</li>
        <li><strong>Season:</strong> {season}</li>
        <li><strong>Episode:</strong>{episode} </li>
      </ul>
      {/* Card Description */}
      <div className="mt-4">
        <details>
      <p className="text-gray-400 text-sm">
             {story}
              
            </p>
          
            </details>
      </div>
    </div>
  </div>
  </div>
  <div className='  mt-5   w-full sm:h-[60%]   h-48 flex justify-center '>
  <VideoCard trailer={trailer}/>
  </div>
  {/* <div className=" h-40  min-h-96 mt-36 mb-5 flex justify-center items-center"> */}
   
<CartIcon images={item} />
{/* </div> */}


 
 

   </>
  )
}

export default Detail
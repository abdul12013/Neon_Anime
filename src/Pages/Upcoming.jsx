import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import Card from '../Component/Card';
import { Atom } from 'react-loading-indicators';


const Upcoming = () => {

    const [loading, setLoading]=useState(false)
    const[item,setitem]=useState([])
    const anime= async()=>{
        try{
         setLoading(true)
         const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=upcoming');
         console.log(response.data.data[0])
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
              <Navbar/>
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
 
    
 
     <section className="mt-5 mb-11 h-full grid grid-cols-2 gap-1  gap-y-5 sm:grid-cols-5   overflow-hidden">
         {
            
                  item.map((e, ids) => (
                    
                     <Card key={ids} img={e.images.webp.image_url} id={e.mal_id} aired={e.aired.string} rating={e.rating} rank={e.rank} score={e.score} status={e.status} season={e.season} title={e.title_english} story={e.synopsis} trailer={e.trailer.embed_url} year={e.year} episode={e.episodes} />
                   ))
         }
   
   
   
 </section>
 
   
 
     
     </>
  )
}

export default Upcoming
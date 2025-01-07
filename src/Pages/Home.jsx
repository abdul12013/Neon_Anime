
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from '../Component/Navbar';
import Card from '../Component/Card';
import { Atom } from 'react-loading-indicators';

const Home = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setquery]=useState('')
    const [isSearch, setIssearch]=useState(false)
    const [searchResult, setSearchResult]=useState([])
    const [loading, setLoading]=useState(false)
    const[item,setitem]=useState([])

    const searchHandle= async()=>{
        setIssearch(true)
        console.log(query)
        if(query===''){
            alert("please enter the name of the anime ")
        }
        else{
            try{
                setLoading(true)
                const response1=await axios.get(`https://api.jikan.moe/v4/anime?q=${query}`)
                console.log(response1.data)
                setSearchResult(response1.data.data)
            }
            catch(e){
                console.log(error.message)
            }
            finally{
                setLoading(false)
            }
           
        }

    }

    const anime= async()=>{
       try{
        setLoading(true)
        const response = await axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity');
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

   {/* {search bar} */}
    <div className="mt-10 flex justify-center items-center ">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e)=>{setquery(e.target.value)}}
          className={`bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none transition-all duration-300 ease-in-out ${
            isFocused ? "w-72 sm:w-96" : " w-12"
          }`}
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
          <svg
            className="h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            onClick={searchHandle}
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
          </svg>
        </button>
      </div>
    </div>

    <section className="mt-5 h-full mb-11 grid grid-cols-2 gap-1  gap-y-5 sm:grid-cols-5   overflow-hidden">
        {
            isSearch
                ?searchResult.map((e, ids) => (
                    <Card key={ids} img={e.images.webp.image_url} id={e.mal_id} />
                  ))
                : item.map((e, ids) => (
                   
                    <Card key={ids} img={e.images.webp.image_url} id={e.mal_id} aired={e.aired.string} rating={e.rating} rank={e.rank} score={e.score} status={e.status} season={e.season} title={e.title_english} story={e.synopsis} trailer={e.trailer.embed_url} year={e.year} episode={e.episodes} />
                  ))
        }
  
  
  
</section>

  

    
    </>
  )
}

export default Home
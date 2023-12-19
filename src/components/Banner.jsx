import React, { useEffect, useState } from 'react'
import instance from './instance';
import './Banner.css'


const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({fetchUrl}) {
    const[Movie , setMovie] = useState()
/*     console.log(fetchUrl);
 */
    const fetchData = async()=>{
        const {data} = await instance.get(fetchUrl)
        setMovie(data.results[Math.floor(Math.random()*data.results.length)]);
    }
    useEffect(()=>{
        fetchData()
    },[])
    
  return (
    <div style={{height:'600px', backgroundImage:`url(${base_url}${Movie?.backdrop_path})`, backgroundPosition:'center',backgroundSize:'cover',backgroundAttachment:'fixed'}} className='banner'>
        <div className='banner-content'>
            <h1>{Movie?.name}</h1>
            <button className='btn btn-danger'>play <i class="fa-solid fa-play"></i></button>
            <button className='btn btn-outline-light ms-3'>more info <i class="fa-solid fa-caret-down"></i></button>
            <h2>{Movie?.overview?.slice(0,200)}...</h2>
        </div>
    </div>
    
  )
}

export default Banner
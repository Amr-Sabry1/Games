import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/loading'
import { useParams } from 'react-router-dom'
export default function All() {
let [games ,setGames] =useState([])
let[isLoading,setisLoading]=useState(true)

let {id} =useParams()

useEffect(()=>{
const options = {
  method: 'GET',
  url: 'https://free-to-play-games-database.p.rapidapi.com/api/game',
  params: {id: `${id}`},
  headers: {
    'X-RapidAPI-Key': 'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
setGames(response.data)
setisLoading(false)
}).catch(function (error) {
	console.error(error);
});
},[])



  return (
    <>
     {isLoading && <Loading />}
         {!isLoading && <>
    <div className="container mt-4 py-5 ">
  <div className="row pt-4 gy-4">
<div className="col-md-4 desc mt-md-5 pt-md-3">
  <img src={games.thumbnail} alt="" className='w-100 rounded-3'/>
  <p className='p-1'>{games.short_description}</p>
<div className="row my-3">
     
<div className="col-3"><p className='bg-danger bg-opacity-50 py-1 text-center rounded-2'>Free</p></div> 
<div className="col-9">
    <button className='btn border border-1 border-info rounded-2 w-100 py-1 genre'><a href={games.game_url} target='_blank' className='text-white text-decoration-none'>Play Now</a> <i className=' fa fa-sign-in'></i> </button>
</div>
</div>
</div>
<div className="col-md-5 none">
</div>
<div className="col-md-7">
<div className="text-Details">
<h1>{games.title}</h1>
<p className='text-white-50 ms-3'>{games.description}</p>


{games.platform==="Web Browser"?'':<><h3 className='my-4 fs-4'>Minimum System Requirements :-</h3><div className="ms-3 text-white-50">
   <p><b className='text-white'>Graphics :  </b>{games.minimum_system_requirements.graphics}</p>
 <p><b className='text-white'>Memory :  </b>{games.minimum_system_requirements.memory}</p>
 <p><b className='text-white'>OS  :  </b>{games.minimum_system_requirements.os}</p>
 <p><b className='text-white'>Processor :  </b>{games.minimum_system_requirements.processor}</p>
 <p><b className='text-white'>Storage :  </b>{games.minimum_system_requirements.storage}</p>
</div></>}



<h3 className='my-4 fs-4'>Diablo Immortal Screenshots :-</h3>
   <div className="row g-2">
    <div className="col-md-4">
      <img src={games.screenshots[0].image} alt="" className='w-100 screen'/>
    </div>
     <div className="col-md-4">
      <img src={games.screenshots[1].image} className='w-100 screen' alt="Los Angeles"/>
    </div>
     <div className="col-md-4">
      <img src={games.screenshots[2].image} className='w-100 screen' alt="Los Angeles"/>
    </div>
  </div>



<h3 className='my-4 fs-4'>Additional Information :-</h3>
<div className="row g-4 ms-2">
  <div className="col-md-4 text-white-50">
    <p className='m-0'>Title :</p>
    <h6 className='text-white m-0'>{games.title}</h6>
  </div>   <div className="col-md-4 text-white-50">
    <p className='m-0'>Developer :</p>
    <h6 className='text-white m-0'>{games.developer}</h6>
  </div>   <div className="col-md-4 text-white-50">
    <p className='m-0'>Publisher :</p>
    <h6 className='text-white m-0'>{games.publisher}</h6>
  </div>   <div className="col-md-4 text-white-50">
    <p className='m-0'>Release Date :</p>
    <h6 className='text-white m-0'>{games.release_date}</h6>
  </div>   <div className="col-md-4 text-white-50">
    <p className='m-0'>Genre :</p>
    <h6 className='text-white m-0'>{games.genre}</h6>
  </div>   <div className="col-md-4 text-white-50">
    <p className='m-0'>Platform :</p>
    <h6 className='text-white m-0'>{games.platform==="Web Browser"?<i className="fs-5 fa-regular me-2 fa-window-maximize"></i>:<i className="fs-5 fa-brands me-2 fa-windows"></i>}{games.platform}</h6>
  </div>  
</div>
</div>
</div>
</div>
    </div>
    </>}
    </>
  )
}

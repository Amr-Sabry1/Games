import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/loading'
import ItemAll from '../ItemAll/ItemAll'

export default function PlatForms() {
 
let [games ,setGames] =useState([])
let[isLoading,setisLoading]=useState(true)
let [x ,setx] =useState(12)

async function getgames(type){

let res=await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
     params: { platform: 'browser','sort-by':`${type}`},
  headers:{'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
})

setGames(res.data)
setisLoading(false)

}
function getgame(ff){
getgames(ff)
}
useEffect(()=>{
  getgames()
},[])

function more(){
setx(x+12)
}

  return (
    <>
     {isLoading && <Loading />}
         {!isLoading && <>
    <div className="container py-3">
      
  <div className="row g-4 mt-5">
    <div className="d-flex align-items-center pointer">
  <h4 className='me-2'>Sort By : </h4>
  <p className='m-0 me-1 border-info genre' onClick={()=>getgame("release-date")}>Release Date</p>
  <p className='m-0 me-1 border-info genre' onClick={()=>getgame("popularity")}>Popularity</p>
  <p className='m-0 me-1 genre border-info' onClick={()=>getgame("alphabetical")}>Alphabetical</p>
  <p className='m-0 me-1 genre border-info' onClick={()=>getgame("relevance")}>Relevance</p>
</div>

      {games?.slice(0,x).map(game=> <ItemAll key={game.id} data={game} />)}
    </div>
    <div className="py-5 d-flex justify-content-center">
    {games.length>x && <><button className='m-auto py-0 btn btn-outline-info' onClick={()=>more()}>See More</button>
        </>}
         {games.length<=x && <></>} 
  </div> 
    </div>
    </>}
    </>
  )
}

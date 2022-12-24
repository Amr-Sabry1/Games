import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/loading'
import ItemAll from '../ItemAll/ItemAll'

export default function All() {
 
let [games ,setGames] =useState([])
let[isLoading,setisLoading]=useState(true)

let [x ,setx] =useState(12)


async function getgames(){

let res=await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", { 
headers:{'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
})

setGames(res.data)
setisLoading(false)

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
    <div className="container py-5 pb-2">
  <div className="row g-4 pt-5">
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

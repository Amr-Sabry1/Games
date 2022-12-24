import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from'../Item/Item'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/loading'


export default function Home() {
let[isLoading,setisLoading]=useState(true)
 
let [games ,setGames] =useState([])
let navigate =useNavigate()
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

function goAll(){
  navigate("/all")
}

  return (
    <>
    <div className='vh-100'>
         {isLoading && <Loading />}
         {!isLoading && <>
      <div className="text-contain pt-5">

          <div className="text py-2 pt-5 d-flex justify-content-center flex-column align-items-center">
        <h1 className='pt-5'>Find & Track The Best <span className='text-danger'>Free-To-Play </span>Games!</h1>
        <p className='my-1 mb-3'> Track what you've played and search for what to play next! Plus get free premium loot!</p>
      <button onClick={()=>goAll()} className='btn btn-outline-dark mb-5 text-muted'>Browse Games</button>
      </div>
    </div>
    <div className="container py-4">
     <h4 className='my-4 w-100'><span><i className='fas fa-robot mr-2'></i></span> Personalized Recommendations</h4>
    <div className="row g-4">
      {games?.slice(0,4).map(game=> <Item key={game.id} data={game} />)}
    </div>
    </div>
       </>}
     </div>
    </>
  )
}

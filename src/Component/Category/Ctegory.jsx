import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Loading from '../Loading/loading'
import ItemCat from '../../ItemCategory/ItemCat'

export default function PlatForms() {


let [fantasy ,setfantasy] =useState([])
let [shooter ,setshooter] =useState([])
let [racing ,setracing] =useState([])
let [social ,setsocial] =useState([])
let [open ,setopen] =useState([])
let [zombie ,setzombie] =useState([])
let [action ,setaction] =useState([])
let [flight ,setflight] =useState([])
let [battle ,setbattle] =useState([])
let [x ,setx] =useState(12)
let[isLoading,setisLoading]=useState(true)

async function getgames(x,dest){

let res=await axios.get("https://free-to-play-games-database.p.rapidapi.com/api/games", {
     params: { category:`${x}`},
     
  headers:{'X-RapidAPI-Key':'b52128808dmsh5826403ec30ac21p1b9548jsnfca5769e0b68',
  'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'},
platform :"browser"
})

dest(res.data)
setisLoading(false)
console.log();
}

function more(){
setx(x+6)
}

useEffect(()=>{
  getgames("shooter",setshooter)
  getgames("fantasy",setfantasy)
  getgames("racing",setracing)
  getgames("social",setsocial)
  getgames("open-world",setopen)
  getgames("zombie",setzombie)
  getgames("action",setaction)
  getgames("flight",setflight)
  getgames("battle-royale",setbattle)
},[])

  return (
    <>
     {isLoading && <Loading />}
         {!isLoading && <>
    <div className="container py-5">


 
     <div className="row g-3 catItem">
          <h1>Shooter</h1>
      {shooter?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {shooter.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {shooter.length<=x && <></>}
      </div>
     </div>
 





 
 
     <div className="row g-3 catItem">
      <h1>Fantasy</h1>
      {fantasy?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
      <div className="d-flex">
        {fantasy.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {fantasy.length<=x && <></>}</div>
    </div>
    


     <div className="row g-3 catItem">
      <h1>Racing</h1>
      {racing?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
    <div className="d-flex">
       {racing.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {racing.length<=x && <></>} </div>
    </div>
 

    
     <div className="row g-3 catItem">
      <h1>Social</h1>
      {social?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {social.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {social.length<=x && <></>} </div>
    </div>

    
     <div className="row g-3 catItem">
      <h1>Open World</h1>
      {open?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {open.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {open.length<=x && <></>} </div>
    </div>
    

    
     <div className="row g-3 catItem">
      <h1>Zombie</h1>
      {zombie?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {zombie.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {zombie.length<=x && <></>}</div>
    </div>


    
     <div className="row g-3 catItem">
      <h1>Action</h1>
      {action?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {action.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {action.length<=x && <></>} </div>
    </div>


    
     <div className="row g-3 catItem">
      <h1>Flight</h1>
      {flight?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {flight.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {flight.length<=x && <></>}</div>
    </div>
 

    
     <div className="row g-3 catItem">
      <h1>Battle Royale</h1>
      {battle?.slice(0,x).map(game=> <ItemCat key={game.id} data={game} />)}
       <div className="d-flex">
        {battle.length>x && <><button className='m-auto py-0 btn btn-outline-danger' onClick={()=>more()}>See More</button>
        </>}
         {battle.length<=x && <></>} </div>
    </div>


</div> 
    </>}
    </>
  )
}

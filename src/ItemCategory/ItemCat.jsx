import React from 'react'
import { Link } from 'react-router-dom'
export default function ItemCat({data}) {
  return (
   <div className="col-md-2 col-6">  <Link to={"/details/"+data.id} className="text-white text-decoration-none">

        <div className="item text-center bg-info bg-opacity-25">
                <img src={data.thumbnail} className='w-100' alt="" />
                <div className="py-1">
                        <h6>{data.title.slice(0,13)}</h6>
                  </div>
        </div></Link>
        </div>
  

  

)
}

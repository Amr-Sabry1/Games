import React from 'react'
import { Link } from 'react-router-dom'
export default function Item({data}) {
  return (
 <div className="col-md-3">
  <Link to={"/details/"+data.id} className="text-white text-decoration-none">
  
        <div className="item">
                <img src={data.thumbnail} className='w-100' alt="" />
                <div className="item-text px-2 py-3 d-flex justify-content-between align-items-center">
                        <h4>{data.title.slice(0,13)}</h4>
                        <p className='ms-auto genre fs-6 rounded-1 m-0 '>Free</p>
                </div>
        </div></Link>
        </div>

)
}

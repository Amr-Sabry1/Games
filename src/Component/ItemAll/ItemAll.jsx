import React from 'react'
import { Link } from 'react-router-dom'
export default function ItemAll({data}) {
  return (


   <div className="col-md-3">
      <Link to={"/details/"+data.id} className="text-white text-decoration-none">
        <div className="item">
                <img src={data.thumbnail} className='w-100' alt="" />
                <div className="item-text px-2 py-3">
                 <div className="d-flex d-flex">
                        <h4>{data.title.slice(0,13)}</h4>
                        <p className='ms-auto genre fs-6 rounded-1 '>Free</p>
                  </div>
                  <p>{data.short_description.slice(0,25)+'..'}</p>
               


   <div className="d-flex justify-content-between align-items-center">
                    <i className="fas fs-5 fa-plus-square"></i>
                    <div className='d-flex justify-content-between align-items-center'>
                    <p className='m-0 genre me-2'>{data.genre}</p>
{data.platform==="Web Browser"?<i className="fs-5 fa-regular fa-window-maximize"></i>:<i className="fs-5 fa-brands fa-windows"></i>}
                    </div>
     </div>

                </div>

        </div>
      </Link>
        </div>

)
}

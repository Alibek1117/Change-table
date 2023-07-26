import React from 'react'
import { Link } from 'react-router-dom'

const Right3 = () => {
  return (
    <div className=" flex-col justify-center ml-[150px]">
      <h1 className="text-2xl font-[600]">Are you happy now?</h1>
      <div className="btnss mt-16">
        <Link to="/2" className="text-2xl font-[400] bg-gray-300 p-4  mb-4 rounded ">
          No, go back
        </Link>
        <Link to ="/4" className="text-2xl font-[400] bg-gray-300 p-4  mb-4 rounded ml-3">
          Yes, go ahead
        </Link>
      </div>
    </div>
  )
}

export default Right3
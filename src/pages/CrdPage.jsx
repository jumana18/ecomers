import React from 'react'
import { Link } from "react-router-dom";


const CrdPage = () => {
  return (
  
<>  
      <div className="max-w-6xl mx-auto px-1 py-6 mt-14">
        <div className="mb-12 md:mb-16">
          <p className="text-gray-500">
            <Link to="/" className="hover:text-black transition">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-black font-medium">Card</span>
          </p>
        </div>
     </div>



    </>
   
  )
}

export default CrdPage
import React from "react"
import Image from "next/image"
const Participant = () => {
    return(
        <div className='h-15 w-15 p-2'>
        <button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
        
        <Image 
        className="h-10 w-10 rounded-full object-cover" 
        src="/images/person1.png" 
        height={40}
        width={40}
        alt=""/>
        </button>
    </div>
    )
}

export default Participant
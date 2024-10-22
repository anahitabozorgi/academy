
import React from 'react';
import Image from 'next/image';

type Props = {
    text1: String,
    text2: String,
    image_name: String
}

const Facilities = ({text1, text2, image_name}:Props) => {
    return(

        <div className='flex gap-x-5'>
            <div className='flex justify-center items-center'>
            <p className='text-tertiary text-3xl font-semibold max-xl:text-2xl max-lg:text-xl' dir='rtl'>{text1}<br />
            {text2}</p>
            </div>
            
            <div className='rounded-full w-28 h-28 max-xl:w-20 max-lg:w-16 max-lg:h-16 max-xl:h-20 bg-[#B9F6CA33] flex items-center justify-center'>
            <Image
            className='w-16 max-xl:w-12 max-lg:w-10'
            src={`/icons/${image_name}`}   alt='logo'   width={500}
            height={750} unoptimized quality={100}/>
            </div>
        </div>

    )

}

export default Facilities
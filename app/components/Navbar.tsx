
import React from 'react';
import Image from 'next/image';
import NavbarList from './NavbarList';

type Props = {
  name: String
}
const Navbar = () => {
  return (

    <div className="flex text-lg xl:gap-x-14 px-[3vw] lg:px-[10vw] py-9 max-xl:justify-between max-lg:text-xs max-md:gap-x-3">
      <div className='flex gap-x-6 max-xs:gap-x-3'>
      <button>
      <div className="relative lg:h-7 lg:w-7 max-xs:w-[15px] max-xs:[15px]">
            <Image
              className="lg:h-7 lg:w-6"
              priority
              src="/icons/search.svg"
              height={20}
              width={20}
              alt="search icon"
            />
            </div>
          </button>


          <button>
            <div className="relative lg:h-7 lg:w-7 max-xs:w-[15px] max-xs:[15px]">
            <Image
              className="lg:h-7 lg:w-6 max-xs:w-4 max-xs:h-4"
              priority
              src="/icons/shopping-cart.svg"
              height={20}
              width={20}
              alt="cart icon"
            />
            <div className="flex items-center justify-center absolute top-0 right-0">
            <div className="w-[10px] h-[10px] bg-[#1A3254] rounded-full flex items-center justify-center max-lg:w-[7px] max-lg:h-[7px] max-xs:w-[6px] max-xs:h-[6px]">
              <p className="pb-1 text-white text-[11px] max-lg:text-[8px]">۰</p>
            </div>
            </div>
            </div>
          </button>
      </div>

          <div className='xl:basis-2/12'>

          </div>


          <div className='basis-8/12 flex items-center' dir="rtl">

          {/* mobile device */}

          <button className='md:hidden'>
            <div className='w-4 h-[2px] bg-primary'></div>
            <div className='w-4 h-[2px] bg-primary my-1'></div>
            <div className='w-4 h-[2px] bg-primary'></div>
          </button>

            <ul className='max-md:hidden'>
                <NavbarList name={'دوره ها'}/>
                <NavbarList name={'دانش آموختگان'}/>
                <NavbarList name={'سازمان ها'}/>

                <NavbarList name={'بلاگ'}/>

                <NavbarList name={'گزارش ها'}/>
         
            </ul>
          </div>

            <Image className=' max-lg:w-[60px] max-lg:h-[27px] max-md:h-[24px]'
            src='/images/logo2.png'   alt='logo'   width={100}
      height={80} unoptimized quality={100}/>

            
    </div>



  );
};

export default Navbar;

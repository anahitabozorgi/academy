
import React from 'react';
import Image from 'next/image';
import Participant from './Participant';
import Facilities from './Facilities';
const Hero = () => {
    return(
        <>
        <div className=" flex w-full bg-[#B9F6CA40] relative">
            

            <div className='xl:py-40 xl:px-40'>
            <div className="w-[500px] h-[500px] rounded-full border border-primary relative flex items-center justify-center max-md:hidden max-lg:w-[350px] max-lg:h-[350px]">
                <div className="w-[455px] h-[455px] rounded-full bg-secondary opacity-50 max-lg:w-[320px] max-lg:h-[320px]">
                </div>
            </div>
            </div>

            <div className='absolute w-96 h-28 bg-white left-80 z-10 top-28 rounded-xl max-xl:hidden' dir='rtl'>
                <p>تعداد شرکت کننده های دوره</p>
                <div className='flex'>
                    <div className='flex'>
                        <Participant/>
                        <Participant/>
                        <Participant/>
                        <Participant/>
                        <Participant/>
                        <div className='w-15 h-15 p-2'>
                        <div className=' w-10 h-10 bg-secondary rounded-full text-primary grid place-items-center font-semibold text-lg'>+</div>
                        </div>
                        <p className=' font-semibold text-[#1A325480]'>۲۰۰ + شرکت کننده</p>          
                        
                    </div>
                </div>
            </div>

            <div className='absolute xl:top-32 xl:bottom-auto  max-xl:w-[555px] max-xl:h-[600px] max-lg:w-[390px] max-md:hidden
            '>
            <Image
            className='max-md:hidden '
            src='/images/hero-bg.png'   alt='logo'   width={767}
            height={750} unoptimized quality={100}/>
            </div>


            {/* right section */}
            <div className="md:w-[50%] right-0 pr-60 max-xl:py-10 py-40 max-2xl:pr-24 max-md:p-5 max-md:bg-[#B9F6CA40] max-md:w-full max-md:flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center max-lg:pr-10" dir="rtl">
                <h1 className="text-primary font-semibold text-6xl leading-[5.5rem] pb-14 max-2xl:text-5xl max-md:text-3xl max-2xl:leading-[4.5rem] max-md:leading-[3rem] max-xl:text-4xl max-xl:leading-[3rem] max-lg:pb-7 max-lg:text-3xl">
                مدرسه مدیریت محصول  دیجیتال فرانت اند آکادمی
                </h1>
                <p className="text-3xl text-primary leading-[2.7rem] opacity-75 max-2xl:text-2xl max-2xl:leading-[2rem] max-md:text-lg max-xl:text-xl max-lg:text-lg">
                ما بهت آموزش می‌دهیم محصولاتی خلق کنی که مشتری دوست داشته باشد
                </p>

                <div className='flex max-xl:gap-x-5 gap-x-10 pt-16 max-lg:pt-8 text-xl font-semibold'>
                    <button className=' py-7 px-11 border border-primary bg-primary text-white rounded-xl max-2xl:px-9 max-2xl:py-5 max-md:px-4 max-md:py-4 max-md:text-base max-xl:px-4 max-xl:py-4 max-xl:text-base max-lg:p-2'>مشاهده دوره ها</button>
                    <button className=' py-7 px-11 border-2 border-primary text-primary rounded-xl max-2xl:px-9 max-2xl:py-5 max-md:px-4 max-md:py-4 max-md:text-base max-xl:px-4 max-xl:py-4 max-xl:text-base max-lg:px-3 max-lg:py-4'>اطلاعات بیشتر</button>
                </div>
            </div>

        </div>

        <div className='flex bg-primary w-full justify-between items-center py-11 px-24 max-lg:px-12 max-md:px-2 flex-wrap'>
            <Facilities text1={"دریافت"} text2={"مدرک بین المللی"} image_name={"Layer_1.svg"}/>
            <Facilities text1={"زیرنظر"} text2={" اساتید برتر"} image_name={"Layer2.svg"}/>
            <Facilities text1={"به روزترین"} text2={"دوره آموزشی"} image_name={"Layer3.svg"}/>
        </div>

        </>
        
    )
}

export default Hero
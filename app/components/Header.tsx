import React from "react";
import Image from "next/image";
const Header = () => {
  return (
    <div className="flex bg-primary text-white justify-between text-[11px] font-medium lg:px-[10vw] lg:text-lg items-center" >

      <div className="flex gap-x-[2vw] items-center">
        <button className="flex font-semibold items-center p-2 lg:py-5 lg:px-4 bg-[#A9D0D5] text-primary">

            <Image
            className="hidden lg:block lg:w-4"
            priority
            src="/icons/arrow.svg"
            height={10}
            width={12}
            alt="arrow icon"
            />
            <p className="lg:ml-[10px]">نمایش دوره‌ ها</p>
        </button>

        <a href="">ورود / ثبت نام</a>
      </div>
      
      <div className="flex gap-x-[2vw]">

        <div className=" flex gap-x-1">
        <Image
              className="lg:w-5 max-xs:w-2"
              priority
              src="/icons/phone-call.svg"
              height={15}
              width={15}
              alt="phone icon"
            />
            <p>۰۹۱۲ ۳۴۵ ۶۷ ۸۹</p>
        </div>
        <div className=" flex gap-x-1" >
        <Image
              className="lg:w-5 max-xs:w-2"
              priority
              src="/icons/email-b.svg"
              height={12}
              width={16}
              alt="phone icon"
            />
        <p><span className="max-xs:hidden">Email:</span> pjsofts@gmail.com
        </p>
        </div>
      </div>
    </div>

);
};

export default Header;



















    // <div className="bg-primary text-white lg:text-lg lg:px-[120px] flex gap-x-1 items-center text-[11px] font-medium ">
    //   {/* left Section */}
      
    //     <div className="lg:mx-5">
    //     {/* courses */}
    //       <button className="font-semibold flex items-center bg-[#A9D0D5] p-2 lg:py-5 lg:px-4 text-[#1A3254]">
    //         {/* <svg
    //           className="hidden lg:block"
    //           width="12"
    //           height="10"
    //           viewBox="0 0 12 10"
    //           fill="none"
    //           xmlns="http://www.w3.org/2000/svg"
    //         >
    //           <path
    //             d="M11.1429 4.17033H2.57143L5.39143 1.42669C5.47177 1.34916 5.53553 1.25693 5.57905 1.15531C5.62257 1.05368 5.64497 0.944684 5.64497 0.834595C5.64497 0.724506 5.62257 0.615506 5.57905 0.513883C5.53553 0.412261 5.47177 0.320027 5.39143 0.242502C5.23083 0.0871807 5.01359 0 4.78714 0C4.5607 0 4.34345 0.0871807 4.18286 0.242502L0.505714 3.82842C0.183782 4.13977 0.00191382 4.56263 0 5.00427C0.00417136 5.443 0.185867 5.86247 0.505714 6.17177L4.18286 9.75769C4.26278 9.8349 4.35754 9.89603 4.46175 9.93761C4.56595 9.97918 4.67755 10.0004 4.79017 10C4.9028 9.99961 5.01424 9.97764 5.11814 9.93535C5.22204 9.89306 5.31636 9.83127 5.39571 9.75352C5.47507 9.67577 5.53791 9.58356 5.58064 9.48218C5.62337 9.3808 5.64516 9.27222 5.64476 9.16265C5.64436 9.05307 5.62179 8.94465 5.57832 8.84356C5.53485 8.74248 5.47135 8.65071 5.39143 8.5735L2.57143 5.8382H11.1429C11.3702 5.8382 11.5882 5.75034 11.7489 5.59395C11.9097 5.43755 12 5.22544 12 5.00427C12 4.78309 11.9097 4.57098 11.7489 4.41459C11.5882 4.25819 11.3702 4.17033 11.1429 4.17033Z"
    //             fill="#1A3254"
    //           />
    //         </svg> */}

    //         <Image
    //           className="hidden lg:block lg:w-4"
    //           priority
    //           src="/icons/arrow.svg"
    //           height={10}
    //           width={12}
    //           alt="arrow icon"
    //         />
    //         <p className="lg:ml-[10px]">نمایش دوره‌ ها</p>
    //       </button>
    //     </div>

    //     {/* login & signup */}
    //     <div className="cursor-pointer mx-1">
    //       <a>ورود / ثبت‌ نام</a>
    //     </div>

    //     <div className="hidden lg:block flex-1">
    //     </div>      

    //   {/* right Section - contact Info */}
      
    //     <div className="flex mx-1 lg:mx-5">
    //       {/* <svg
    //         width="15"
    //         height="15"
    //         viewBox="0 0 15 15"
    //         fill="none"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <g clip-path="url(#clip0_11_4)">
    //           <path
    //             d="M14.375 6.87488C14.2092 6.87488 14.0503 6.80903 13.9331 6.69182C13.8158 6.57461 13.75 6.41564 13.75 6.24988C13.7487 4.9242 13.2215 3.6532 12.2841 2.71581C11.3467 1.77841 10.0757 1.2512 8.75 1.24988C8.58424 1.24988 8.42527 1.18403 8.30806 1.06682C8.19085 0.949611 8.125 0.790639 8.125 0.624879C8.125 0.459119 8.19085 0.300148 8.30806 0.182937C8.42527 0.0657271 8.58424 -0.000120912 8.75 -0.000120912C10.407 0.00169884 11.9957 0.660764 13.1674 1.83247C14.3391 3.00418 14.9982 4.59283 15 6.24988C15 6.41564 14.9342 6.57461 14.8169 6.69182C14.6997 6.80903 14.5408 6.87488 14.375 6.87488ZM12.5 6.24988C12.5 5.25532 12.1049 4.30149 11.4017 3.59823C10.6984 2.89497 9.74456 2.49988 8.75 2.49988C8.58424 2.49988 8.42527 2.56573 8.30806 2.68294C8.19085 2.80015 8.125 2.95912 8.125 3.12488C8.125 3.29064 8.19085 3.44961 8.30806 3.56682C8.42527 3.68403 8.58424 3.74988 8.75 3.74988C9.41304 3.74988 10.0489 4.01327 10.5178 4.48211C10.9866 4.95095 11.25 5.58684 11.25 6.24988C11.25 6.41564 11.3158 6.57461 11.4331 6.69182C11.5503 6.80903 11.7092 6.87488 11.875 6.87488C12.0408 6.87488 12.1997 6.80903 12.3169 6.69182C12.4342 6.57461 12.5 6.41564 12.5 6.24988ZM13.8644 13.8524L14.4331 13.1968C14.7951 12.8336 14.9984 12.3417 14.9984 11.8289C14.9984 11.3162 14.7951 10.8243 14.4331 10.4611C14.4138 10.4418 12.91 9.28488 12.91 9.28488C12.5491 8.94134 12.0697 8.75004 11.5714 8.75074C11.0732 8.75144 10.5943 8.94408 10.2344 9.28863L9.04313 10.2924C8.07074 9.88994 7.18743 9.29937 6.44393 8.55458C5.70043 7.80979 5.11139 6.92546 4.71063 5.95238L5.71063 4.76488C6.05545 4.40499 6.24831 3.92605 6.24913 3.42763C6.24994 2.92921 6.05865 2.44965 5.715 2.08863C5.715 2.08863 4.55688 0.586754 4.5375 0.567379C4.18091 0.208472 3.69743 0.00426785 3.19152 -0.00111167C2.68561 -0.00649119 2.1979 0.187386 1.83375 0.538629L1.115 1.16363C-3.13125 6.08988 6.0125 15.163 11.1013 14.9999C11.6151 15.0029 12.1244 14.9029 12.5989 14.7058C13.0735 14.5087 13.5038 14.2185 13.8644 13.8524Z"
    //             fill="#A9D0D5"
    //           />
    //         </g>
    //         <defs>
    //           <clipPath id="clip0_11_4">
    //             <rect width="15" height="15" fill="white" />
    //           </clipPath>
    //         </defs>
    //       </svg> */}

          // <Image
          //     priority
          //     src="/icons/phone-call.svg"
          //     height={15}
          //     width={15}
          //     alt="phone icon"
          //   />

    //       <p className="ml-[5px]">۰۹۱۲ ۳۴۵ ۶۷ ۸۹</p>
    //     </div>
    //     <div className="flex items-center mx-1">
    //       <div className="relative">
    //       <Image
    //           priority
    //           src="/icons/email-t.svg"
    //           height={9}
    //           width={16}
    //           alt="phone icon"
    //         />

            // <Image
            //   priority
            //   src="/icons/email-b.svg"
            //   height={12}
            //   width={16}
            //   alt="phone icon"
            // />
    //       </div>
    //       <p className="ml-[5px]"><span className="hidden lg:inline-block">Email: </span> pjsofts@gmail.com</p>
    //     </div>
      
    // </div>


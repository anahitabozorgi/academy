import React from 'react';
import Image from 'next/image';

type Props = {
    name: String
}
const NavbarList = ({name}: Props) => {
    return(
      <li className="inline-block px-3 cursor-pointer">
        <a className="flex items-center">
        <p>{name}</p>

        <div className=" pt-[2px] mr-[6px]">
          <Image
            priority
            src="/icons/arrow-down.svg"
            height={8}
            width={10}
            alt="phone icon"
          />
          </div>
        </a>
        </li>
    )
}
export default NavbarList
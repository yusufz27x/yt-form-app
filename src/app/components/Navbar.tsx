import React from "react";
import YazilimLogo from "../../assets/circle.png";
import Image from "next/image"

const Nav = () => {
  return (
    <div className='absolute flex top-0 w-full px-5 bg-gray-900 justify-center'>
      <div className='container flex items-center justify-center text-xs md:text-sm text-[#f0d1b8] mt-2 mb-2 text-center'>
        <Image className='w-12 mr-2' src={YazilimLogo} alt="iyte" />
        İYTE Yazılım Topluluğu
      </div>
    </div>
  );
  
};
export default Nav;


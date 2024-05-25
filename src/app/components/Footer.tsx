import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BsLinkedin, BsDiscord, BsYoutube } from "react-icons/bs";
import YazilimLogo from "../../assets/circle.png";
import IyteLogo from "../../assets/iyte_logo-tur-232x232.png";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-[#f0d1b8]">
      <div className="container px-1 py-3 mx-auto flex justify-center items-center">
        <div className="flex justify-center">
          <a
            className="mr-6"
            rel="noreferrer"
            href="https://discord.gg/a7zkda4n"
            target="_blank"
          >
            <BsDiscord className="cursor-pointer" size={20} color="#f0d1b8" />
          </a>
          <a
            className="mr-6"
            rel="noreferrer"
            href="https://www.instagram.com/iyte_yazilim/"
            target="_blank"
          >
            <AiFillInstagram
              className="cursor-pointer"
              size={20}
              color="#f0d1b8"
            />
          </a>
          <a
            className="mr-6"
            rel="noreferrer"
            href="https://www.linkedin.com/company/iyteyazilim/"
            target="_blank"
          >
            <BsLinkedin className="cursor-pointer" size={20} color="#f0d1b8" />
          </a>
          <a
            className="mr-48"
            rel="noreferrer"
            href="https://www.youtube.com/@iyteyazilimtoplulugu"
            target="_blank"
          >
            <BsYoutube className="cursor-pointer" size={20} color="#f0d1b8" />
          </a>
        </div>
        <div className="flex ">
          <Image className="w-12 mr-2" src={IyteLogo} alt="iyte" />
          <Image className="w-12" src={YazilimLogo} alt="iyte yazilim" />
        </div>
      </div>
      <div className="container px-5 py-3 mx-auto text-xs md:text-sm text-center">
        2024 © İYTE Yazılım Topluluğu tarafından geliştirilmiştir.
      </div>
    </div>
  );
};

export default Footer;

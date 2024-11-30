import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import logo from "../public/images/Ddsgnr Library.png"

const page = () => {
  return (
    <>
      <div className="h-[72px] w-[428px] border-b-[1px] border-black pr-6 pl-6">
        <div className="pb-7 pt-7">
          <Image src={logo} height={41} width={131} alt="Logo"></Image>
        </div>  
      </div>
    </>
  );
};

export default page;

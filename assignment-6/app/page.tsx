import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div className="w-[1289px] h-[54px] border-black border-[1px] top-[100px] left-[100px] ">
        <div className="pt-3 pb-3 gap-8 flex ml-6 ">
          <div className="gap-4 leading-[21px]">
            <p className="font-normal text-[14px] ">
              Phone Number: 956 742 455 678 | Email:info@ddsgnr.com
            </p>
          </div>
          <div className="flex flex-row gap-3">
            <FaFacebookF />
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

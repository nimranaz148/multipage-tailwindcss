import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
function Header() {
  return (
    <>
      <header className="w-full flex gap-[16px] flex-col">
        
        <div className="
        w-full 
        h-[54px] 
        bg-headercolor  
        px-[62px] 
        py-[15px] 
        hidden xsm:flex
        justify-between 
        items-center 
        border-b-[2px] 
        border-slate-400 
        ">
          <div className="inline-flex gap-4 justify-between text-[14px]">
            <p>Phone Number: 956 742 455 678</p>
            <div className="w-[1px] h-[20px] bg-[#676767]"></div>
            <p>Email:info@ddsgnr.com</p>
          </div>

          <div className="flex gap-[12px]">
            <FaFacebookF size={24} />
            <FaInstagram size={24} />
            <FaTwitter   size={24} />
            <FaLinkedin  size={24} />
          </div>
        </div>


        {/* Bottom Div */}
        <div className="w-full h-[72px] xsm:px-[64px] py-[16px] bg-headercolor flex justify-between items-center border-b-[2px] border-slate-400 px-[24px]">
          <Image src={"/images/logo.png"} alt="logo" width={130} height={41} />

          <div className="w-[910px] h-full bg-white xsm:flex justify-between items-center border-b-[2px] hidden">
            <ul className="h-full flex gap-[52px] items-center">
              <li>
                <Link
                  href={"/"}
                  className="text-[16px] underline underline-offset-[8px] leading-[150%]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link href={"/courses"} className="text-[16px] leading-[150%]">
                  Courses
                </Link>
              </li>
              <li>
                <Link href={"/servicesec"} className="text-[16px] leading-[150%]">
                  Services
                </Link>
              </li>
              <li>
                <Link href={"/achievement"} className="text-[16px] leading-[150%]">
                  Achievements
                </Link>
              </li>
              <li>
                <Link href={"/aboutus"} className="text-[16px] leading-[150%]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={"/testimonial"} className="text-[16px] leading-[150%]">
                  Testimonial
                </Link>
              </li>
            </ul>

            <div className="flex gap-[16px] items-center">
              <Button className="bg-white border-[1px] border-[black] text-black hover:bg-transparent">
                Login
              </Button>
              <Button>Sign up</Button>
            </div>
          </div>

          <FiMenu size={24} className="xsm:hidden" />
        </div>
      
      </header>
    </>
  );
}

export default Header;


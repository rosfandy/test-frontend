import { useState } from "react";
import { HiMenu } from "react-icons/hi";

export default function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <div className="Navbar flex justify-between lg:px-40 px-12 bg-white w-full">
      <div className="flex items-center justify-center font-[700] md:text-2xl text-xl">
        Company
      </div>
      <div className="flex justify-center items-center lg:hidden py-4 ">
        <HiMenu onClick={toggleMenu} className="text-[36px]"></HiMenu>
      </div>
      <div
        className={
          isActive
            ? "uppercase lg:flex flex lg:bg-transparent lg:mx-0 md:mx-8 left-0 lg:w-auto lg:top-0 top-[8%] md:w-[90%] w-full bg-white z-[99] lg:static min-[320px]:absolute flex-col lg:flex-row"
            : "uppercase lg:flex hidden lg:bg-transparent lg:mx-0 md:mx-8 left-0 lg:w-auto lg:top-0 top-[8%] md:w-[90%] w-full bg-white z-[99] lg:static min-[320px]:absolute flex-col lg:flex-row"
        }
      >
        <div className="group z-[999] dropdown">
          <div className="hover:bg-slate-100 hover:cursor-pointer px-4 font-[400] lg:text-[16] py-5">
            About
          </div>
          <div className="dropdown-menu  lg:absolute hidden group-hover:flex flex-col  bg-white ">
            <div className="hover:cursor-pointer  hover:bg-[#444345] hover:text-white lg:px-4 px-8 lg:py-2 py-4">
              History
            </div>
            <div className="hover:cursor-pointer hover:bg-[#444345] hover:text-white lg:px-4 px-8 lg:py-2 py-4">
              Our Mission
            </div>
          </div>
        </div>
        <div className="hover:bg-slate-100 hover:cursor-pointer px-4 font-[400] lg:text-[16] py-5">
          our work
        </div>
        <div className="hover:bg-slate-100 hover:cursor-pointer px-4 font-[400] lg:text-[16] py-5">
          our team
        </div>
        <div className="hover:bg-slate-100 hover:cursor-pointer px-4 font-[400] lg:text-[16] py-5">
          contact
        </div>
      </div>
    </div>
  );
}

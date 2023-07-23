import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="font-bold text-3xl">
        School<span className="text-[#00df9a]">Devs</span>
      </h1>

      <ul className="hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">About</li>
        <li className="p-4 cursor-pointer">Resources</li>
        <li className="p-4 cursor-pointer">Links</li>
      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={!nav ? "fixed left-0 top-0 w-[30%] h-full border-r border-r-gray-950 bg-[#00df9a] text-black ease-in-out duration-200" : "fixed left-[-100%]"}>
        <ul className="pt-20 uppercase">
          <li className="p-4 cursor-pointer">Home</li>
          <li className="p-4 cursor-pointer">About</li>
          <li className="p-4 cursor-pointer">Resources</li>
          <li className="p-4 cursor-pointer">Links</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

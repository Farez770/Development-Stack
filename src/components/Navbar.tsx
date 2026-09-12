import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/logo-text.png";
import { useState } from "react";

// <AiOutlineClose />

type Props = {};

export default function Navbar({}: Props) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white mb-14 px-6 border-b-2 border-[#e5e5e6]">
      <nav className="container mx-auto flex justify-between items-center py-4   relative">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden  text-3xl"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div>
          <img src={logo} alt="" />
        </div>
        <ul className="hidden md:flex gap-7 font-semibold text-[#475569] cursor-pointer transition-all duration-700">
          <li className="active text-[#DB2777] ">Home</li>
          <li className="hover:text-[#DB2777] ">Technologies</li>
          <li className="hover:text-[#DB2777] ">Projects</li>
          <li className="hover:text-[#DB2777] ">About</li>
          <li className="hover:text-[#DB2777] ">Contact</li>
        </ul>
        <div className=" flex gap-2">
          <button className="btn rounded-3xl border-none">Sign In</button>
          <button className="btn bg-[#D91B7E] rounded-3xl text-white">
            Sign Up
          </button>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white pb-4 px-4 z-50">
            <ul className="flex flex-col gap-3 font-semibold text-[#475569]">
              <li className="text-[#DB2777] cursor-pointer">Home</li>
              <li className="cursor-pointer hover:text-[#DB2777]">
                Technologies
              </li>
              <li className="cursor-pointer hover:text-[#DB2777]">Projects</li>
              <li className="cursor-pointer hover:text-[#DB2777]">About</li>
              <li className="cursor-pointer hover:text-[#DB2777]">Contact</li>
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
}

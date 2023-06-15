import React from "react";
import Instagram from "../assets/instagramText.png";
import { FiSearch } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";

const TopMainBar = () => {
    return (
        <div className="flex items-center justify-between gap-x-3 p-3 border-b-[1px] border-[#dddcdc] w-full md:hidden">
            <div className=" cursor-pointer">
                <img src={Instagram} alt="logo" className="w-[8rem] h-[2rem]" />
            </div>
            <div className="relative flex items-center">
                <FiSearch className="absolute left-3 text-[20px] text-[#9c9a9a]" />
                <input
                    type="search"
                    placeholder="Search"
                    className="px-2 py-[0.4rem] pl-10 bg-[#EFEFEF] rounded-[8px]"
                />
            </div>
            <div className="text-[25px] hover:scale-105 duration-300 cursor-pointer">
                <AiOutlineHeart />
            </div>
        </div>
    );
};

export default TopMainBar;

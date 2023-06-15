import React from "react";
import { BsInstagram } from "react-icons/bs";
import { AiFillHome } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { FaRegCompass } from "react-icons/fa";
import { MdOndemandVideo } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { BiMessageSquareAdd } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import Profile from "../assets/profile.jpg";
import Instagram from "../assets/instagramText.png";

const Nav = () => {
    return (
        <div className="sticky top-0 hidden md:flex flex-col items-center xl:items-start justify-between py-[29px] sm:w-[72px] xl:w-[244px] border-r-[1px] border-[#dddcdc] h-screen">
            <div className="flex items-center hover-scale text-[22px] xl:hidden">
                <BsInstagram />
            </div>
            <div className="hidden xl:flex px-5 py-3 cursor-pointer">
                <img src={Instagram} alt="Logo" className="w-[8rem] h-[2rem]" />
            </div>

            <div className="flex flex-col items-center gap-y-[1.2rem] text-[26px] w-full xl:px-4">
                <div className="hover-scale xl:menuItem ">
                    <AiFillHome />
                    <p className="pTagItem font-bold">Home</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <FiSearch />
                    <p className="pTagItem">Search</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <FaRegCompass />
                    <p className="pTagItem">Explore</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <MdOndemandVideo />
                    <p className="pTagItem">Reels</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <FiSend />
                    <p className="pTagItem">Messages</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <AiOutlineHeart />
                    <p className="pTagItem">Notifications</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <BiMessageSquareAdd />
                    <p className="pTagItem">Create</p>
                </div>
                <div className="hover-scale xl:menuItem ">
                    <img
                        src={Profile}
                        alt="profile"
                        className="w-[26px] h-[26px] rounded-full"
                    />
                    <p className="pTagItem">Profile</p>
                </div>
            </div>
            <div className="flex items-center justify-start gap-x-4 text-[20px] xl:px-5 xl:w-[14.5rem] hover-scale">
                <AiOutlineMenu />
                <p className="pTagItem">More</p>
            </div>
        </div>
    );
};

export default Nav;

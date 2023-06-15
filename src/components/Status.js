import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { BiHeart } from "react-icons/bi";
import { AiOutlineComment } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { BiBookmark } from "react-icons/bi";

const Status = ({ avt, name, time, img, like, stt, cmt }) => {
    return (
        <div className="flex flex-col gap-2 py-5 border-b-[1px] border-[#dddcdc] w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-x-2">
                    <div className="p-[0.15rem] bg-gradient-to-r from-yellow-300 to-pink-400 hover:scale-105 duration-300 rounded-full">
                        <img
                            src={avt}
                            alt=""
                            className="w-[2rem] h-[2rem]  rounded-full"
                        />
                    </div>
                    <p className="font-semibold text-[16px]">{name}</p>
                    <p className="text-[16px] text-[#bbb9b9]">{time}</p>
                </div>
                <div>
                    <BsThreeDots className="text-[20px]" />
                </div>
            </div>
            <div>
                <img src={img} alt="" className="rounded-[5px]" />
            </div>
            <div className="px-5 py-2 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-center gap-x-3 text-[25px]">
                        <BiHeart className="text-[28px] hover:text-[#959393]" />
                        <AiOutlineComment className="text-[29px] hover:text-[#959393]" />
                        <FiSend className="hover:text-[#959393]" />
                    </div>
                    <div className="text-[28px]">
                        <BiBookmark className="hover:text-[#959393]" />
                    </div>
                </div>
                <div className="font-semibold text-[14px]">
                    <p>{like} likes</p>
                </div>
                <div>
                    <p className="text-[15px]">
                        <i className="font-semibold pr-1">{name}</i>
                        {stt}
                    </p>
                </div>
                <div className="text-[14px] text-[#828181]">
                    <p>View all {cmt} comments</p>
                </div>
            </div>
        </div>
    );
};

export default Status;

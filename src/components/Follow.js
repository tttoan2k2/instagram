import React from "react";

const Follow = ({ img, name }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="p-[0.2rem] bg-gradient-to-r from-yellow-300 to-pink-400 hover:scale-105 duration-300 rounded-full">
                <img
                    src={img}
                    alt=""
                    className="w-[2.5rem] h-[2.5rem] rounded-full md:w-[3.5rem] md:h-[3.5rem]"
                />
            </div>
            <div className="">
                <p className="text-[12px]">{name}</p>
            </div>
        </div>
    );
};

export default Follow;

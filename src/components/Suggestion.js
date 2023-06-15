import React from "react";

const Suggestion = ({ avt, name, followedBy }) => {
    return (
        <div className="flex items-center justify-between gap-x-5">
            <div className="flex items-center justify-center gap-x-3">
                <div className="border-[1px] border-[#bcbbbb] rounded-full cursor-pointer">
                    <img
                        src={avt}
                        alt=""
                        className="w-[2rem] h-[2rem] rounded-full"
                    />
                </div>
                <div>
                    <p className="font-semibold text-[15px]">{name}</p>
                    <p className="text-[#a4a2a2] text-[12px]">
                        Followed by {followedBy}
                    </p>
                </div>
            </div>
            <div>
                <p className="text-[#359cfc] text-[12px] font-semibold hover:text-[#4080bc] cursor-pointer">
                    Follow
                </p>
            </div>
        </div>
    );
};

export default Suggestion;

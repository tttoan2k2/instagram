import React from "react";
import Suggestion from "./Suggestion";
import profile from "../assets/profile.jpg";

const suggestions = [
    { avt: profile, name: "ngoctra.nguyen", followedBy: "ngovan.tung" },
    { avt: profile, name: "ngoctra.nguyen", followedBy: "ngovan.tung" },
    { avt: profile, name: "ngoctra.nguyen", followedBy: "ngovan.tung" },
    { avt: profile, name: "ngoctra.nguyen", followedBy: "ngovan.tung" },
    { avt: profile, name: "ngoctra.nguyen", followedBy: "ngovan.tung" },
];

const Suggest = () => {
    return (
        <div className="hidden lg:flex flex-col gap-3 pt-[2rem] w-[322px]">
            {/* Profile */}
            <div className="flex items-center justify-between gap-x-[5rem]">
                <div className="flex items-center justify-center gap-x-3">
                    <div className="border-[1px] border-[#bcbbbb] rounded-full cursor-pointer">
                        <img
                            src={profile}
                            alt=""
                            className="w-[3.5rem] h-[3.5rem] rounded-full"
                        />
                    </div>
                    <div className="">
                        <p className="font-semibold text-[15px]">toantran</p>
                        <p className="text-[#bbb9b9] text-[14px]">
                            Trần Trung Toàn
                        </p>
                    </div>
                </div>
                <div>
                    <p className="text-[#359cfc] text-[12px] font-semibold hover:text-[#4080bc] cursor-pointer">
                        Switch
                    </p>
                </div>
            </div>
            {/* Suggestions */}
            <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <h2 className="text-[15px] font-semibold text-[#9d9c9c]">
                        Suggestions for you
                    </h2>
                    <p className="text-[#353535] text-[12px] font-semibold hover:text-[#ccc] cursor-pointer">
                        See All
                    </p>
                </div>
                <div className="flex flex-col gap-2">
                    {suggestions.map((suggestion, index) => {
                        return (
                            <Suggestion
                                key={index}
                                avt={suggestion.avt}
                                name={suggestion.name}
                                followedBy={suggestion.followedBy}
                            />
                        );
                    })}
                </div>
            </div>
            {/* Help */}
            <div className="flex flex-wrap text-[12px] gap-x-2 text-[#CCC] pt-6">
                <a href="/" className="hover:underline">
                    About
                </a>
                <a href="/" className="hover:underline">
                    Help
                </a>
                <a href="/" className="hover:underline">
                    Press
                </a>
                <a href="/" className="hover:underline">
                    API
                </a>
                <a href="/" className="hover:underline">
                    Jobs
                </a>
                <a href="/" className="hover:underline">
                    Privacy
                </a>
                <a href="/" className="hover:underline">
                    Terms
                </a>
                <a href="/" className="hover:underline">
                    Locations
                </a>
                <a href="/" className="hover:underline">
                    Language
                </a>
            </div>
            {/* Copyright */}
            <div>
                <p className="text-[12px] font-semibold text-[#CCC]">
                    &copy; 2023 INSTAGRAM FROM META
                </p>
            </div>
        </div>
    );
};

export default Suggest;

import React from "react";
import Follow from "./Follow";
import profile from "../assets/profile.jpg";

const followList = [
    { img: profile, name: "toantran" },
    { img: profile, name: "toantran" },
    { img: profile, name: "toantran" },
    { img: profile, name: "toantran" },
    { img: profile, name: "toantran" },
    { img: profile, name: "toantran" },
];

const FollowList = () => {
    return (
        <div className="flex items-center gap-x-5 pt-[4rem] pb-[3.6rem] overflow-hidden">
            {" "}
            {followList.map((follow, index) => {
                return (
                    <Follow key={index} img={follow.img} name={follow.name} />
                );
            })}
        </div>
    );
};

export default FollowList;

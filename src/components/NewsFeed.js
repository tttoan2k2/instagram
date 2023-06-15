import React from "react";
import Status from "./Status";
import profile from "../assets/profile.jpg";
import pl from "../assets/pl.jpg";

const newsFeed = [
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
    {
        avt: profile,
        name: "prermierleague",
        time: "1d",
        img: pl,
        like: 264559,
        stt: "Premierleague Ranking",
        cmt: 1197,
    },
];

const NewsFeed = () => {
    return (
        <div className="flex flex-col">
            {newsFeed.map((status) => {
                return (
                    <Status
                        avt={status.avt}
                        name={status.name}
                        time={status.time}
                        img={status.img}
                        like={status.like}
                        stt={status.stt}
                        cmt={status.cmt}
                    />
                );
            })}
        </div>
    );
};

export default NewsFeed;

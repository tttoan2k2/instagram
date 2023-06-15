import React from "react";
import TopMainBar from "./TopMainBar";
import FollowList from "./FollowList";
import NewsFeed from "./NewsFeed";

const MainContent = () => {
    return (
        <div className="flex flex-col items-center px-5 h-screen">
            {/* TopBar */}
            <TopMainBar />
            {/* Follow */}
            <FollowList />
            {/* NewFeed */}
            <NewsFeed />
        </div>
    );
};

export default MainContent;

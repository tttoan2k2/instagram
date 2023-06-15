import MainContent from "./components/MainContent";
import Nav from "./components/Nav";
import Suggest from "./components/Suggest";

function App() {
    return (
        <div className="flex">
            {/* Nav */}
            <Nav />
            {/* Main */}
            <div className="xl:flex items-start justify-center gap-x-[67px] w-full">
                <MainContent />
                {/* Suggest */}
                <Suggest />
            </div>
        </div>
    );
}

export default App;

import Header from "../shared/Header";
import LeftSideBar from "../shared/LeftSideBar";
import Navbar from "../shared/Navbar";
import RightSideBar from "../shared/RightSideBar";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className="md:col-span-2 border">

                </div>
                <div className="border">
                    <RightSideBar></RightSideBar>
                </div>
            </div>           
        </div>
    );
};

export default Home;
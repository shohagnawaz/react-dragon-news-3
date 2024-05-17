import { Link, useLoaderData } from "react-router-dom";
import Header from "../shared/Header";
import LeftSideBar from "../shared/LeftSideBar";
import Navbar from "../shared/Navbar";
import RightSideBar from "../shared/RightSideBar";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";

const Home = () => {
    const news = useLoaderData();
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div>
                    <LeftSideBar></LeftSideBar>
                </div>
                {/* news container */}
                <div className="md:col-span-2">
                    {
                        news.map(aNews => <NewsCard
                            key={aNews._id}
                            news={aNews}
                        ></NewsCard>)
                    }
                </div>
                <div>
                    <RightSideBar></RightSideBar>
                </div>
            </div>           
        </div>
    );
};

export default Home;
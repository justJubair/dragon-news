/* eslint-disable react/no-unescaped-entities */
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Marquee from "react-fast-marquee";
import LoginWith from "../../components/LoginWith/LoginWith";
import FindUsOn from "../../components/FindUsOn/FindUsOn";
import Qzone from "../../components/Qzone/Qzone";
import Advertisement from "../../components/Advertisement/Advertisement";
import NewsCategories from "../../components/NewsCategories/NewsCategories";
import LeftSideNews from "../../components/LeftSideNews/LeftSideNews";
import { useLoaderData } from "react-router-dom";
import MainNewsCard from "../../components/MainNewsCard/MainNewsCard";

const Home = () => {
  
  const data = useLoaderData();
  return (
 
        <div>
        <Header />
        <div className="my-6 flex items-center bg-slate-200 p-3">
          <button className="btn btn-sm btn-secondary">Latest</button>
          <Marquee pauseOnHover={true} speed={100}>
            Breakthrough Study Reveals Promising Treatment for Alzheimer's Disease
          </Marquee>
        </div>
        <Navbar />
        {/* main layout */}
        <div className="grid grid-cols-1 gap-6 mt-6 md:grid-cols-4 md:mt-14">
          <div>
            <NewsCategories/>
            <LeftSideNews/>
          </div>
          <div className="md:col-span-2">
            <h2 className="font-bold text-xl mb-4 text-[#403F3F]">Dragon News Home</h2>
            {
              data.map(news => <MainNewsCard key={news._id} news={news}/>)
            }
          </div>
          <div>
            {/* Login with */}
            <LoginWith />
  
            {/* find us on */}
            <FindUsOn />
            <Qzone/>
            {/* Add section */}
            <Advertisement/>
          </div>
        </div>
      </div>
      
   
  );
};

export default Home;

/* eslint-disable react/no-unescaped-entities */

import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import Marquee from "react-fast-marquee";
import LoginWith from "../../components/LoginWith/LoginWith";
import FindUsOn from "../../components/FindUsOn/FindUsOn";
import Qzone from "../../components/Qzone/Qzone";
const Home = () => {
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
      <div className="grid grid-cols-1 mt-6 md:grid-cols-4 md:mt-14">
        <div>
          <h1>this is left navbar</h1>
        </div>
        <div className="md:col-span-2">
          <h1>news coming soon</h1>
        </div>
        <div>
          {/* Login with */}
          <LoginWith />

          {/* find us on */}
          <FindUsOn />
          <Qzone/>
        </div>
      </div>
    </div>
  );
};

export default Home;

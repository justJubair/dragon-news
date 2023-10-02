import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import Marquee from "react-fast-marquee";

const Home = () => {
  return (
    <div>
      <Header/>
      <div className="max-w-screen-lg mx-auto my-6 flex items-center bg-slate-200 p-3">
        <button className="btn btn-secondary">Latest</button>
        <Marquee pauseOnHover={true} speed={100}>
        I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
      <Navbar/>
    </div>
  )
}

export default Home

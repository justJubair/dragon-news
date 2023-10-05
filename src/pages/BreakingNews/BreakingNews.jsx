import { useLoaderData } from "react-router-dom"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import BreakingNewsCard from "./BreakingNewsCard";


const BreakingNews = () => {
  const data =  useLoaderData();

  return (
    <div>
      <div className="mb-6">
      <Header/>
      </div>
      <Navbar/>
     <div className="max-w-screen-lg mx-auto mt-8">
      {
        data.map(news => <BreakingNewsCard key={news._id} news={news}/>)
      }
     </div>
    </div>
  )
}

export default BreakingNews 

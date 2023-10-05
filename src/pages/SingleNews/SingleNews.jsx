import { useParams } from "react-router-dom"
import useData from "../../hooks/useData"
import Header from "../../components/Header/Header"
import Navbar from "../../components/Navbar/Navbar"
import LoginWith from "../../components/LoginWith/LoginWith"
import FindUsOn from "../../components/FindUsOn/FindUsOn"
import Qzone from "../../components/Qzone/Qzone"
import SingleNewsCard from "./SingleNewsCard"


const SingleNews = () => {
  const data = useData()
  const {id} = useParams()
 
  const selectedNews = data.find(news => news._id === id)

  return (
   <div>
    <Header/>
  <div className="my-6">
  <Navbar/>
  </div>
     <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="col-span-3">
    <h2 className="font-bold text-xl mb-4">Dragon News</h2>
    <div>
      {
        <SingleNewsCard news={selectedNews} />
      }
    </div>
      </div>
      <div>
      <LoginWith/>
      <FindUsOn/>
      <Qzone/>
      </div>
    </div>
   </div>
  )
}

export default SingleNews

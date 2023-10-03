import qzone1 from "../../assets/qzone1.png"
import qzone2 from "../../assets/qzone2.png"
import qzone3 from "../../assets/qzone3.png"

const Qzone = () => {
  return (
    <div className="p-4 mt-6 bg-[#F3F3F3]">
      <h1 className="text-2xl font-bold">Q-zone</h1>
    <div className="flex justify-center mt-4">
       <div>
       <img src={qzone1} alt="" />
        <img className="my-6" src={qzone2} alt="" />
        <img src={qzone3} alt="" />
       </div>
    </div>
    </div>
  )
}

export default Qzone

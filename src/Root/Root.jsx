import { Outlet } from "react-router-dom"


const Root = () => {
  return (
    <div className="max-w-screen-xl p-4 mx-auto font-poppins">
    
      <Outlet/>
    </div>
  )
}

export default Root

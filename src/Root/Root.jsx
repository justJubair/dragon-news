import { Outlet } from "react-router-dom"


const Root = () => {
  return (
    <div className="max-w-screen-xl p-4 mx-auto font-poppins md:p-0">
    
      <Outlet/>
    </div>
  )
}

export default Root

import newsLogo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
  return (
    <div className="flex justify-center mt-4">
    <div className="text-center">
    <img className="w-96" src={newsLogo} alt="" />
     <p className="mt-4 mb-2 text-[#706F6F]">Journalism Without Fear or Favour</p>
    <span className="text-lg font-semibold text-[#606060]">
    {
        moment().format('dddd MMMM D, YYYY')
     }
    </span>
    </div>
    </div>
  )
}

export default Header

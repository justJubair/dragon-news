import newsLogo from "../../assets/logo.png"
import moment from 'moment';
const Header = () => {
  return (
    <div>
     <img src={newsLogo} alt="" />
     <p>Journalism Without Fear or Favour</p>
    <span>
    {
        moment().format('dddd MMMM D, YYYY')
     }
    </span>
    </div>
  )
}

export default Header

import { Navigate, useLocation} from "react-router-dom"
import useAuth from "../hooks/useAuth"
import PropTypes from "prop-types";

const PrivateRoute = ({children}) => {
   const location = useLocation()
   
    const {user, loading} = useAuth()
    if(loading){
        return <div className="h-screen flex items-center justify-center">
            <span className="loading loading-dots loading-lg"></span>
        </div>
    }

    if(user?.email){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
 
}


PrivateRoute.propTypes = {
    children:PropTypes.node
}
export default PrivateRoute

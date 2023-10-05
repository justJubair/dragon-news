import { FaGithub, FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const LoginWith = () => {
  const {loginWithGoogle, loginWithGithub} = useAuth()
  // login with google
  const handleGoogle =()=>{
    loginWithGoogle()
    .then(()=>{
      toast.success("Successfully logged in")
    })
    .catch(error=>{
      toast.error(error.message)
    })
  }
  // login with Github
  const handleGithub =()=>{
    loginWithGithub()
    .then(()=>{
      toast.success("Successfully logged in")
    })
    .catch(error=>{
      toast.error(error.message);
    })
  }
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Login With</h2>
      <div>
        <button onClick={handleGoogle} className="btn btn-outline w-full mb-3">
          <FaGoogle className="text-lg" />
          Login with Google
        </button>
        <button onClick={handleGithub} className="btn btn-outline w-full">
          <FaGithub className="text-lg" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;

import { FaGithub, FaGoogle } from "react-icons/fa";
const LoginWith = () => {
  return (
    <div>
      <h2 className="font-bold text-xl mb-4">Login With</h2>
      <div>
        <button className="btn btn-outline w-full mb-3">
          <FaGoogle className="text-lg" />
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="text-lg" />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default LoginWith;

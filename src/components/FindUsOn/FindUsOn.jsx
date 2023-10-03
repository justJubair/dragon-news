import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUsOn = () => {
  return (
    <div className="mt-8">
      <h2 className="font-bold text-xl mb-4">Find Us On</h2>
      <div>
        <Link className="flex items-center text-lg border-2 border-gray-400 rounded-t-lg p-3">
          <FaFacebook className="text-2xl" /> <p className="ml-2">Facebook</p>
        </Link>
        <Link className="flex items-center text-lg border-x-2 border-b-2 border-gray-400  p-3">
          <FaTwitter className="text-2xl" /> <p className="ml-2">Twitter</p>
        </Link>
        <Link className="flex items-center text-lg border-b-2 border-x-2 border-gray-400 rounded-b-lg p-3">
          <FaInstagram className="text-2xl" /> <p className="ml-2">Instagram</p>
        </Link>
      </div>
    </div>
  );
};

export default FindUsOn;

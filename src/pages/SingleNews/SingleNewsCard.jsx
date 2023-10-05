import { FaEye } from "react-icons/fa";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SingleNewsCard = ({ news }) => {

  const { image_url, title, total_view, details} = news || {};

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg w-full" src={image_url} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {details}
        </p>
        <div className="flex justify-between">
          <Link
            to="/"
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Back to All news
          </Link>
          <div className="flex items-center gap-2 text-[#706F6F]">
            <FaEye className="text-xl" />
            {total_view}
          </div>
        </div>
      </div>
    </div>
  );
};
SingleNewsCard.propTypes = {
  news: PropTypes.object,
};

export default SingleNewsCard;

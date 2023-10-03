import PropTypes from "prop-types"
import { FaCalendar } from "react-icons/fa";
const NewsCard = ({ news }) => {
  
  const { title, image_url } = news;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={image_url} alt={title} />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#403F3F] dark:text-white">
            {title}
          </h5>
        </a>
        <div className="flex justify-between mt-6">
          <p className="text-[#403F3F]">Geopolitics</p>
          <p className="flex items-center gap-2 text-[#9F9F9F]">
            <FaCalendar className="text-lg" /> Jan 4, 2023
          </p>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news:PropTypes.object
}


export default NewsCard;

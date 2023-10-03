import useData from "../../hooks/useData";
import NewsCard from "./NewsCard";

const LeftSideNews = () => {
  const data = useData();

  return (
   <div className="mt-3 space-y-4">
    {
        data.slice(4,7).map(singleNews => <NewsCard key={singleNews._id} news={singleNews}/>)
    }
   </div>
  );
};

export default LeftSideNews;

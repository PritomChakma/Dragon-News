import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LeatestNews = () => {
  return (
    <div className="w-11/12 mx-auto flex justify-center items-center bg-gray-200 p-2">
      <h1 className="px-3 bg-[#D72050] text-white font-semibold btn">Latest</h1>

      <Marquee className="flex gap-5 justify-center items-center ">
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </Link>
        <Link to="/news">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit
        </Link>
      </Marquee>
    </div>
  );
};

export default LeatestNews;

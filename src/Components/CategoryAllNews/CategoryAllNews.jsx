

import { FaRegEye, FaStar } from "react-icons/fa";

const CategoryAllNews = ({ news }) => {
  const { author, title, details, image_url, rating, total_view } = news;

  return (
    <div className="shadow-md rounded-xl overflow-hidden border border-gray-300 mb-6">
      {/* Author Section */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h2 className="font-semibold text-gray-800">{author.name}</h2>
            <p className="text-sm text-gray-500">{author.published_date}</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700 transition">
          <i className="ri-share-line"></i>
        </button>
      </div>

      {/* Title */}
      <h1 className="text-lg font-bold text-gray-900 px-4 pt-3">
        {title}
      </h1>

      {/* Thumbnail Image */}
      <img
        src={image_url}
        alt="thumbnail"
        className="w-full h-56 object-cover mt-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-600 px-4 py-3 leading-relaxed">
        {details.length > 200 ? details.slice(0, 200) + "..." : details}
        <span className="text-orange-500 font-medium cursor-pointer"> Read More</span>
      </p>

      {/* Footer (Rating & Views) */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <span className="font-medium text-gray-700">{rating.number}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaRegEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default CategoryAllNews;

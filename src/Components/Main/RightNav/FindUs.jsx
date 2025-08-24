import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

const FindUs = () => {
  return (
    <div className="">
      <h1 className="font-semibold text-lg mb-4 border-b pb-2">Find Us On</h1>

      <div className="flex flex-col gap-3">
        <button className="flex items-center gap-3 border px-5 py-2 rounded-lg  ">
          <FaFacebook className="text-blue-600 text-xl" />
          Facebook
        </button>

        <button className="flex items-center gap-3 border px-5 py-2 rounded-lg ">
          <FaTwitter className="text-sky-500 text-xl" />
          Twitter
        </button>

        <button className="flex items-center gap-3 border px-5 py-2 rounded-lg ">
          <FaInstagram className="text-pink-500 text-xl" />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;

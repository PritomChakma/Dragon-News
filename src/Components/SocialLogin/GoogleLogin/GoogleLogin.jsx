import { FcGoogle } from "react-icons/fc";

const GoogleLogin = () => {
  return (
    <div className="flex justify-center items-center ">
      <button className="flex items-center gap-3 w-72 p-3 btn ">
        <FcGoogle size={24} />
        <span>Continue with Google</span>
      </button>
    </div>
  );
};

export default GoogleLogin;

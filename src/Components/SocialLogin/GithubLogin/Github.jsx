import { FaGithub } from "react-icons/fa";

const Github = () => {
  return (
    <div className="flex justify-center items-cente">
      <button className="flex items-center gap-3 w-72  p-3 btn">
        <FaGithub size={24} />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
};

export default Github;

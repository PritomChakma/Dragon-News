import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center my-5 w-11/12 mx-auto">
      <div></div>
      <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-sm btn-neutral">Login</Link>
      </div>
    </div>
  );
};

export default NavBar;

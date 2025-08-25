import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../Provider/AuthProvider";
const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const handleLogout = () => {
    logOut();
  };

  return (
    <div className="flex justify-between items-center my-5 w-11/12 mx-auto">
      <div>
        <span className="font-semibold">Email:</span> {user?.email}
      </div>
      <div className="space-x-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="career">Career</NavLink>
      </div>
      <div className="flex gap-2 items-center">
        {user ? (
          <img
            src={user?.photoURL}
            alt="User Avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
        ) : (
          <img
            src={userIcon}
            alt="Default Avatar"
            className="w-10 h-10 rounded-full object-cover border border-gray-300"
          />
        )}

        {user && user.email ? (
          <button onClick={handleLogout} className="btn btn-neutral">
            Logout
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-sm btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

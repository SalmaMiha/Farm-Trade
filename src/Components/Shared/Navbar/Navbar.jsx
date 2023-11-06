import { Link, NavLink } from "react-router-dom";
import icon from "../../../assets/Farm Trade.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import UserInfo from "./UserInfo";

const Navbar = () => {
  //const currentUser = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const links = (
    <>
      <li className="font-jost font-semibold text-base">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? " border-b-4 border-green text-green rounded-none px-3 py-2 "
              : "px-3 py-2"
          }
        >
          Home
        </NavLink>
      </li>
      <li className="font-jost font-semibold text-base">
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive
              ? " border-b-4 border-green text-green rounded-none px-3 py-2 "
              : "px-3 py-2"
          }
        >
          Services
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <img className="w-16" src={icon} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user && <UserInfo></UserInfo>}

        {user ? (
          <>
            <a
              onClick={handleLogOut}
              className="btn bg-green text-white font-extrabold font-quicksand"
            >
              Log out
            </a>
          </>
        ) : (
          <Link to="/login">
            <button className="btn bg-green font-extrabold text-white font-quicksand">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

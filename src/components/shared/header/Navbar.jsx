import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const hangleLogOut = () => {
    LogOut()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navItems = (
    <>
      <li>
        <Link className = 'font-bold' to="/">Home</Link>{" "}
      </li>
      <li>
        {" "}
        <Link className = 'font-bold' to="/alltoys">All Toys</Link>{" "}
      </li>
      {user?.email ? (
        <div className="flex flex-col md:flex-row">
          <li>
            {" "}
            <Link className = 'font-bold' to="/mytoys">My Toys</Link>{" "}
          </li>
          <li>
            {" "}
            <Link className = 'font-bold' to="/addtoys">Add A Toy</Link>{" "}
          </li>
          <li>
            <div
              className="h-20 w-20 flex justify-center items-center relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img src={user?.photoURL} alt="" className="rounded-full" />
              {isHovered && (
                <span className="mt-20 absolute">{user?.displayName}</span>
              )}
            </div>
          </li>
          <li>
            <button className="font-bold" onClick={hangleLogOut}>Logout</button>
          </li>
        </div>
      ) : (
        <li>
          <Link className = 'font-bold' to="/login">Login</Link>
        </li>
      )}
      <li>
        {" "}
        <Link className = 'font-bold' to="/blogs">Blogs</Link>{" "}
      </li>
    </>
  );
  return (
    <div className="bg-slate-200">
      <div className="navbar container mx-auto">
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <Link className = 'font-bold' to="/">
            <img src={logo} alt="" className="h-24" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          <button className="btn btn-outline btn-info">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

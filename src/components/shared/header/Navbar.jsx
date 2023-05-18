import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

const Navbar = () => {
  const user = {
    name: 'amrann'
  }
  const navItems = <>
  <li><Link to="/">Home</Link> </li>
  <li> <Link to="/alltoys">All Toys</Link> </li>
  <li> <Link to="/mytoys">My Toys</Link> </li>
  <li> <Link to="/addtoys">Add A Toy</Link> </li>
  <li> <Link to="/blogs">Blogs</Link> </li>
  <li><Link to="/login">Login</Link></li>
</>
return (
  <div className="bg-slate-100">
    <div className="navbar container mx-auto mb-4">
      <div className="navbar-start">
          <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                  {navItems}
              </ul>
          </div>
          <Link to="/" className="">
              <img src={logo} alt="" className="h-24"/>
          </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              {navItems}
          </ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-outline btn-warning">Appointment</button>
      </div>
  </div>
  </div>
);
};

export default Navbar;

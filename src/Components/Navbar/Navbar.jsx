import { Link, NavLink } from "react-router";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const links = (
    <>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `${isActive ? "bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent underline underline-offset-4" : "text-[#2f2f2f]"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            `${isActive ? "bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent underline underline-offset-4" : "text-[#2f2f2f]"}`
          }
        >
          Apps
        </NavLink>
      </li>
      <li className="text-[16px] font-semibold">
        <NavLink
          to="/installation"
          className={({ isActive }) =>
            `${isActive ? "bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent underline underline-offset-4" : "text-[#2f2f2f]"}`
          }
        >
          Installation
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn border-none shadow-none bg-none focus:none text-[16px] font-bold"
        >
          <img src={logo} alt="Logo Image" className="w-10" />
          <span className="bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent">
            HERO.IO
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end mr-1.5">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;

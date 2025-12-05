import React, { use } from "react";
import "animate.css";
import { Link, useNavigate } from "react-router";
import logo from "../assets/petLogo.jpeg";
import { AuthContext } from "../Contexts/AuthContext";
import toast from "react-hot-toast";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const navigate = useNavigate()
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Logout SuccessFully");
        navigate("/")
      })
      .catch((error) => {
        toast.error("got error", error);
      });
  };

  const links = 
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/profile">My Profile</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/register">Registration</Link>
      </li>
    </>
 
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow animate__animated animate__backInDown"
          >
            {links}
          </ul>
        </div>
        <div className="flex justify-center items-center">
          <img className="w-[70px] h-[70px]" src={logo} alt="" />
          <a className="btn btn-ghost text-xl animate__animated animate__wobble">
            PetCare BD{" "}
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 animate__animated animate__backInDown">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <span className="mx-3">
              
            <img className="w-[50px] h-[50px] cursor-pointer rounded-full " title={user?.displayName} src={user?.photoURL} alt="" />
            </span>
            <a onClick={handleLogOut} className="btn">
              {" "}
              LogOut
            </a>
          </>
        ) : (
          <Link to={`/login`}>Log in</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;

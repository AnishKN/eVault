import React from "react";
import { NavLink,useLocation,useNavigate } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { useEffect } from "react";
import app from "../config/db";


const auth = getAuth(app);

const Navbar = ({ hideNavbar }) => {
  const location = useLocation();
  const navigate = useNavigate();
  

  let isUser = false;
  if(location.pathname == '/userDashboard' ||
     location.pathname == '/lawyerDashboard'
  ){
    isUser = true;
  }

  if (hideNavbar) {
    return null;
  }



  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   const userID = localStorage.getItem("userID");

  //   if (isLoggedIn) {
  //     navigate('/lawyerDashboard');
  //   }
  // }, [])
  

  const logout = ()=>{
    signOut(auth).then(() => {
      localStorage.setItem("isLoggedIn", false);
      localStorage.setItem("userID",null)
      console.warn("SUCCESS");
      navigate('/');
    }).catch((error) => {
      console.warn("FAIL");
      // navigate('/');
    });
    
  }
  
  return (
    <>
    {/* User Navigation */}
    {location.pathname.startsWith('/') && (
        <nav className="bg-white border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink to={isUser ? "/userDashboard" : "/"}>
              <span className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="h-8" alt="E-vault Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  eVault
                </span>
              </span>
            </NavLink>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              {isUser ? (
                <button
                  onClick={logout}
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Logout
                </button>
              ) : (
                <NavLink to="/selectionAuth">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Get started
                  </button>
                </NavLink>
              )}
              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-cta">
              {isUser ? (
                <p className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">
                  Welcome!
                </p>
              ) : (
                <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 md:p-0 text-blue-700 rounded md:dark:text-blue-500"
                          : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 md:p-0 text-blue-700 rounded md:dark:text-blue-500"
                          : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 md:p-0 text-blue-700 rounded md:dark:text-blue-500"
                          : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/contact"
                      className={({ isActive }) =>
                        isActive
                          ? "block py-2 px-3 md:p-0 text-blue-700 rounded md:dark:text-blue-500"
                          : "block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </nav>
    )}
    {/* lawyer navgation */}
    {/* {location.pathname.startsWith('/lawyer') && (
    <nav className="bg-white border-orange-200 dark:bg-orange-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink to={isUser ? "/userDashboard" : "/"}> 
        <span
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo.png"
            className="h-8"
            alt="E-vault Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            eVault
          </span>
        </span>
      </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isUser? (<button
          onClick={logout}
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Logout
            </button>):(
          <NavLink to='/selectionAuth'>
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              Get started
            </button>
          </NavLink>)}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          {isUser? (<p className="block py-2 px-3 md:p-0 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:dark:text-orange-500">Welcome!</p>) : (
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-orange-800 md:dark:bg-orange-900 dark:border-orange-700">
            <NavLink to="/">
              <li>
                <p
                  className="block py-2 px-3 md:p-0 text-white bg-orange-700 rounded md:bg-transparent md:text-orange-700 md:dark:text-orange-500"
                  aria-current="page"
                >
                  Home
                </p>
              </li>
            </NavLink>
            <NavLink to="/about">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </p>
            </li>
            </NavLink>
            <NavLink to="/services">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </p>
            </li>
            </NavLink>
            <NavLink to="/contact">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </p>
            </li>
            </NavLink>
          </ul>)}
        </div>
      </div>
    </nav>
    )} */}
    {/* Admin navigation */}
    {/* {location.pathname.startsWith('/admin') && (
    <nav className="bg-white border-black dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink to={isUser ? "/userDashboard" : "/"}> 
        <span
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/logo.png"
            className="h-8"
            alt="E-vault Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            eVault
          </span>
        </span>
      </NavLink>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          {isUser? (<button
          onClick={logout}
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Logout
            </button>):(
          <NavLink to='/selectionAuth'>
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </NavLink>)}
          <button
            data-collapse-toggle="navbar-cta"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          {isUser? (<p className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500">Welcome!</p>) : (
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <NavLink to="/">
              <li>
                <p
                  className="block py-2 px-3 md:p-0 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </p>
              </li>
            </NavLink>
            <NavLink to="/about">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                About
              </p>
            </li>
            </NavLink>
            <NavLink to="/services">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Services
              </p>
            </li>
            </NavLink>
            <NavLink to="/contact">
            <li>
              <p
                className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Contact
              </p>
            </li>
            </NavLink>
          </ul>)}
        </div>
      </div>
    </nav>
    )} */}
    </>
  );
}

export default Navbar;

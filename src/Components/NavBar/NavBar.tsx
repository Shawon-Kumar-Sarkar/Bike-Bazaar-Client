import { Link, NavLink } from "react-router";
import { authLinks, navLinks } from "../../Constant";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  console.log(openMenu);
  return (
    <nav className="relative w-full bg-orange-500">
      <div className="w-full h-full flex items-center">
        <div className="w-full h-full navBar-pad">
          <div className="w-full h-full flex justify-between items-center">
            <div>
              <h3>
                <Link to="/" className="logo-text font-bold text-white">
                  BikeBazaar
                </Link>
              </h3>
            </div>
            <div className="hidden md:flex items-center">
              <ul className="flex items-center navLink-gap navBar-1 border-r-2 border-white">
                {navLinks.map((link, index) => (
                  <li key={index} className="text-white navLink-text">
                    <NavLink
                      to={link.to}
                      className={({ isActive }) =>
                        isActive ? "font-bold p-1" : "font-medium p-1"
                      }
                    >
                      {link.value}
                    </NavLink>
                  </li>
                ))}
              </ul>
              <ul className="flex items-center navLink-gap navBar-2">
                {authLinks.map((link, index) => (
                  <li
                    key={index}
                    className="text-white navLink-text font-medium"
                  >
                    <Link to={link.to}>{link.value}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="block md:hidden">
              <div
                onClick={() => setOpenMenu(!openMenu)}
                className="menu-icon-open p-1 text-white cursor-pointer"
              >
                <IoMenu />
              </div>
              <div
                className={`absolute top-0 right-0 ${
                  openMenu ? "translate-x-0" : "translate-x-full"
                } w-full sm:w-1/2 h-dvh bg-gray-200 shadow-2xl transition-all duration-1000 ease-in-out`}
              >
                <div className="close-menu bg-orange-500">
                  <div className="w-full h-full flex justify-end items-center">
                    <div
                      onClick={() => setOpenMenu(!openMenu)}
                      className="menu-icon-close p-1 text-white cursor-pointer"
                    >
                      <IoClose />
                    </div>
                  </div>
                </div>
                <div className="py-5 w-8/12 md:full mx-auto">
                  <div className="navBar-pad">
                    <ul className="flex flex-col items-center navLink-m-gap navBar-m-1 border-b-2 border-dotted border-orange-500">
                      {navLinks.map((link, index) => (
                        <li
                          key={index}
                          className="w-full text-black navLink-text"
                        >
                          <NavLink
                            onClick={() => setOpenMenu(!openMenu)}
                            to={link.to}
                            className={({ isActive }) =>
                              isActive
                                ? "block w-full font-bold bg-orange-500 text-white text-center p-1"
                                : "block w-full font-medium text-orange-500 text-center p-1 border-2 border-orange-500 rounded-xs"
                            }
                          >
                            {link.value}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <ul className="flex flex-col items-center navLink-m-gap navBar-m-2">
                      {authLinks.map((link, index) => (
                        <li
                          key={index}
                          className="w-full text-black navLink-text"
                        >
                          <Link
                            to={link.to}
                            className="block w-full font-medium text-orange-500 text-center p-1 border-2 border-orange-500 rounded-xs"
                          >
                            {link.value}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React, { useState } from "react";
import { FiList, FiXSquare } from "react-icons/fi";
import { Link } from "react-router-dom";
import NavNavigate from "../Navigation/NavNavigate";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleNavbar = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <header className="bg-sky-700 py-2 px-4 flex items-center justify-between relative ">
      <span className="text-sky-300 font-bold text-xl">Dev</span>

      <button
        onClick={toggleNavbar}
        className="block sm:hidden bg-white rounded-full px-2 py-2 text-red-500"
      >
        {showMenu ? <FiXSquare size={25} /> : <FiList color={'blue'} size={25} />}
      </button>

      <nav
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-sky-600 px-4 py-4 sm:static sm:block sm:bg-transparent`}
      >
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {NavNavigate.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="text-sky-300 font-bold hover:underline">
                {link.text}
              <hr className="sm:hidden border w-1/4 my-1 border-gray-00 " />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

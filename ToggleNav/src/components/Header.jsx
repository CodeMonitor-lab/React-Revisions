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
    <header className="bg-sky-500 py-3 px-4 flex items-center justify-between relative">
      <span className="text-white font-bold text-xl">Logo</span>

      <button
        onClick={toggleNavbar}
        className="block sm:hidden bg-white rounded-full px-2 py-2 text-red-500"
      >
        {showMenu ? <FiXSquare size={25} /> : <FiList size={25} />}
      </button>

      <nav
        className={`${
          showMenu ? "block" : "hidden"
        } absolute top-full left-0 w-full bg-red-400 px-5 py-4 sm:static sm:block sm:bg-transparent`}
      >
        <ul className="flex flex-col gap-3 sm:flex-row sm:gap-6">
          {NavNavigate.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="text-white hover:underline">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

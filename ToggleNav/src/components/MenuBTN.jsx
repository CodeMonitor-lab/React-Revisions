import React, { useState } from "react";
import { FiList, FiXSquare } from "react-icons/fi";

const MenuBTN = ({onClick}) => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = ()=>{
    setShowMenu((prev)=>!prev)
  }

  return (
    <button onClick={toggleMenu}  >
      {showMenu ? <FiList/> : <FiXSquare/> }
    </button>
  );
};

export default MenuBTN;

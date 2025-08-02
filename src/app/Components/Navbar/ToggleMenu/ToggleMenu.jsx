import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";

const ToggleMenu = ({isMenuOpen, setIsMenuOpen}) => {
  return (
    <div>
      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black dark:text-white text-2xl"
        >
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>
    </div>
  );
};

export default ToggleMenu;

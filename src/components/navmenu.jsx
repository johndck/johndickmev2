import { useState } from "react";
import { Link } from "react-router-dom";

function NavElements() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button
        className="flex flex-col justify-around w-[1.5rem] h-6 mr-6 lg:hidden text-xl font-bold font-opensans"
        onClick={toggleMenu}
      >
        {isOpen ? (
          "X"
        ) : (
          <>
            <div className="h-1 w-[1.5rem] bg-black"></div>
            <div className="h-1 w-[1.5rem] bg-black"></div>
          </>
        )}
      </button>
      <div
        className={`absolute container top-full bg-white rounded-b-lg transition-all duration-700 ease-in-out ${
          isOpen ? "h-60 opacity-100 shadow-xl" : "h-0 opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center space-y-6 mt-4 mb-6 font-bold font-opensans">
          <Link to="/evidence" onClick={toggleMenu}>
            Delivery Evidence
          </Link>
          <Link to="/influence" onClick={toggleMenu}>
            Influences
          </Link>
          <Link to="/focus" onClick={toggleMenu}>
            Focus
          </Link>
          <Link to="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <a href="#" onClick={toggleMenu}>
            X
          </a>
        </div>
      </div>
      <div className="uppercase cursor-pointer font-opensans hidden lg:block ml-28 pb-6">
        <Link to="/evidence" className="mr-4 text-neutral-400 hover:text-black">
          Delivery Evidence
        </Link>
        <Link
          to="/influence"
          className="mr-4 text-neutral-400 hover:text-black"
        >
          Influences
        </Link>
        <Link to="/focus" className="mr-4 text-neutral-400 hover:text-black">
          Focus
        </Link>
        <Link to="/contact" className="mr-4 text-neutral-400 hover:text-black">
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavElements;

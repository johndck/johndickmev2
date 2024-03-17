// this component controls the nav bar link elements
// mostly for mobile, the hamburger button will be shown
// above 640 the nav links will be shown in a horizontal div
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
        className="flex flex-col justify-around w-6 h-6 mr-6 lg:hidden"
        onClick={toggleMenu}
      >
        <div className="w-6 h-1 bg-black"></div>
        <div className="w-6 h-1 bg-black"></div>
      </button>

      {isOpen && (
        <div className="absolute container top-full border border-black bg-white h-60 flex flex-col items-center ">
          <div className="flex flex-col items-center space-y-4 mt-4 ">
            <Link to="/evidence" onClick={toggleMenu}>
              Delivery Evidence
            </Link>
            <Link to="/focus" onClick={toggleMenu}>
              Focus
            </Link>
            <Link to="/influence" onClick={toggleMenu}>
              Influences
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
            <a href="#" onClick={toggleMenu}>
              X
            </a>
          </div>
        </div>
      )}

      <div className="hidden lg:block ml-24">
        <Link to="/evidence" className="mr-4">
          Delivery Evidence
        </Link>
        <Link to="/focus" className="mr-4">
          Focus
        </Link>
        <Link to="/influence" className="mr-4">
          Influences
        </Link>
        <Link to="/contact" className="mr-4">
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavElements;

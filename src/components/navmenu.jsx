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
        className="flex flex-col justify-around w-[1.5rem] h-6 mr-6 lg:hidden"
        onClick={toggleMenu}
      >
        <div className="h-1 w-[1.5rem] bg-black"></div>
        <div className="h-1 w-[1.5rem] bg-black"></div>
      </button>

      {isOpen && (
        <div className="absolute container top-full border bg-white h-60 flex flex-col items-center rounded-b-lg">
          <div className="flex flex-col items-center space-y-6 mt-4">
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
      )}

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
        <Link to="/focus" className="mr-4  text-neutral-400 hover:text-black">
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

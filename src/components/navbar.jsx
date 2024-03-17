import { Link } from "react-router-dom";
import TopNav from "./nav";
import Navtitle from "./navtitle";
import NavElements from "./navmenu";

function Navbar() {
  return (
    <header>
      <nav className=" bg-slate-200">
        <div className="relative container border border-black sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
          <TopNav>
            <Navtitle />
            <NavElements />
          </TopNav>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

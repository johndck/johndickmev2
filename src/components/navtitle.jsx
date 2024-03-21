// this component returns the image and my name into the navbar
import { Link } from "react-router-dom";

function Navtitle() {
  return (
    <div className="p-4 lg:pt-14 lg:pl-4 lg:pb-2 flex flex-row items-center font-opensans">
      <Link to="/">
        <img
          src="/assets/johndick.png"
          alt="picture of John Dick"
          className="h-20 w-auto"
        />
      </Link>
      <h2 className="p-8 font-opensans text-h3 font-semibold">John Dick</h2>
    </div>
  );
}

export default Navtitle;

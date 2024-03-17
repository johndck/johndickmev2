// this component returns the image and my name into the navbar
import { Link } from "react-router-dom";

function Navtitle() {
  return (
    <div className="p-6 lg:pt-6 lg:pl-6 lg:pb-2 flex flex-row items-center font-opensans">
      <Link to="/">
        <img
          src="/assets/johndick.png"
          alt="picture of John Dick"
          className="h-16 w-auto"
        />
      </Link>
      <h2 className="p-3">John Dick</h2>
    </div>
  );
}

export default Navtitle;

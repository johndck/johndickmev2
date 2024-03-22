import { Link } from "react-router-dom";

function Homeorgs() {
  return (
    <div className="p-3 text-h2 leading-tight font-opensans flex flex-col items-center">
      <h2>Where I have delivered:</h2>

      <div className="p-3 grid grid-cols-1 sm:grid-cols-2 mt-8 gap-6 mb-6 w-full">
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img src="/assets/RGA.png" alt="Reinsurance Group of America" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img
              src="/assets/ESURE.png"
              alt="ESURE Group"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-50 flex justify-center">
          <div>
            <img
              src="/assets/PrincesTrust.png"
              alt="The Princes Trust"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img src="/assets/FCA.png" alt="The FCA" className="showcaseIcon" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img
              src="/assets/NetworkRail.png"
              alt="Network Rail"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img src="/assets/MOD.png" alt="THE MOD" className="showcaseIcon" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img
              src="/assets/Homeserve.png"
              alt="Homeserve"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-gradient-to-b from-slate-300 to-slate-100 flex justify-center">
          <div>
            <img
              src="/assets/Capgemini.png"
              alt="Capgemini"
              className="showcaseIcon"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mb-8">
        <h3 className="text-pCard font-opensans">See:</h3>
        <h2 className="text-h3 font-opensans">
          <Link to="/evidence" className="hover:font-semibold">
            Delivery evidence
          </Link>
        </h2>
      </div>
    </div>
  );
}

export default Homeorgs;

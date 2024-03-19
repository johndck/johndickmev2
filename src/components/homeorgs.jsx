function Homeorgs() {
  return (
    <div className="text-white p-3 text-h2 font-opensans flex flex-col items-center">
      <h2>I delivered for these orgs:</h2>

      <div className="grid md:w-124 mt-8 gap-6 p-3 mb-6">
        <div className="p-12 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img src="/assets/RGA.png" alt="Reinsurance Group of America" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img
              src="/assets/ESURE.png"
              alt="ESURE Group"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img
              src="/assets/PrincesTrust.png"
              alt="The Princes Trust"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img src="/assets/FCA.png" alt="The FCA" className="showcaseIcon" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img
              src="/assets/NetworkRail.png"
              alt="Network Rail"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img src="/assets/MOD.png" alt="THE MOD" className="showcaseIcon" />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
          <div>
            <img
              src="/assets/Homeserve.png"
              alt="Homeserve"
              className="showcaseIcon"
            />
          </div>
        </div>
        <div className="p-8 rounded-xl bg-slate-600 flex justify-center">
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
        <h3 className="text-h3 font-opensans">Want evidence? See:</h3>
        <h2 className="text-h3 font-opensans">Past delivery</h2>
      </div>
    </div>
  );
}

export default Homeorgs;

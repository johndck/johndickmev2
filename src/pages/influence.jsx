// add in the section components to this page
// create the components
// export the components
// import the components into this file

import data from "../influences.json";
import InfluenceCards from "../components/influencecards";

function Influence() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div className="p-3">
              <h3 className="text-h3 font-opensans">Influences</h3>
              <p className="text-p font-opensans mt-3 mb-3">
                The wisdom in these resources is unbelievable. My thinking is
                regularly influenced by the content shared.
              </p>

              <div className=" bg-slate-100 rounded-xl p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {data.map((influence) => {
                    return (
                      <InfluenceCards
                        key={influence.id}
                        influence={influence}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Influence;

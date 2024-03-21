// add in the section components to this page
// create the components
// export the components
// import the components into this file

function Focus() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div className="p-3">
              <h3 className="text-h3 font-opensans">Current focus</h3>
              <p className="text-p font-opensans mt-3 mb-3">
                Here are my q1 2024 KPIs.
              </p>
              <p className="text-p font-opensans mt-3 mb-3">
                These KPIs were set as part of a mini-retirement I started at
                the end of Summer 2023.
              </p>
              <p className="text-p font-opensans mt-3 mb-3">
                I am coming to the end of my mini-retirement having (1)
                completed a coding bootcamp, (2) sold more soccersacs on
                Soccersac.com and (3) studied the GB energy system.
              </p>

              <div className="mt-6 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mb-20">
                  <div className=" border rounded-xl flex flex-row gap-8 shadow-xl p-12">
                    <div>
                      <img
                        src="/assets/soccersac.png"
                        className="h-40 w-auto"
                      ></img>
                    </div>
                    <div className="w-2/5">
                      Generate at least 100 new sales from winter campaign.
                    </div>
                  </div>
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl p-12">
                    <div>
                      <img
                        src="/assets/accelerator.png"
                        className="h-40 w-auto"
                      ></img>
                    </div>
                    <div className="w-2/5">
                      Complete sustainability accelerator programme.
                    </div>
                  </div>
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl p-12">
                    <div>
                      <img
                        src="/assets/bootcamp.png"
                        className="h-40 w-auto"
                      ></img>
                    </div>
                    <div className="w-2/5">
                      Complete sustainability accelerator programme.
                    </div>
                  </div>
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl p-12">
                    <div>
                      <img
                        src="/assets/sunny.png"
                        className="h-40 w-auto"
                      ></img>
                    </div>
                    <div className="w-2/5">
                      Complete sustainability accelerator programme.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Focus;

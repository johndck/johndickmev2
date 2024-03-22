// add in the section components to this page
// create the components
// export the components
// import the components into this file

import { useState } from "react";
import { useEffect } from "react";

function Focus() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div
              className="p-3"
              style={{
                transition: "opacity 0.5s ease-in-out",
                opacity: opacity,
              }}
            >
              <h3 className="text-h3 font-opensans">Current focus</h3>
              <p className="text-p font-opensans mt-3 mb-3">
                Here are my q1 2024 KPIs.
              </p>
              <p className="text-p font-opensans mt-3 mb-3">
                These KPIs were set as part of a mini-retirement I started at
                the end of Summer 2023.
              </p>

              <div className="mt-6 rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-14 mb-20">
                  {/* Card 1 - Bootcamp */}
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl">
                    <div className="w-1/2">
                      <img
                        src="/assets/bootcamp.png"
                        className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                      ></img>
                    </div>
                    <div className="w-1/2 flex flex-col p-4">
                      <div className="w-12 rounded-md text-center bg-black text-white text-badgeP p-1 mb-2">
                        KPI 1
                      </div>
                      <p className="text-footerP">
                        Acquire coding skills by completing 16 week front-end
                        bootcamp.
                      </p>
                    </div>
                  </div>
                  {/* end of card 1 */}
                  {/* Card 2 - positive change accelerator*/}
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl">
                    <div className="w-1/2">
                      <img
                        src="/assets/accelerator.png"
                        className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                      ></img>
                    </div>
                    <div className="w-1/2 flex flex-col p-4">
                      <div className="w-12 rounded-md text-center bg-black text-white text-badgeP p-1 mb-2">
                        KPI 2
                      </div>
                      <p className="text-footerP">
                        Complete climate transition accelerator programme.
                      </p>
                      <p className="text-footerP mt-2">
                        Complete research into the GB Energy system.
                      </p>
                    </div>
                  </div>
                  {/* end of card 2 */}
                  {/* Card 3 - soccersac*/}
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl ">
                    <div className="w-1/2">
                      <img
                        src="/assets/soccersac.png"
                        className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                      ></img>
                    </div>
                    <div className="w-1/2 flex flex-col p-4">
                      <div className="w-12 rounded-md text-center bg-black text-white text-badgeP p-1 mb-2">
                        KPI 3
                      </div>

                      <p className="text-footerP">
                        Generate at least 100 new sales from winter campaign.
                      </p>
                    </div>
                  </div>
                  {/* end of card 3 */}
                  {/* Card 4 - soccersac*/}
                  <div className="border rounded-xl flex flex-row gap-8 shadow-xl">
                    <div className="w-1/2">
                      <img
                        src="/assets/sunny.png"
                        className="w-full h-full object-cover rounded-tl-xl rounded-bl-xl"
                      ></img>
                    </div>
                    <div className="w-1/2 flex flex-col p-4">
                      <div className="w-12 rounded-md text-center bg-black text-white text-badgeP p-1 mb-2">
                        KPI 4
                      </div>
                      <p className="text-footerP">
                        Deliver 1st iteration of product to tackle Solar related
                        consumer problem.
                      </p>
                    </div>
                  </div>
                  {/* end of card 4 */}
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

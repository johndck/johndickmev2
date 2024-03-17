// add in the section components to this page
// create the components
// export the components
// import the components into this file

import Homehero from "../components/homehero";
import Homeorgs from "../components/homeorgs";
import Homemission from "../components/homemission";
import Homeaccordian from "../components/homeaccordian";

function Home() {
  return (
    <>
      <main>
        <section>
          <div className="container border border-black sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <Homehero />
          </div>
        </section>

        <section className="bg-black">
          <div className="container border border-white sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <Homeorgs />
          </div>
        </section>

        <section>
          <div className="container border border-black sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <Homemission />
          </div>
        </section>

        <section>
          <div className="container border border-black sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <Homeaccordian />
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;

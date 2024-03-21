// add in the section components to this page
// create the components
// export the components
// import the components into this file
import ProjectCard from "../components/projectcard";
import data from "../deliveryList.json";

function Evidence() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <div className="p-3">
              <h3 className="text-h3 font-opensans">Past delivery</h3>
              <p className="text-p font-opensans mt-3 mb-3">
                I am very much a doer...here are some examples...
              </p>

              <div className="rounded-xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {data.map((card) => {
                    return <ProjectCard key={card.id} card={card} />;
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

export default Evidence;

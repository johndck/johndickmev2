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
            <div>
              <h1>Past delivery</h1>
              <p>I am very much a doer...here are some examples...</p>
            </div>

            <div className=" bg-slate-100 rounded-xl p-4">
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {data.map((card) => {
                  return <ProjectCard key={card.id} card={card} />;
                })}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Evidence;

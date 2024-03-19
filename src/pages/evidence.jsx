// add in the section components to this page
// create the components
// export the components
// import the components into this file
import ProjectCard from "../components/projectcard";

function Evidence() {
  return (
    <>
      <main>
        <section>
          <div className="container sm:mx-auto sm:max-w-4/5 md:mx-auto md:max-w-4/5 lg:mx-auto lg:max-w-4/5 xl:mx-auto xl:w-9/10 xl:max-w-1280">
            <ProjectCard />
            <p> The evidence section goes here</p>
            <p> The evidence section goes here</p>
          </div>
        </section>
      </main>
    </>
  );
}

export default Evidence;

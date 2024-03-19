function ProjectCard() {
  return (
    <div className="border">
      <div>
        <h1>Past delivery</h1>
        <p>I am very much a doer ....here are some examples:</p>
      </div>

      <div className=" bg-slate-100 rounded-xl p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          <div className="mb-4 border">John</div>
          <div className="mb-4 border">John2</div>
          <div className="mb-4 border">John3</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

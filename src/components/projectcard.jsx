function ProjectCard({ card }) {
  return (
    <>
      <div className="bg-stone-50 mb-3 rounded-xl p-6 shadow-xl font-opensans text-p">
        <div className="flex items-center py-4">
          <div>
            <img src={card.logo} alt="logo" className="h-4 w-auto" />
          </div>
          <h2 className="pl-3">{card.companyName}</h2>
        </div>
        <hr />
        <h3 className="mt-3 mb-3 font-bold">The challenge:</h3>
        <p>{card.challenge}</p>
        <h3 className="mt-3 mb-3 font-bold">My actions:</h3>
        <p>{card.actions[0]}</p>
        <p>{card.actions[1]}</p>
        <p>{card.actions[2]}</p>
        <h3 className="mt-3 mb-3 font-bold">Results:</h3>
        <ul className="list-disc pl-5">
          <li>{card.results[0]}</li>
          {card.results[1] && <li>{card.results[1]}</li>}
          {card.results[2] && <li>{card.results[2]}</li>}
        </ul>
      </div>
    </>
  );
}

export default ProjectCard;

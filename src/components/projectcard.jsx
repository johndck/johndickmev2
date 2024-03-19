function ProjectCard({ card }) {
  return (
    <>
      <div>
        <div>
          <div>
            <img src={card.logo} alt="logo" />
          </div>
        </div>
        <hr />
        <h3>The challenge:</h3>
        <p>{card.challenge}</p>
        <h3>My actions</h3>
        <p>{card.actions[0]}</p>
        <p>{card.actions[1]}</p>
        <p>{card.actions[2]}</p>
        <h3>Results</h3>
        <ul className="evidenceUL">
          <li>{card.results[0]}</li>
          {card.results[1] && <li>{card.results[1]}</li>}
          {card.results[2] && <li>{card.results[2]}</li>}
        </ul>
      </div>
    </>
  );
}

export default ProjectCard;

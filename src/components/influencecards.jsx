function InfluenceCards({ influence }) {
  return (
    <div className=" bg-stone-50 rounded-lg p-3 flex flex-col space-y-4 shadow-lg">
      <div className="">
        <h3 className="font-bold">{influence.influence}</h3>
      </div>
      <div className="">
        <p>{influence.explanation}</p>
      </div>
      <div>
        <a
          className="influencerLinkWrap"
          href={influence.linkto}
          target="_blank"
          rel="noopener noreferrer"
        >
          Find out more <span className="influencerArrow">&rarr;</span>{" "}
          {influence.linkto}
        </a>
      </div>
    </div>
  );
}

export default InfluenceCards;

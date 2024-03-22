function Homemission() {
  return (
    <div className="p-3">
      <div className="mx-auto p-3">
        <h2 className="text-h3 font-opensans">This is me 👋</h2>
        <p className="text-p font-opensans mt-3">
          For the next decade, my work will on removing blockers to the
          all-electric sustainable economy. I want sustainable economic growth
          powered by clean, renewable energy.
        </p>
        <p className="text-h3 font-opensans mt-3">Areas of focus:</p>

        <ul className="mt-3 pl-5 space-y-4">
          <li className="list-disc font-opensans">
            <span className="font-bold ">Area 1:</span> all-electric homes
            powered by clean renewable energy
          </li>
          <li className="list-disc font-opensans">
            <span className="font-bold font-opensans">Area 2:</span> barriers to
            economic growth with sustainable solutions
          </li>
          <li className="list-disc font-opensans">
            <span className="font-bold font-opensans">Area 3:</span> technology
            innovation to unlock sustainable economic growth
          </li>
        </ul>
        <div className="mt-8 flex flex-col justify-center items-center">
          <img
            src="assets/johndick.jpg"
            alt="profile"
            className="rounded-full h-64 w-auto md:h-80 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Homemission;

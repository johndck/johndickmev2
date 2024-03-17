function Homemission() {
  return (
    <div className="p-3 mb-8">
      <div className="w-11/12 mx-auto bg-slate-100 rounded-lg p-3">
        <h2 className="text-h3 font-opensans">Me here 👋</h2>
        <p className="text-p font-opensans mt-3">
          For the next decade, my work will on removing blockers to the
          all-electric economy. I want sustainable economic growth (powered by
          clean, renewable energy).
        </p>
        <p className="text-h3 font-opensans mt-3">Areas of focus:</p>

        <ul className="mt-3 pl-5 space-y-4">
          <li className="list-disc">Area 1</li>
          <li className="list-disc">Area 2</li>
          <li className="list-disc">Area 3</li>
        </ul>
        <div className="mt-3 flex flex-col justify-center items-center">
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

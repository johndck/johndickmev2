import { useState } from "react";
import { useEffect } from "react";

function Homehero() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(1);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="p-3"
      style={{ transition: "opacity 0.5s ease-in-out", opacity: opacity }}
    >
      <h1 className="text-h1 font-opensans mt-2 mb-6">Who am I?</h1>
      <p className="text-p font-opensans mt-3">
        I am{" "}
        <a
          href="https://x.com/johntmdick"
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline"
        >
          @johntmdick
        </a>{" "}
        a digital product and programme delivery manager.
      </p>

      <p className="text-p font-opensans mt-5">
        I am a doer. I operate in the detail and &quot;the clouds&quot;.
      </p>

      <p className="text-p font-opensans mt-5">
        My skills have been developed over the last 20 years from making things
        happen.
      </p>
      <p className="text-p font-opensans mt-5">
        My core skillset: <span className="font-bold">product management</span>,
        <span className="font-bold"> project & programme mgt</span> and{" "}
        <span className="font-bold">design sprint facilitation.</span>
      </p>
      <p className="text-p font-opensans mt-5 mb-12">
        I bring ideas to life quickly. I am skilled in: Figma, Webflow, HTML,
        CSS, Javascript, React and Node.js.
      </p>
    </div>
  );
}

export default Homehero;

import accData from "../accordian.json";
import { useState } from "react";
import AccordianItem from "./accordianitem";

function Homeaccordian() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="p-3 mb-8">
      <div className="w-11/12 md:w-112 mx-auto rounded-lg p-3">
        {accData.map((item) => {
          return (
            <AccordianItem
              curOpen={curOpen}
              onOpen={setCurOpen}
              key={item.id}
              id={Number(item.id)}
              title={item.title}
            >
              {item.answer}
            </AccordianItem>
          );
        })}
      </div>
    </div>
  );
}

export default Homeaccordian;

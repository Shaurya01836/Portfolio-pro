import React from "react";
import Button from "./Button";
import Cards1 from "./Cards1";

function Skills() {
  return (
    <>
      <div className="flex flex-col items-center w-full px-20 py-20 gap-10 bg-blue-50">
        <div className="flex flex-col gap-5 items-center">
          <Button content="Expertise" />
          <h1 className="font-bold text-4xl">Technical Skills</h1>
          <h1 className="font-semibold text-2xl w-3/4 text-center">
            Showcasing the technologies I have learned, including frontend
            development, backend frameworks, databases and various other tech stacks.
          </h1>
        </div>
        <div className="flex items-center gap-10">
          <Cards1
            title="Frontend Development"
            buttons={["React", "TailwindCSS", "HTML", "CSS", "JavaScript"]}
          />
          <Cards1
            title="Backend Development & Databases"
            buttons={[
              "Node JS",
              "Express JS",
              "Mongo DB",
              "Firebase",
              "MY SQL",
            ]}
          />
          <Cards1
            title="Other Technologies"
            buttons={["C", "C++", "DSA with C"]}
          />
        </div>
      </div>
    </>
  );
}

export default Skills;

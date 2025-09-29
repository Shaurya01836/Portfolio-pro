import React from "react";
import BentoCard from "./BentoCard"; // Assuming BentoCard is in the same folder

const skillsData = [
  // ... your skills data remains the same
  {
    category: "Frontend Development",
    skills: ["React", "TailwindCSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend & Databases",
    skills: ["Spring", "Mongo DB", "Firebase", "MySQL"],
  },
  {
    category: "Languages & Tools",
    skills: ["Java", "C", "C++", "DSA with C", "Github"],
  },
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 gap-10 bg-white text-black">
    

      {/* Skills Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {skillsData.map(({ category, skills }) => (
          <BentoCard key={category} className="items-start p-6">
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="bg-gray-200 text-gray-800 text-sm px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};

export default Skills;
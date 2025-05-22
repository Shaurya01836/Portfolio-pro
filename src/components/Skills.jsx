import React from "react";

const skillsData = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React", level: 60, label: "Fair" },
      { name: "TailwindCSS", level: 85, label: "Good" },
      { name: "HTML", level: 95, label: "Excellent" },
      { name: "CSS", level: 85, label: "Good" },
      { name: "JavaScript", level: 80, label: "Good" },
    ],
  },
  {
    category: "Backend Development & Databases",
    skills: [
      { name: "Spring", level: 50, label: "Fair" },
      { name: "Mongo DB", level: 70, label: "Good" },
      { name: "Firebase", level: 65, label: "Fair" },
      { name: "MY SQL", level: 80, label: "Good" },
    ],
  },
  {
    category: "Other Lang & Tools",
    skills: [
      { name: "Java", level: 80, label: "Good" },
      { name: "C", level: 85, label: "Great" },
      { name: "C++", level: 75, label: "Good" },
      { name: "DSA with C", level: 80, label: "Good" },
    ],
  },
];

function SkillBar({ skill }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1 text-sm font-medium text-white">
        <span>{skill.name}</span>
        <span>{skill.label}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-blue-500 h-4 rounded-full transition-all duration-500"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="flex flex-col items-center w-full px-8 py-16 gap-10 bg-background text-white">
      {/* Heading */}
      <div className="flex flex-col gap-4 items-center text-center max-w-3xl mx-auto">
        <h1 className="font-bold text-3xl md:text-4xl">About Me</h1>
        <p className="font-medium text-lg md:text-xl">
          I’m a passionate web developer and IT engineering student with strong
          frontend skills in React.js, Tailwind CSS, HTML, and JavaScript.
          Currently learning Java and aiming to deepen my backend development
          and DSA knowledge. I’ve gained practical experience through challenges
          like the Smart India Hackathon and Cosmocloud Hackathon, where my team
          earned recognition. Focused on mastering full-stack development and
          building impactful tech solutions.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8 w-full max-w-6xl">
        {skillsData.map(({ category, skills }) => (
          <div
            key={category}
            className="bg-gray-800 rounded-2xl shadow-lg p-6 w-80 border border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-6">{category}</h2>
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

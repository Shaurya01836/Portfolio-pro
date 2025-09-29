import React from "react";
import BentoCard from "./BentoCard";

const achievementsData = [
  // ... your achievements data remains the same
  {
    title: "Edu Chain Semester 3 Hackathon",
    description: "Secured 6th place in the Earn category out of 9000+ participants.",
    year: 2025,
  },
  {
    title: "Cosmocloud Hackathon",
    description: "Awarded 'Best in Health-Tech' at the Cosmocloud Low-Code Hackathon.",
    year: 2024,
  },
  {
    title: "Tek Connect",
    description: "Secured 2nd place in the competition.",
    year: 2024,
  },
];

const Achievements = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 md:px-20 py-20 gap-10 text-black">
      <h1 className="font-bold text-3xl lg:text-4xl">Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {achievementsData.map(({ title, description, year }, index) => (
          <BentoCard key={index} className="items-start p-6 text-left">
            <h2 className="text-xl font-bold mb-2">
              {title} <span className="text-blue-500 font-medium">({year})</span>
            </h2>
            <p className="text-gray-600">{description}</p>
          </BentoCard>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
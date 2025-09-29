import React from "react";
import { RiTrophyLine } from "@remixicon/react";

const achievementsData = [
  {
    title: "6th Place, Earn Category",
    event: "EDU Chain Semester 3 Hackathon",
    year: "2025",
    description:
      "Cryptify secured 6th place among 9000+ participants and 150 shortlisted projects, recognized for innovation in decentralized finance and practical Web3 utility.",
    icon: <RiTrophyLine />,
  },
  {
    title: "Top 4 Finalist",
    event: "Hack Quest 12-Hour Hackathon",
    year: "2025",
    description:
      "Recognized for the rapid development and presentation of the Cryptify platform.",
    icon: <RiTrophyLine />,
  },
  {
    title: "Category Winner, Health Track",
    event: "Cosmo Cloud Hackathon",
    year: "2024",
    description:
      "Awarded for AyurHerb, a virtual herbal garden with chatbot support and MongoDB integration.",
    icon: <RiTrophyLine />,
  },
  {
    title: "2nd Place",
    event: "TEK Connect",
    year: "2024",
    description:
      "Secured a top position among 50+ teams for the AyurHerb project.",
    icon: <RiTrophyLine />,
  },
];

const Achievements = () => {
  return (
    <div className="flex flex-col items-center w-full px-8  py-20 gap-10 text-black">
      {/* Section Header */}

      <h1 className="font-bold text-xl">Achievements</h1>

      {/* Achievements List */}
      <div className="w-full space-y-8">
        {achievementsData.map((achievement, index) => (
          <div
            key={index}
            className="flex items-start gap-6 p-6 border border-gray-200 rounded-3xl shadow-sm "
          >
            <div className="text-blue-500 bg-blue-50 p-3 rounded-full">
              {achievement.icon}
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-800">
                {achievement.title}
              </h2>
              <p className="text-md font-semibold text-gray-500">
                {achievement.event} ({achievement.year})
              </p>
              <p className="mt-2 text-gray-600">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

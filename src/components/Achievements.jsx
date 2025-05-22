

const achievementsData = [
  {
    title: "Edu Chain Semester 3 Hackathon",
    description:
      "secured 6th place in the Earn category of the EDU Chain Semester 3 Hackathon! 🏆 Over 9000+ participants, 150 shortlisted, and we made it to the top! 💥",
    year: 2025,
  },
  {
    title: "Cosmocloud Hackathon",
    description:
      "secured the Best in Health-Tech award at the Cosmocloud Low-Code Hackathon 2024! 🎉",
    year: 2024,
  },
  {
    title: "Tek Connect",
    description: "secured 2nd place!",
    year: 2024,
  },
];

function Achievements() {
  return (
    <div className="flex flex-col items-center w-full px-8 py-16 gap-8 bg-background text-white">
      <h1 className="font-bold text-3xl md:text-4xl mb-8">Achievements</h1>

      <div className="flex flex-col gap-6 max-w-4xl w-full">
        {achievementsData.map(({ title, description, year }, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md p-6 border border-blue-500"
          >
            <h2 className="text-xl font-semibold mb-2">
              {title}{" "}
              <span className="text-blue-400 font-normal">({year})</span>
            </h2>
            <p className="text-gray-300">{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Achievements;

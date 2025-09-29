import React from "react";

// Skills data grouped by category
const skillsData = {
  "Languages & Frameworks": [
    {
      name: "Java",
      percentage: 75,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    },
    {
      name: "Spring Boot",
      percentage: 60,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
    },
    {
      name: "React.js",
      percentage: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    },
     {
      name: "HTML",
      percentage: 95,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
    },
    
    {
      name: "Tailwind CSS",
      percentage: 90,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    },
  ],
  "Databases & Tools": [
    {
      name: "MySQL",
      percentage: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      percentage: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Git",
      percentage: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      percentage: 85,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    },
    {
      name: "Postman",
      percentage: 80,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
    },
  ],
};

const Skills = () => {
  return (
    <div className="flex flex-col items-center w-full px-8 py-20 gap-10 bg-white text-black">
      <h1 className="font-bold text-xl">Skills & Expertise</h1>

      <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div
            key={category}
            className="border border-gray-200 rounded-3xl p-6 shadow-sm "
          >
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              {category}
            </h2>
            <div className="space-y-6">
              {skills.map(({ name, percentage, icon }) => (
                <div key={name} className="w-full">
                  <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-3">
                      <img
                        src={icon}
                        alt={`${name} logo`}
                        className="w-6 h-6"
                      />
                      <span className="font-semibold text-md text-gray-700">
                        {name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-600">
                      {percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

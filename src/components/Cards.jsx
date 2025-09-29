import React from "react";

function Cards({
  title,
  description,
  techStack = [],
  liveDemo,
  image,
  className,
}) {
  return (
    <a
      href={liveDemo}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-white text-black w-full rounded-3xl  shadow-sm border border-gray-200 flex flex-col ${className}`}
    >
      {/* Image Container */}
      <div className="w-full h-48 bg-gray-100 rounded-3xl mb-4">
        <img
          className="w-full h-full object-cover rounded-t-3xl"
          src={image}
          alt={`${title} project screenshot`}
        />
      </div>

      {/* Text Content */}
      <div className="flex flex-col flex-grow text-left p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-600 mt-1 text-sm flex-grow">{description}</p>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-4 p-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-200 text-sm px-3 py-1 rounded-full text-gray-800"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  );
}

export default Cards;
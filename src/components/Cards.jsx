import React from "react";
import { RiExternalLinkLine, RiCodeBoxLine } from "@remixicon/react";

function Cards({ title, description, techStack = [], liveDemo, viewCode }) {
  return (
    <div className="bg-[#0F1117] text-white w-80 lg:w-[420px] rounded-xl p-4 shadow-md border border-gray-800">
    
      <div className="w-full h-40 bg-gray-800 rounded-lg flex items-center justify-center">
        <span className="text-gray-500">🖼 Image</span>
      </div>

     
      <div className="mt-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-400 mt-1 text-sm">{description}</p>
      </div>

    
      <div className="flex flex-wrap gap-2 mt-4">
        {techStack.map((tech, index) => (
          <span
            key={index}
            className="bg-gray-700 text-sm px-3 py-1 rounded-full text-gray-300"
          >
            {tech}
          </span>
        ))}
      </div>

     
      <div className="flex gap-3 mt-5">
        {liveDemo && (
          <a
            href={liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white text-black hover:bg-blue-500 hover:text-white transition px-4 py-2 rounded-md text-sm font-medium"
          >
            <RiExternalLinkLine size={18} />
            Live Demo
          </a>
        )}
        {viewCode && (
          <a
            href={viewCode}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1C1F26] hover:bg-blue-600 px-4 py-2 rounded-md text-sm font-medium text-white border border-gray-700"
          >
            <RiCodeBoxLine size={18} />
            View Code
          </a>
        )}
      </div>
    </div>
  );
}

export default Cards;

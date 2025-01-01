import React from "react";

function Cards1({ title, buttons = [] }) {
  return (
    <div className="bg-white min-h-40 w-96 rounded-xl shadow-lg px-4 py-6 flex flex-col justify-evenly gap-4">
      <h1 className="font-bold">{title}</h1>

      <div className="flex flex-wrap gap-2">
        {buttons.map((buttonText, index) => (
          <button
            key={index} className="bg-blue-100 text-blue-500 hover:bg-customorange hover:text-white px-4 py-1 rounded-3xl font-medium"
           
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cards1;

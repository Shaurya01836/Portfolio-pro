import React from "react";
import { RiArrowRightUpLine } from "@remixicon/react";

function Cards({ title, description, buttons = [], link }) {
  return (
    <div className="bg-white min-h-52 w-96 rounded-xl shadow-lg px-4 py-6 flex flex-col justify-between gap-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h1 className="font-bold">{title}</h1>
          <a href={link}>
            <RiArrowRightUpLine size={24} color="black" className="my-icon" />
          </a>
        </div>
        <h1 className="font-semibold text-gray-700">{description}</h1>
      </div>
      <div className="flex gap-2">
        {buttons.map((buttonText, index) => (
          <button
            key={index}
            className="bg-blue-100 text-blue-500 hover:bg-customorange hover:text-white px-4 py-1 rounded-3xl font-medium"
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Cards;

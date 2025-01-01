import React from "react";

function Button({ content }) {
  return (
    <button className="bg-blue-500 text-white hover:bg-customorange px-4 py-2 rounded-3xl font-semibold ">
      {content}
    </button>
  );
}

export default Button;

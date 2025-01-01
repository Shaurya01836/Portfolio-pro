import React from "react";
import Button from "./Button";

function Header() {
  return (
    <>
      <div className="flex flex-col items-center  w-full px-20 py-20 gap-10 bg-blue-50">
        <div className="flex flex-col gap-5 items-center">
          <Button content="Information Technology Student & Developer" />
          <h1 className="text-8xl font-bold text-black">Building the Future</h1>
          <h1 className="text-8xl font-bold text-blue-500">
            One Line at a Time
          </h1>
          <h1 className="text-2xl font-semibold w-2/3 text-center">
            Second year Information Technology student passionate about creating
            innovative solutions through clean, efficient code.
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          <Button content="View Project" />
          <button className="bg-transparent text-black hover:bg-customorange px-4 py-2 rounded-3xl font-semibold border-2 border-black hover:text-white">
            <a href="https://drive.google.com/file/d/1ZyAvbkWqSfofFPA51vDeqzBwO7ateIpM/view?usp=sharing">
              View Resume
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;

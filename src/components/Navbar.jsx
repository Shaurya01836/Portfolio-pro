import React from "react";
import { RiCodeSSlashFill } from "@remixicon/react";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center py-5 px-20 text-black ">
        <div className="text-2xl flex gap-2 items-center">
          <RiCodeSSlashFill
            size={36} // set custom `width` and `height`
            color="black" // set `fill` color
            className="my-icon" // add custom class name
          />
          <h1 className=" font-bold">Shaurya's Portfolio</h1>
        </div>
        <div className="text-xl flex gap-5 items-center font-semibold">
          <a className="hover:underline" href="">
            Home
          </a>
          <a className="hover:underline" href="">
            Experience
          </a>
          <a className="hover:underline" href="">
            Projects
          </a>
          <a className="hover:underline" href="">
            Contact
          </a>
        </div>
        <div className="">
          <Button content="Get in touch" />
        </div>
      </div>
    </>
  );
}

export default Navbar;

import React from "react";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
} from "@remixicon/react";

function Footer() {
  return (
    <>
      <div className="flex w-full justify-between items-center py-8 px-20 text-blue-500  font-semibold ">
        <h1 className="hover:text-customorange">
          © 2025 Shaurya Upadhyay - All rights reserved.
        </h1>
        <div className="flex items-center gap-5 hover:text-customorange">
          <a href="https://www.linkedin.com/in/this-is-shaurya-upadhyay">
            <RiLinkedinLine
              size={28}
              // color="black"
              className="my-icon cursor-pointer"
            />
          </a>
          <a href="https://github.com/Shaurya01836">
            <RiGithubLine size={28} className="my-icon cursor-pointer" />
          </a>
          <a href="https://x.com/shaurya01836">
            <RiTwitterLine size={28} className="my-icon cursor-pointer" />
          </a>
          <a href="https://www.instagram.com/shaurya_mnu/profilecard/?igsh=d21qb2E1cDZ6Yjdr">
            <RiInstagramLine size={28} className="my-icon cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;

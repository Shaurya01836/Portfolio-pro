import React from "react";
import {
  RiInstagramLine,
  RiLinkedinLine,
  RiGithubLine,
  RiTwitterLine,
} from "@remixicon/react";

function Footer() {
  return (
    <div className="flex flex-col md:flex-row w-full justify-between items-center py-6 px-6 md:px-20 text-blue-500 font-semibold text-center md:text-left">
      
      <h1 className="hover:text-customorange transition-colors duration-300">
        © 2025 Shaurya Upadhyay - All rights reserved.
      </h1>

    
      <div className="flex items-center gap-4 md:gap-5 mt-4 md:mt-0">
        <a href="https://www.linkedin.com/in/this-is-shaurya-upadhyay" target="_blank" rel="noopener noreferrer">
          <RiLinkedinLine size={28} className="cursor-pointer hover:text-customorange transition-colors duration-300" />
        </a>
        <a href="https://github.com/Shaurya01836" target="_blank" rel="noopener noreferrer">
          <RiGithubLine size={28} className="cursor-pointer hover:text-customorange transition-colors duration-300" />
        </a>
        <a href="https://x.com/shaurya01836" target="_blank" rel="noopener noreferrer">
          <RiTwitterLine size={28} className="cursor-pointer hover:text-customorange transition-colors duration-300" />
        </a>
        <a href="https://www.instagram.com/shaurya_mnu/profilecard/?igsh=d21qb2E1cDZ6Yjdr" target="_blank" rel="noopener noreferrer">
          <RiInstagramLine size={28} className="cursor-pointer hover:text-customorange transition-colors duration-300" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

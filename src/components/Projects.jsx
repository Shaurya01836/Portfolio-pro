import React from "react";
import Button from "./Button";
import Cards from "./Cards";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-center w-full px-20 py-20 gap-10 bg-background text-white">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-2xl lg:text-4xl">Recent Projects</h1>
          <h1 className="font-semibold text-xl w-full md:text-2xl md:w-3/4 text-center">
            A showcase of my latest work, featuring web applications and
            technical solutions.
          </h1>
        </div>
        <div className="md:flex lg:flex-row flex flex-col items-center gap-10">
          <Cards
            title="Cryptify"
            description="Cryptify is a next-generation Web3 payment dApp."
            techStack={["React", "Tailwind CSS", "Solidity"]}
            liveDemo="https://cryptify-defi.vercel.app/"
            viewCode="https://github.com/dhruv457457/EduChain_Web-3-Project"
          />
          <Cards
            title="Virtual herbal garden"
            description="Virtual Herbal Garden designed to help users explore a variety of herbs, their uses, and benefits."
            techStack={["React", "Firebase", "MongoDB", "CosmoCloud"]}
            liveDemo="https://ayurherb.vercel.app/"
            viewCode="https://github.com/Shaurya01836/AyurHerb"
          />

          <Cards
            title="Ache wale bhaiya"
            description="Ache Wale Bhaiya is an e-commerce platform dedicated to selling both new tech products and second-hand tech gadgets."
            techStack={["React", "Firebase", "Tailwind CSS"]}
            liveDemo="https://ache-wale-bhaiya.vercel.app/"
            viewCode="https://github.com/Shaurya01836/ache_wale_bhaiya"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;

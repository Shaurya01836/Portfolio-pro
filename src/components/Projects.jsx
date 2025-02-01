import React from "react";
import Button from "./Button";
import Cards from "./Cards";

function Projects() {
  return (
    <>
      <div className="flex flex-col items-center w-full px-20 py-20 gap-10 bg-blue-100">
        <div className="flex flex-col gap-5 items-center">
          <Button content="Featured Work" />
          <h1 className="font-bold text-2xl lg:text-4xl">Recent Projects</h1>
          <h1 className="font-semibold text-xl w-full md:text-2xl md:w-3/4 text-center">
            A showcase of my latest work, featuring web applications and
            technical solutions.
          </h1>
        </div>
        <div className="md:flex lg:flex-row flex flex-col items-center gap-10">
          <Cards
            title="Virtual herbal garden"
            description="Virtual Herbal Garden designed to help users explore a variety of herbs, their uses, and benefits."
            link="https://herb-sphere.vercel.app/"
            buttons={["React", "Firebase", "Mongo DB"]}
          />
          <Cards
            title="Ache wale bhaiya"
            description="Ache Wale Bhaiya is an e-commerce platform dedicated to selling both new tech products and second-hand tech gadgets."
            link="https://ache-wale-bhaiya.vercel.app/"
            buttons={["React", "Firebase", "Tailwind CSS"]}
          />
          <Cards
            title="Media Downloader"
            description="Media Downloader is an application that allows users to download media from various platforms."
            link="https://media-downloader-black.vercel.app/"
            buttons={["React", "Tailwind CSS"]}
          />
        </div>
      </div>
    </>
  );
}

export default Projects;

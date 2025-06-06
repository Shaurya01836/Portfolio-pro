import Button from "./Button";
import { RiLinkedinLine } from "@remixicon/react";

function Contact() {
  return (
    <>
      <div className="flex flex-col items-center w-full px-20 py-20 gap-10 bg-background text-white">
        <div className="flex flex-col gap-5 items-center">
          <h1 className="font-bold text-2xl md:text-4xl">Let's Connect</h1>
          <h1 className="font-semibold text-xl md:text-2xl md:w-3/4 text-center">
            I'm always open to new opportunities and interesting projects. Feel
            free to reach out!
          </h1>
        </div>
        <div className="flex gap-5 items-center">
          <Button content="Send Email" />
          <button className="bg-transparent text-white hover:bg-customorange px-4 py-2 rounded-3xl font-semibold border-2 border-white hover:text-white">
            <a
              href="https://www.linkedin.com/in/this-is-shaurya-upadhyay"
              className="flex items-center gap-2"
            >
              <RiLinkedinLine size={20} className="my-icon cursor-pointer" />
              Connect on LinkedIn
            </a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;

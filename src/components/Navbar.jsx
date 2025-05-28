import { useState } from "react";
import { RiMenu3Line, RiCloseLine } from "@remixicon/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md fixed w-full backdrop-blur-3xl bg-background/85">
      <div className="flex justify-between items-center py-5 px-6 md:px-20 text-white ">
        {/* Logo Section */}
        <div className="text-2xl flex gap-2 items-center">
          <p className="text-primary">"</p>
          <h1 className="font-bold">Shaurya</h1>
          <p className="text-primary">"</p>
        </div>

        {/* Desktop Nav Links */}

        <div className="hidden md:flex">
          <div className="hidden md:flex gap-5 items-center text-xl font-semibold text-primary">
            <a className="hover:text-customorange" href="#home">
              Home
            </a>
            <a className="hover:text-customorange" href="#projects">
              Projects
            </a>
            <a className="hover:text-customorange" href="#about">
              About Me
            </a>
            <a className="hover:text-customorange" href="#achievements">
              Achievements
            </a>
            <a className="hover:text-customorange" href="#contact">
              Connect
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <RiCloseLine size={28} /> : <RiMenu3Line size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-5 bg-background text-primary">
          <a className="hover:underline" href="#home">
            Home
          </a>
          <a className="hover:underline" href="#projects">
            Projects
          </a>
          <a className="hover:underline" href="#about">
            About Me
          </a>
          <a className="hover:underline" href="#achievements">
            Achievements
          </a>
          <a className="hover:underline" href="#contact">
            Connect
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

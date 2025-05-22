import  { useState } from "react";
import { RiCodeSSlashFill, RiMenu3Line, RiCloseLine } from "@remixicon/react";
import Button from "./Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="flex justify-between items-center py-5 px-6 md:px-20 text-white bg-background">
        {/* Logo Section */}
        <div className="text-2xl flex gap-2 items-center">
          <RiCodeSSlashFill size={36} color="blue" />
          <h1 className="font-bold">Shaurya</h1>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-5 items-center text-xl font-semibold text-primary">
          <a className="hover:underline" href="#">Home</a>
          <a className="hover:underline" href="#">Experience</a>
          <a className="hover:underline" href="#">Projects</a>
          <a className="hover:underline" href="#">Contact</a>
        </div>

        {/* Button for Desktop */}
        <div className="hidden md:block">
          <Button content="Contact" />
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
        <div className="md:hidden flex flex-col items-center gap-4 py-5 bg-gray-100">
          <a className="hover:underline" href="#">Home</a>
          <a className="hover:underline" href="#">Experience</a>
          <a className="hover:underline" href="#">Projects</a>
          <a className="hover:underline" href="#">Contact</a>
          <Button content="Get in touch" />
        </div>
      )}
    </nav>
  );
}

export default Navbar;

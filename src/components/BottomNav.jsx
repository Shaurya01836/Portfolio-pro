import React from "react";
import {
  RiHome2Line,
  RiHome2Fill,
  RiBriefcaseLine,
  RiBriefcaseFill,
  RiLightbulbFlashLine,
  RiLightbulbFlashFill,
  RiTrophyLine,
  RiTrophyFill,
  RiBuildingLine,
  RiBuildingFill,
} from "@remixicon/react";

// A small, reusable component for each navigation item
const NavItem = ({ href, icon, activeIcon, label, isActive }) => (
  <a
    href={href}
    className={`flex items-center justify-center h-10 transition-all duration-300 ease-in-out ${
      isActive
        ? "bg-blue-100 text-blue-600 rounded-full px-4 gap-2"
        : "text-gray-500 hover:text-blue-600 w-12"
    }`}
  >
    {/* Conditionally render filled or outline icon */}
    {isActive ? activeIcon : icon}
    
    {/* Conditionally render the label only when active */}
    {isActive && <span className="text-sm font-medium">{label}</span>}
  </a>
);

const BottomNav = ({ activeSections }) => {
  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-sm bg-white/80 backdrop-blur-sm border border-gray-200 z-50 rounded-full shadow-md">
      <div className="flex justify-around items-center h-14 px-2">
        <NavItem
          href="#home"
          icon={<RiHome2Line size={24} />}
          activeIcon={<RiHome2Fill size={24} />}
          label="Home"
          isActive={activeSections.home}
        />
        <NavItem
          href="#projects"
          icon={<RiBriefcaseLine size={24} />}
          activeIcon={<RiBriefcaseFill size={24} />}
          label="Projects"
          isActive={activeSections.projects}
        />
        <NavItem
          href="#skills" // Make sure this href matches your section ID
          icon={<RiLightbulbFlashLine size={24} />}
          activeIcon={<RiLightbulbFlashFill size={24} />}
          label="Skills"
          isActive={activeSections.skills} 
        />
        <NavItem
          href="#experience"
          icon={<RiBuildingLine size={24} />}
          activeIcon={<RiBuildingFill size={24} />}
          label="Experience"
          isActive={activeSections.experience}
        />
        <NavItem
          href="#achievements"
          icon={<RiTrophyLine size={24} />}
          activeIcon={<RiTrophyFill size={24} />}
          label="Awards"
          isActive={activeSections.achievements}
        />
      </div>
    </nav>
  );
};

export default BottomNav;
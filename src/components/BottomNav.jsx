import React, { useState, useEffect } from "react";
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
const NavItem = ({ href, icon, activeIcon, label, isActive }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  
  // Handlers now show/hide the tooltip immediately upon hover/unhover
  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  // No useEffect cleanup is needed since we removed the setTimeout

  return (
    <a
      href={href}
      // Apply relative positioning for the absolute tooltip
      className={`relative flex items-center justify-center w-12 h-12 transition-colors duration-300 ease-in-out cursor-pointer ${
        // Only change icon color when active
        isActive ? "text-blue-600" : "text-gray-500 hover:text-blue-600"
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Tooltip Label ABOVE the icon - Immediate display on hover */}
      <span 
        className={`absolute bottom-full mb-3 px-3 py-1 text-xs font-medium text-white bg-gray-800 rounded-lg shadow-xl whitespace-nowrap transition-all duration-300 ease-out 
          ${showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}
        `}
      >
          {label}
      </span>

      {/* Conditionally render filled or outline icon */}
      {isActive ? activeIcon : icon}
    </a>
  );
};

const BottomNav = ({ activeSections }) => {
  return (
    <nav 
      // Glass Morphism Effect: Reduced opacity (bg-white/50), increased blur, lighter border, enhanced shadow
      className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[95%] max-w-md bg-white/50 backdrop-blur-2xl border border-white/80 z-50 rounded-full shadow-2xl shadow-black/20"
    >
      <div className="flex justify-around items-center h-16 px-2">
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
          href="#skills"
          icon={<RiLightbulbFlashLine size={24} />}
          activeIcon={<RiLightbulbFlashFill size={24} />}
          label="Skills"
          // Bug Fix: Uses 'about' ref key from App.jsx
          isActive={activeSections.about} 
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
          label="Acheivements"
          isActive={activeSections.achievements}
        />
      </div>
    </nav>
  );
};

export default BottomNav;
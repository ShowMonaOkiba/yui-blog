
import React from 'react';

interface NavButtonProps {
  label: string;
  onClick: () => void;
  color: 'blue' | 'purple' | 'green';
  isActive: boolean;
}

const colorSchemes = {
  blue: {
    bg: 'from-blue-400 to-blue-600',
    border: 'border-blue-700',
    text: 'text-white',
    activeBg: 'from-blue-600 to-blue-800',
  },
  purple: {
    bg: 'from-purple-400 to-purple-600',
    border: 'border-purple-700',
    text: 'text-white',
    activeBg: 'from-purple-600 to-purple-800',
  },
  green: {
    bg: 'from-lime-400 to-lime-600',
    border: 'border-lime-700',
    text: 'text-gray-800',
    activeBg: 'from-lime-600 to-lime-800',
  },
};

const NavButton: React.FC<NavButtonProps> = ({ label, onClick, color, isActive }) => {
  const scheme = colorSchemes[color];

  return (
    <button
      onClick={onClick}
      className={`px-8 py-2 font-bold rounded-full border-2 transform transition-transform duration-150 ${scheme.text} ${scheme.border} ${isActive ? scheme.activeBg : scheme.bg} 
      shadow-[2px_2px_2px_rgba(0,0,0,0.5)] 
      border-t-white/50 border-l-white/50 border-r-black/50 border-b-black/50
      hover:scale-105 active:scale-95 active:shadow-inner bg-gradient-to-b`}
    >
      {label}
    </button>
  );
};

export default NavButton;


import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  currentTheme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ currentTheme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-portfolio-card/80 backdrop-blur-md border border-white/10 text-portfolio-light/70 hover:text-portfolio-accent transition-all duration-300 hover:shadow-md hover:shadow-portfolio-accent/20"
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {currentTheme === 'dark' ? (
        <Sun className="w-5 h-5" />
      ) : (
        <Moon className="w-5 h-5" />
      )}
    </button>
  );
};

export default ThemeToggle;

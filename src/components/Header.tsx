import React from 'react';
import { NavTab } from '../types';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  activeTab: NavTab;
  onSelectTab: (tab: NavTab) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab }) => {
  const navItems: { id: NavTab; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="pt-6 pb-4 text-center">
      <img
        src={personalInfo.avatar}
        alt={personalInfo.name}
        onError={(e) => {
          // Fallback to original image file name if needed
          const target = e.currentTarget;
          if (!target.dataset.tried) {
            target.dataset.tried = 'true';
            target.src = '/WhatsApp Image 2026-08-07 at 11.55.31 PM.jpeg';
          }
        }}
        className="w-[150px] h-[150px] rounded-full mx-auto object-cover shadow-md border-2 border-white/60"
        style={{ width: '150px', height: '150px', borderRadius: '50%', display: 'block', margin: '15px auto' }}
      />

      <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900 mb-4">
        <em>{personalInfo.name}</em>
      </h1>

      <nav aria-label="Main Navigation" className="my-4">
        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-4 px-4 max-w-xl mx-auto">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onSelectTab(item.id);
                  window.location.hash = item.id;
                }}
                className={`px-4 py-1.5 rounded text-base font-medium transition-all ${
                  isActive
                    ? 'bg-neutral-900 text-white shadow-sm'
                    : 'text-neutral-800 hover:text-neutral-950 hover:bg-black/10 underline decoration-neutral-500/50 underline-offset-4'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>
    </header>
  );
};

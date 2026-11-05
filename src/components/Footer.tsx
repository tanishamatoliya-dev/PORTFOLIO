import React from 'react';
import { personalInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-12 py-8 text-center border-t border-black/10 text-neutral-700 text-sm">
      <p>© {personalInfo.copyrightYear} {personalInfo.name}. All rights reserved.</p>
    </footer>
  );
};

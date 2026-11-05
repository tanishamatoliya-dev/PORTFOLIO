import React from 'react';
import { homeData } from '../data/portfolioData';

export const HomeView: React.FC = () => {
  return (
    <main className="space-y-6">
      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">{homeData.welcomeGreeting}</h2>
        <div className="space-y-3 text-neutral-800 leading-relaxed text-base">
          {homeData.welcomeText.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My areas of interest</h2>
        <p className="text-neutral-750 mb-3">I am particularly interested in the following domains:</p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 pl-5 list-disc">
          {homeData.areasOfInterest.map((interest, idx) => (
            <li key={idx} className="py-0.5">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Career Goal 🎯</h2>
        <p className="text-neutral-800 leading-relaxed">{homeData.careerGoal}</p>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Learning Philosophy</h2>
        <p className="text-neutral-800 leading-relaxed">{homeData.learningPhilosophy}</p>
      </section>
    </main>
  );
};

import React from 'react';
import { skillsData } from '../data/portfolioData';

export const SkillsView: React.FC = () => {
  return (
    <main className="space-y-6">
      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-2">My Technical Skills</h2>
        <p className="text-neutral-800 leading-relaxed">{skillsData.intro}</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.categories.map((category, idx) => (
          <section
            key={idx}
            className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-bold text-neutral-900 mb-3 border-b border-black/10 pb-2">
                {category.title}
              </h2>
              <ul className="space-y-1.5 pl-5 list-disc text-neutral-800">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="leading-relaxed">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
};

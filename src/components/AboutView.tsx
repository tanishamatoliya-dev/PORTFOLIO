import React from 'react';
import { aboutData } from '../data/portfolioData';

export const AboutView: React.FC = () => {
  return (
    <main className="space-y-6">
      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">About Me</h2>
        <div className="space-y-3 text-neutral-800 leading-relaxed">
          {aboutData.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-4">Education</h2>
        <div className="space-y-6 divide-y divide-black/10">
          {aboutData.education.map((edu, idx) => (
            <div key={idx} className={idx > 0 ? 'pt-4' : ''}>
              <h3 className="text-lg font-bold text-neutral-900">{edu.institution}</h3>
              <p className="text-neutral-800 mt-1">
                <strong>{edu.degree}</strong>
                <br />
                <span className="text-neutral-600 text-sm">{edu.period}</span>
              </p>
              {edu.description && (
                <p className="text-neutral-700 mt-2 leading-relaxed text-sm">
                  {edu.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Interests</h2>
        <p className="text-neutral-750 mb-3">
          My interests are mainly focused on the intersection of software development, Artificial Intelligence, and practical problem-solving.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 pl-5 list-disc">
          {aboutData.interests.map((interest, idx) => (
            <li key={idx} className="py-0.5">
              {interest}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Learning Journey</h2>
        <div className="space-y-3 text-neutral-800 leading-relaxed">
          {aboutData.learningJourney.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Strengths</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-neutral-800 pl-5 list-disc">
          {aboutData.strengths.map((strength, idx) => (
            <li key={idx} className="py-0.5">
              {strength}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">My Future Goals</h2>
        <div className="space-y-3 text-neutral-800 leading-relaxed">
          {aboutData.futureGoals.map((goal, idx) => (
            <p key={idx}>{goal}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

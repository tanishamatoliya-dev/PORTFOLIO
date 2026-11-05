import React from 'react';
import { projectsData } from '../data/portfolioData';

export const ProjectsView: React.FC = () => {
  return (
    <main className="space-y-6">
      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">My Projects 🚀</h2>
        <div className="space-y-2 text-neutral-800 leading-relaxed">
          {projectsData.intro.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        {projectsData.projects.map((project) => (
          <article
            key={project.id}
            className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5"
          >
            <h2 className="text-xl font-bold text-neutral-900 mb-2">{project.title}</h2>
            
            <div className="space-y-2 text-neutral-800 mb-4 leading-relaxed">
              {project.description.map((desc, dIdx) => (
                <p key={dIdx}>{desc}</p>
              ))}
            </div>

            <h3 className="text-lg font-semibold text-neutral-900 mb-2">Key Highlights</h3>
            <ul className="list-disc pl-5 space-y-1 text-neutral-800 mb-4">
              {project.highlights.map((highlight, hIdx) => (
                <li key={hIdx}>{highlight}</li>
              ))}
            </ul>

            <div className="pt-2 border-t border-black/10 text-sm">
              <strong className="text-neutral-900">Technologies: </strong>
              <span className="text-neutral-700">
                {project.technologies.join(', ')}
              </span>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">Hackathons & Technical Events 🏆</h2>
        <ul className="space-y-3 pl-5 list-disc text-neutral-800">
          {projectsData.hackathons.map((event, idx) => (
            <li key={idx} className="leading-relaxed">
              <strong className="text-neutral-900">{event.name} - {event.year}</strong> - {event.description}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

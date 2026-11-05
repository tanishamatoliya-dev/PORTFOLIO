import React from 'react';
import { contactData } from '../data/portfolioData';

export const ContactView: React.FC = () => {
  return (
    <main className="space-y-6">
      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-2xl font-bold text-neutral-900 mb-3">Contact Me</h2>
        <div className="space-y-2 text-neutral-800 leading-relaxed">
          {contactData.intro.map((text, idx) => (
            <p key={idx}>{text}</p>
          ))}
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">Contact Information</h2>
        <div className="space-y-2 text-neutral-800">
          <p>
            <strong>Name:</strong> {contactData.name}
          </p>
          <p>
            <strong>Location:</strong> {contactData.location}
          </p>
          <p>
            <strong>Email:</strong>{' '}
            <a
              href={`mailto:${contactData.email}`}
              className="text-blue-700 hover:text-blue-900 underline underline-offset-2"
            >
              {contactData.email}
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">Connect With Me 🌐</h2>
        <div className="space-y-2 text-neutral-800">
          <p>
            <strong>LinkedIn:</strong>{' '}
            <a
              href={contactData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline underline-offset-2"
            >
              LinkedIn Profile
            </a>
          </p>
          <p>
            <strong>Github:</strong>{' '}
            <a
              href={contactData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 underline underline-offset-2"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">Languages</h2>
        <ul className="space-y-1.5 pl-5 list-disc text-neutral-800">
          {contactData.languages.map((lang, idx) => (
            <li key={idx}>
              <strong>{lang.name}</strong> - {lang.level}
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-white/80 backdrop-blur-xs p-6 rounded-lg shadow-xs border border-black/5">
        <h2 className="text-xl font-bold text-neutral-900 mb-3">Thank You! 😊</h2>
        <div className="space-y-3 text-neutral-800 leading-relaxed">
          {contactData.thankYouMessage.map((msg, idx) => (
            <p key={idx}>{msg}</p>
          ))}
        </div>
      </section>
    </main>
  );
};

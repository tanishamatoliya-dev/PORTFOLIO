import React, { useState, useEffect } from 'react';
import { NavTab } from './types';
import { pageThemes } from './data/portfolioData';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomeView } from './components/HomeView';
import { AboutView } from './components/AboutView';
import { SkillsView } from './components/SkillsView';
import { ProjectsView } from './components/ProjectsView';
import { ContactView } from './components/ContactView';

export const App: React.FC = () => {
  const getTabFromHash = (): NavTab => {
    const hash = window.location.hash.replace('#', '').toLowerCase();
    if (hash === 'about') return 'about';
    if (hash === 'skills') return 'skills';
    if (hash === 'projects') return 'projects';
    if (hash === 'contact' || hash === 'contacts') return 'contact';
    return 'home';
  };

  const [activeTab, setActiveTab] = useState<NavTab>(getTabFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setActiveTab(getTabFromHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const theme = pageThemes[activeTab];
    document.title = theme.title;
    document.body.style.backgroundColor = theme.bg;
  }, [activeTab]);

  const handleSelectTab = (tab: NavTab) => {
    setActiveTab(tab);
    window.location.hash = tab;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300"
      style={{ backgroundColor: pageThemes[activeTab].bg }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-6">
        <Header activeTab={activeTab} onSelectTab={handleSelectTab} />

        <div className="mt-4">
          {activeTab === 'home' && <HomeView />}
          {activeTab === 'about' && <AboutView />}
          {activeTab === 'skills' && <SkillsView />}
          {activeTab === 'projects' && <ProjectsView />}
          {activeTab === 'contact' && <ContactView />}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default App;

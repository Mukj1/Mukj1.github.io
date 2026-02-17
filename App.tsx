import { useState, useEffect } from 'react';
import { Sidebar } from './components/Sidebar';
import { Navigation } from './components/Navigation';
import { About } from './components/views/About';
import { Research } from './components/views/Research';
import { Log } from './components/views/Log';
import { View } from './types';

function App() {
  const [currentView, setCurrentView] = useState<View>('about');
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize Theme from LocalStorage or System Preference
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle Theme Function
  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return newMode;
    });
  };

  const renderContent = () => {
    switch (currentView) {
      case 'about': return <About />;
      case 'research': return <Research />;
      case 'log': return <Log />;
      default: return <About />;
    }
  };

  // Determine container width class based on view
  const getContainerWidth = () => {
    if (currentView === 'research') return 'max-w-[1800px]'; // Significantly wider for Research
    if (currentView === 'log') return 'max-w-7xl';
    return 'max-w-5xl';
  };

  return (
    // Outer container: 
    // Mobile: min-h-screen (allows scrolling), flex-col
    // Desktop: h-screen (fixed height), flex-row, overflow-hidden (independent scroll areas)
    <div className="min-h-screen lg:h-screen w-full flex flex-col lg:flex-row font-sans text-slate-800 dark:text-slate-200 bg-slate-50 dark:bg-slate-950 selection:bg-violet-100 selection:text-violet-900 dark:selection:bg-violet-900 dark:selection:text-violet-100 lg:overflow-hidden transition-colors duration-300">
      
      {/* Sidebar: Now accepts theme props */}
      <Sidebar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      {/* Main: Independent scroll container only on Desktop */}
      <main className="flex-1 w-full flex flex-col min-w-0 relative lg:h-full lg:overflow-y-auto scroll-smooth">
        
        {/* Navigation sticks to the top of this scrolling container */}
        <Navigation currentView={currentView} onChangeView={setCurrentView} />

        <div className={`flex-1 px-6 lg:px-8 pb-24 mx-auto w-full pt-4 lg:pt-8 transition-all duration-700 ease-in-out ${getContainerWidth()}`}>
          {renderContent()}
        </div>

      </main>
    </div>
  );
}

export default App;

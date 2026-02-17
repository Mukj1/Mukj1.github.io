import React, { useEffect } from 'react';
import { PROFILE, FOCUS_AREAS, RESEARCH_SKILLS, SOCIAL_LINKS } from '../../constants';
import { Building2, MapPin, FileText } from 'lucide-react';

export const About: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('mapmyvisitors-container');
    if (!container || document.getElementById('mapmyvisitors')) return;

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.id = 'mapmyvisitors';
    script.src = 'https://mapmyvisitors.com/map.js?cl=ffffff&w=830&t=tt&d=PvHeIWyOmsy95B_rZwGEXl6IZLRQgXuZLUgUoRH-Nok&co=d4caed&cmo=75cb02&cmn=363fe0&ct=808080';
    container.appendChild(script);
  }, []);

  return (
    <div className="space-y-20 animate-slide-in">
      
      {/* Mobile Only: Profile Details & Socials (Moved from Sidebar) */}
      <div className="lg:hidden space-y-6 border-b border-slate-100 dark:border-slate-800 pb-10">
        <div className="space-y-2">
            <h2 className="text-xl font-serif text-slate-900 dark:text-slate-100">{PROFILE.chineseName}</h2>
            <p className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-widest">
              {PROFILE.title}
            </p>
        </div>

        <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400 font-light">
           <div className="flex items-center gap-3">
              <Building2 size={16} className="text-slate-400 shrink-0" />
              <span>{PROFILE.affiliation}</span>
           </div>
           <div className="flex items-center gap-3">
              <MapPin size={16} className="text-slate-400 shrink-0" />
              <span>{PROFILE.location}</span>
           </div>
           <a href={PROFILE.cvLink} className="flex items-center gap-3 text-slate-900 dark:text-slate-200 hover:text-violet-600 dark:hover:text-violet-400">
              <FileText size={16} className="text-slate-400 shrink-0" />
              <span className="underline decoration-1 underline-offset-4">Curriculum Vitae</span>
           </a>
        </div>

        {/* Mobile Social Links */}
        <div className="flex gap-6 pt-2">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section>
        <h2 className="text-3xl lg:text-6xl font-serif font-light text-slate-800 dark:text-slate-100 mb-10 leading-tight">
          In a place <span className="italic text-violet-600 dark:text-violet-400">without a ceiling</span>, my <span className="italic text-violet-600 dark:text-violet-400">body</span> becomes the <span className="italic text-violet-600 dark:text-violet-400">language</span> between <span className="italic text-violet-600 dark:text-violet-400">me</span> and <span className="italic text-violet-600 dark:text-violet-400">nature</span>.
        </h2>
        
        <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-6 uppercase tracking-widest">About Me</h3>
        
        <div className="text-xl text-slate-600 dark:text-slate-300 font-light leading-relaxed max-w-4xl space-y-6">
          <p>
            Welcome to my space. I am an outdoor sports enthusiast (especially cycling), a rock music fan, and a Counter-Strike player.
            I enjoy making new friends and welcome conversations from all walks of life. Through these communications, we can discover
            more of the world&apos;s intricacies and find joy in the details.
          </p>
          <p>
            My academic journey began at Beijing Sport University, where I completed my undergraduate and master&apos;s studies.
            During my graduate studies, I developed the research foundation under the mentorship of{" "}
            <a
              href="https://glxy.bsu.edu.cn/xygk/szdw/jys/d3b2b9f818534a8f84727e02a6c04f86.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              Dr. Hemin Song
            </a>
            . Now, I look forward to working with{" "}
            <a
              href="https://tyrealq.github.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:underline"
            >
              Dr. Yizhou (Tyreal) Qian
            </a>{" "}
            for my PhD. I plan to focus on using AI-related techniques to advance my research in sport management.
          </p>
          <p>
            As an outdoorsy person, I enjoy road cycling and hiking. My sport experiences have not only fueled my passion for the outdoors
            but also showed me that sports and nature go hand in hand. So I am passionate about exploring how sport management and marketing
            can foster sustainable development. My research interests focus on green marketing of sportswear brands and outdoor sport experiences.
            At the same time, I am also interested in the fashion dimension of sportswear, exploring how the integration of aesthetics and
            functionality shapes sport consumption culture.
          </p>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Focus Areas */}
        <section>
          <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-8 uppercase tracking-widest">Focus</h3>
          <div className="flex flex-col gap-4">
            {FOCUS_AREAS.map((area, idx) => (
              <div key={idx} className="border-t border-slate-200 dark:border-slate-800 pt-3 group">
                <span className="text-lg text-slate-700 dark:text-slate-300 font-light group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {area}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Research Skills - Simplified Format */}
        <section>
          <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-8 uppercase tracking-widest">Research Skills</h3>
          <div className="flex flex-col gap-4">
            {RESEARCH_SKILLS.map((skill, idx) => (
              <div key={idx} className="border-t border-slate-200 dark:border-slate-800 pt-3 group">
                <span className="text-lg text-slate-700 dark:text-slate-300 font-light group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Education Background */}
      <section>
         <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-10 uppercase tracking-widest">Education Background</h3>
         <div className="space-y-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <div className="text-2xl font-serif text-slate-800 dark:text-slate-100">Indiana University Bloomington</div>
                <div className="text-base text-slate-500 dark:text-slate-400 font-light mt-2">Incoming PhD Student in Sport Management</div>
              </div>
              <div className="text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 md:mt-0">2026 - 2030(Expected)</div>
            </div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <div className="text-2xl font-serif text-slate-800 dark:text-slate-100">Beijing Sport University</div>
                <div className="text-base text-slate-500 dark:text-slate-400 font-light mt-2">Master, Humanities and Social Sciences of Sports</div>
              </div>
              <div className="text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 md:mt-0">2022 - 2025</div>
            </div>

            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline border-b border-slate-100 dark:border-slate-800 pb-5">
              <div>
                <div className="text-2xl font-serif text-slate-800 dark:text-slate-100">Beijing Sport University</div>
                <div className="text-base text-slate-500 dark:text-slate-400 font-light mt-2">Bachelor, Sport Economics and Management</div>
              </div>
              <div className="text-sm font-mono text-slate-400 dark:text-slate-500 mt-2 md:mt-0">2018 - 2022</div>
            </div>
         </div>
      </section>

      <section>
        <h3 className="text-sm font-mono text-violet-600 dark:text-violet-400 mb-8 uppercase tracking-widest">Visitors</h3>
        <div id="mapmyvisitors-container" className="w-full overflow-x-auto" />
      </section>
    </div>
  );
};

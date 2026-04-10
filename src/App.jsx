'use client';

import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Code, Mail, Phone, X } from 'lucide-react';
import { portfolioData } from './data';

export default function App() {
    const [activePage, setActivePage] = useState('home');
    const [isProjectModalOpen, setProjectModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    const handleProjectClick = (project) => {
        setSelectedProject(project);
        setProjectModalOpen(true);
    };

    const pages = {
        home: <HomePage setActivePage={setActivePage} onProjectClick={handleProjectClick} />,
        experience: <ExperiencePage />,
        projects: <ProjectsPage onProjectClick={handleProjectClick} />,
        achievements: <AchievementsPage />,
        details: <DetailsPage />,
    };

    return (
        <div className="min-h-screen w-full bg-[#030712] text-gray-300 selection:bg-blue-500/30">
            <div className="container mx-auto max-w-7xl p-6 lg:p-12 relative z-10">
                <Header />
                <Navigation activePage={activePage} setActivePage={setActivePage} />
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activePage}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        {pages[activePage]}
                    </motion.div>
                </AnimatePresence>
            </div>
            
            <AnimatePresence>
                {isProjectModalOpen && <ProjectModal project={selectedProject} onClose={() => setProjectModalOpen(false)} />}
            </AnimatePresence>

            <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-0 overflow-hidden">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/10 blur-[120px] rounded-full"></div>
            </div>
        </div>
    );
}

const Header = () => (
    <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div>
            <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-4xl md:text-6xl font-bold text-white tracking-tighter"
            >
                Bondada Navaneeth Krishna
            </motion.h1>
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-gray-400">
                {portfolioData.contact.map((item) => (
                    <a
                        key={item.type}
                        href={item.type === 'email' ? `mailto:${item.value}` : item.type === 'phone' ? `tel:${item.value}` : `https://leetcode.com/${item.value}`}
                        target={item.type === 'leetcode' ? "_blank" : "_self"}
                        className="flex items-center gap-2 hover:text-blue-400 transition-colors group"
                    >
                        <div className="p-2 rounded-full bg-gray-900 group-hover:bg-blue-900/30 transition-colors">
                            {item.type === 'phone' && <Phone size={14} />}
                            {item.type === 'email' && <Mail size={14} />}
                            {item.type === 'leetcode' && <Code size={14} />}
                        </div>
                        <span className="text-sm md:text-base font-medium">{item.value}</span>
                    </a>
                ))}
            </div>
        </div>
    </header>
);

const Navigation = ({ activePage, setActivePage }) => {
    const navItems = ['Home', 'Experience', 'Projects', 'Achievements', 'Details'];
    return (
        <nav className="flex flex-wrap gap-x-8 border-b border-gray-800/50 mb-12">
            {navItems.map((item) => (
                <button
                    key={item}
                    onClick={() => setActivePage(item.toLowerCase())}
                    className={`relative py-4 text-sm md:text-base font-semibold uppercase tracking-widest transition-colors ${
                        activePage === item.toLowerCase() ? 'text-blue-400' : 'text-gray-500 hover:text-white'
                    }`}
                >
                    {item}
                    {activePage === item.toLowerCase() && (
                        <motion.div
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-blue-400"
                            layoutId="nav-underline"
                        />
                    )}
                </button>
            ))}
        </nav>
    );
};

const HomePage = ({ setActivePage, onProjectClick }) => (
    <div className="space-y-16">
        <section>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-4">Mission</h2>
            <p className="text-2xl md:text-3xl leading-snug text-white font-medium max-w-4xl tracking-tight">
                Aspiring Software Development Engineer and AI/ML Specialist. I design and build <span className="text-blue-400">scalable, intelligent solutions</span> that bridge the gap between complex data and human impact.
            </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
                <section>
                    <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Latest Experience</h2>
                        <button onClick={() => setActivePage('experience')} className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1">
                            TIMELINE <ArrowUpRight size={14} />
                        </button>
                    </div>
                    <ExperienceCard experience={portfolioData.experience[0]} />
                </section>

                <section>
                    <div className="flex justify-between items-end mb-8 border-b border-gray-800 pb-4">
                        <h2 className="text-xl font-bold text-white uppercase tracking-tighter">Featured Projects</h2>
                        <button onClick={() => setActivePage('projects')} className="text-blue-400 hover:text-blue-300 text-sm font-bold flex items-center gap-1">
                            ALL WORK <ArrowUpRight size={14} />
                        </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {portfolioData.projects.slice(0, 2).map((proj, i) => (
                            <ProjectCard key={i} project={proj} onProjectClick={onProjectClick} />
                        ))}
                    </div>
                </section>
            </div>
            
            <aside className="lg:col-span-1">
                <SkillsSection />
            </aside>
        </div>
    </div>
);

const ExperiencePage = () => (
    <div className="max-w-4xl">
        <h2 className="text-3xl font-bold mb-12 text-white tracking-tighter">Professional Journey</h2>
        <div className="space-y-8">
            {portfolioData.experience.map((exp, i) => (
                <ExperienceCard key={i} experience={exp} />
            ))}
        </div>
    </div>
);

const ProjectsPage = ({ onProjectClick }) => (
    <div>
        <h2 className="text-3xl font-bold mb-12 text-white tracking-tighter">Selected Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioData.projects.map((proj, i) => (
                 <ProjectCard key={i} project={proj} onProjectClick={onProjectClick} />
            ))}
        </div>
    </div>
);

const AchievementsPage = () => (
    <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-white tracking-tighter text-center">Milestones</h2>
        <div className="relative border-l border-gray-800 ml-4 md:ml-0">
            {portfolioData.achievements.map((ach, i) => (
                <div key={i} className="mb-12 ml-8 relative">
                    <div className="absolute -left-[41px] top-1 w-5 h-5 bg-[#030712] border-2 border-blue-500 rounded-full"></div>
                    <p className="text-blue-400 text-xs font-bold mb-2 tracking-widest uppercase">{ach.date}</p>
                    <h3 className="text-xl font-bold text-white mb-1">{ach.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 font-medium">{ach.organization}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{ach.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const DetailsPage = () => (
     <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <section>
            <h2 className="text-3xl font-bold mb-12 text-white tracking-tighter">Education</h2>
            <div className="space-y-6">
                {portfolioData.education.map((edu, i) => <EducationCard key={i} education={edu} />)}
            </div>
        </section>
        
        <section className="space-y-16">
            <div>
                <h2 className="text-3xl font-bold mb-12 text-white tracking-tighter">Competitive Programming</h2>
                <LeetCodeCard />
            </div>
            <div>
                <h2 className="text-3xl font-bold mb-8 text-white tracking-tighter">Languages</h2>
                <div className="flex flex-wrap gap-4">
                    {portfolioData.additionalDetails[1].value.split(', ').map(lang => (
                        <div key={lang} className="px-6 py-4 rounded-xl bg-gray-900 border border-gray-800 text-white font-semibold">
                            {lang}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
);

const ExperienceCard = ({ experience }) => (
    <div className="p-8 rounded-2xl bg-gray-900/40 border border-gray-800/50 hover:border-gray-700 transition-all group">
        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-2">
            <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{experience.role}</h3>
                <p className="text-lg text-gray-400 font-medium">{experience.company}</p>
            </div>
            <span className="text-xs font-bold text-gray-500 bg-gray-800 px-3 py-1 rounded-full">{experience.period}</span>
        </div>
        <ul className="space-y-4 text-gray-400 leading-relaxed">
            {experience.description.map((d, i) => (
                <li key={i} className="flex gap-3">
                    <span className="text-blue-500 mt-1.5 flex-shrink-0">•</span>
                    <span dangerouslySetInnerHTML={{ __html: d.replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-200 font-semibold">$1</strong>') }} />
                </li>
            ))}
        </ul>
    </div>
);

const ProjectCard = ({ project, onProjectClick }) => (
    <div className="p-6 rounded-2xl flex flex-col bg-gray-900/40 border border-gray-800/50 hover:border-blue-500/30 transition-all hover:-translate-y-1 group">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{project.title}</h3>
        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-4">{project.category}</p>
        <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
                <span key={tag} className="bg-gray-800/80 text-gray-400 text-[10px] font-bold px-2 py-0.5 rounded border border-gray-700/50 uppercase">
                    {tag}
                </span>
            ))}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed mb-8 line-clamp-3">{project.summary}</p>
        <div className="mt-auto flex justify-between items-center pt-4 border-t border-gray-800">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-white"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <button 
                onClick={() => onProjectClick(project)} 
                className="text-xs font-bold text-blue-400 hover:text-white flex items-center gap-1 uppercase tracking-tighter"
            >
                Details <ArrowUpRight size={14} />
            </button>
        </div>
    </div>
);

const SkillsSection = () => {
    const proficiencyMap = {
        'Professional': 'text-purple-400 border-purple-900/50 bg-purple-950/20',
        'Advanced': 'text-blue-400 border-blue-900/50 bg-blue-950/20',
        'Intermediate': 'text-green-400 border-green-900/50 bg-green-950/20',
        'Beginner': 'text-amber-400 border-amber-900/50 bg-amber-950/20'
    };
    return (
        <div className="space-y-8 sticky top-24">
            <h2 className="text-xl font-bold text-white uppercase tracking-tighter border-b border-gray-800 pb-4">Core Stack</h2>
            {Object.entries(portfolioData.skills).map(([category, skills]) => (
                <div key={category}>
                    <h3 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-4">{category}</h3>
                    <div className="flex flex-wrap gap-2">
                        {skills.map(skill => (
                            <span 
                                key={skill.name} 
                                className={`text-[11px] font-bold px-3 py-1 rounded-md border transition-all hover:scale-105 ${proficiencyMap[skill.proficiency] || 'text-gray-400 border-gray-800'}`}
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const EducationCard = ({ education }) => (
    <div className="p-6 rounded-2xl bg-gray-900/40 border border-gray-800/50">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="font-bold text-white text-xl mb-1">{education.degree}</h3>
                <p className="text-gray-400 font-medium mb-1">{education.institution}</p>
                <p className="text-xs font-bold text-gray-600 uppercase tracking-widest">{education.period}</p>
            </div>
            <div className="text-right">
                <span className="text-2xl font-black text-blue-500">{education.details.split(': ')[1]}</span>
                <p className="text-[10px] font-bold text-gray-600 uppercase">CGPA</p>
            </div>
        </div>
    </div>
);

const LeetCodeCard = () => {
    const [username, rating] = portfolioData.additionalDetails[0].value.match(/(\w+)\s\((\d+)\sRating\)/).slice(1);
    return (
        <div className="p-8 rounded-2xl bg-gray-900/60 border border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-3 border border-white/10">
                    <img src="https://assets.leetcode.com/static_assets/public/icons/favicon-192x192.png" alt="LeetCode" className="w-full h-full opacity-80" />
                </div>
                <div>
                    <h4 className="text-2xl font-bold text-white tracking-tighter">{username}</h4>
                    <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest">Global Contest Rating: {rating}</p>
                </div>
            </div>
            <a 
                href={`https://leetcode.com/${username}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-blue-400 transition-colors text-center"
            >
                View Profile
            </a>
        </div>
    );
};

const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0b0f1a] border border-gray-800 rounded-3xl p-8 w-full max-w-3xl max-h-[85vh] flex flex-col shadow-2xl"
            >
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h3 className="text-3xl font-bold text-white tracking-tighter">{project.title}</h3>
                        <p className="text-blue-500 text-xs font-bold uppercase tracking-[0.2em] mt-2">{project.category}</p>
                    </div>
                    <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-800 text-gray-500 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="overflow-y-auto pr-4 space-y-8 custom-scrollbar">
                    {Object.entries(project.details).map(([key, value]) => (
                        <div key={key}>
                            <h4 className="text-xs font-black text-gray-500 uppercase tracking-widest mb-4 flex items-center gap-2">
                                <span className="w-1 h-3 bg-blue-500 rounded-full"></span> {key}
                            </h4>
                            {Array.isArray(value) ? (
                                <ul className="space-y-3">
                                    {value.map((item, i) => (
                                        <li key={i} className="text-gray-400 text-sm leading-relaxed flex gap-3">
                                            <span className="text-blue-500/50">•</span> {item}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-gray-400 text-sm leading-relaxed">{value}</p>
                            )}
                        </div>
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
};
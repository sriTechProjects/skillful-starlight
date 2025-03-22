
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import SkillBadge from '../components/SkillBadge';
import { 
  Code, 
  Server, 
  Database, 
  Terminal, 
  Cpu, 
  PenTool, 
  GitBranch, 
  LayoutGrid, 
  FileJson, 
  Globe,
  Layers,
  Settings,
  Figma,
  LineChart,
  Check
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      name: "Frontend Development",
      type: "frontend" as const,
      skills: [
        { name: "React", level: 5, icon: <Code size={18} /> },
        { name: "JavaScript", level: 5, icon: <FileJson size={18} /> },
        { name: "HTML5", level: 5, icon: <Globe size={18} /> },
        { name: "CSS3", level: 4, icon: <PenTool size={18} /> },
        { name: "Tailwind CSS", level: 4, icon: <Layers size={18} /> },
        { name: "Redux", level: 3, icon: <Settings size={18} /> },
        { name: "Responsive Design", level: 5, icon: <LayoutGrid size={18} /> }
      ]
    },
    {
      name: "Backend Development",
      type: "backend" as const,
      skills: [
        { name: "Node.js", level: 4, icon: <Server size={18} /> },
        { name: "Express", level: 4, icon: <Server size={18} /> },
        { name: "MongoDB", level: 3, icon: <Database size={18} /> },
        { name: "RESTful APIs", level: 4, icon: <FileJson size={18} /> },
        { name: "Firebase", level: 3, icon: <Database size={18} /> }
      ]
    },
    {
      name: "Tools & Platforms",
      type: "tools" as const,
      skills: [
        { name: "Git/GitHub", level: 4, icon: <GitBranch size={18} /> },
        { name: "VS Code", level: 5, icon: <Terminal size={18} /> },
        { name: "Figma", level: 3, icon: <Figma size={18} /> },
        { name: "Chrome DevTools", level: 4, icon: <Cpu size={18} /> },
        { name: "Vercel", level: 4, icon: <Globe size={18} /> },
        { name: "Analytics", level: 3, icon: <LineChart size={18} /> }
      ]
    },
    {
      name: "Soft Skills",
      type: "other" as const,
      skills: [
        { name: "Problem Solving", level: 5, icon: <Check size={18} /> },
        { name: "Team Collaboration", level: 4, icon: <Check size={18} /> },
        { name: "Communication", level: 4, icon: <Check size={18} /> },
        { name: "Time Management", level: 4, icon: <Check size={18} /> },
        { name: "Adaptability", level: 5, icon: <Check size={18} /> }
      ]
    }
  ];

  // Add custom animations for skills visualization
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    },
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-glow">Skills</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My technical toolkit and professional competencies
            </p>
          </motion.div>
          
          <div className="space-y-12">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white mb-6">
                  {category.name}
                </h2>
                
                <motion.div 
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover="hover"
                    >
                      <SkillBadge
                        name={skill.name}
                        icon={skill.icon}
                        level={skill.level}
                        category={category.type}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            ))}
          </div>
          
          {/* Additional Skills Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 glass-card rounded-xl p-8"
          >
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Professional Development
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Current Learning Focus
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-blue-500/20 text-blue-300 py-1.5 px-3 rounded-full text-sm">
                    Advanced React Patterns
                  </span>
                  <span className="bg-purple-500/20 text-purple-300 py-1.5 px-3 rounded-full text-sm">
                    Web Accessibility
                  </span>
                  <span className="bg-green-500/20 text-green-300 py-1.5 px-3 rounded-full text-sm">
                    Performance Optimization
                  </span>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-white mb-3">
                  Professional Achievements
                </h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    <span>Reduced application load time by 40% through optimization techniques</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    <span>Implemented responsive design system used across multiple projects</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-blue-400">•</span>
                    <span>Lead developer for client project that increased conversion by 25%</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Skills;

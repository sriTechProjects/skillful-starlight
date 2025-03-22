
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import ProjectCard from '../components/ProjectCard';
import { Filter } from 'lucide-react';

// Demo data - replace with your real projects
const projectsData = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A fully responsive e-commerce website with product filtering and cart functionality.",
    technologies: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=764&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
    outcomes: [
      "Implemented responsive design principles",
      "Created reusable component system",
      "Integrated payment processing"
    ],
    category: "major"
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description: "A weather application that displays current and forecasted weather based on location.",
    technologies: ["JavaScript", "HTML5", "CSS3", "Weather API"],
    imageUrl: "https://images.unsplash.com/photo-1592210454359-9043f067919b?q=80&w=870&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
    outcomes: [
      "Practiced API integration",
      "Implemented geolocation features",
      "Applied UI/UX principles for data visualization"
    ],
    category: "mini"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A Kanban-style task management application with drag-and-drop interface.",
    technologies: ["React", "Redux", "Firebase", "Styled Components"],
    imageUrl: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=839&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
    outcomes: [
      "Implemented drag-and-drop functionality",
      "Created user authentication",
      "Built real-time database synchronization"
    ],
    category: "major"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing skills and projects.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=764&auto=format&fit=crop",
    githubUrl: "#",
    liveUrl: "#",
    outcomes: [
      "Created smooth page transitions",
      "Implemented responsive design",
      "Optimized for accessibility"
    ],
    category: "mini"
  },
  {
    id: 5,
    title: "Algorithm Visualizer",
    description: "A web application that visualizes various sorting and pathfinding algorithms.",
    technologies: ["JavaScript", "HTML Canvas", "CSS Grid"],
    imageUrl: "https://images.unsplash.com/photo-1580894895938-bd4be095a6ec?q=80&w=870&auto=format&fit=crop",
    githubUrl: "#",
    outcomes: [
      "Implemented multiple algorithms",
      "Designed intuitive visualization system",
      "Practiced advanced JavaScript concepts"
    ],
    category: "practice"
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description: "An application to track workouts, nutrition, and fitness progress.",
    technologies: ["React Native", "Firebase", "Chart.js"],
    githubUrl: "#",
    liveUrl: "#",
    outcomes: [
      "Built cross-platform mobile application",
      "Implemented data visualization",
      "Created user authentication and profiles"
    ],
    category: "major"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);
    
  const filterOptions = [
    { value: 'all', label: 'All Projects' },
    { value: 'mini', label: 'Mini Projects' },
    { value: 'major', label: 'Major Projects' },
    { value: 'practice', label: 'Tech Practice' }
  ];

  return (
    <PageTransition>
      <div className="pt-24 pb-16 min-h-screen px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-glow">Projects</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              A collection of my work, including both personal and professional projects
            </p>
          </motion.div>
          
          {/* Filter Controls */}
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            <div className="flex items-center gap-2 mr-2">
              <Filter size={18} className="text-blue-400" />
              <span className="text-sm text-gray-300">Filter:</span>
            </div>
            
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm transition-all ${
                  filter === option.value
                    ? 'bg-blue-500 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  technologies={project.technologies}
                  imageUrl={project.imageUrl}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  outcomes={project.outcomes}
                  category={project.category}
                />
              </motion.div>
            ))}
          </div>
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">No projects found with the selected filter.</p>
            </div>
          )}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;

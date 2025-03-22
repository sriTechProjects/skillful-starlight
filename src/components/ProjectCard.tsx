
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  outcomes: string[];
  category: 'mini' | 'major' | 'practice';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
  outcomes,
  category
}) => {
  const categoryStyles = {
    mini: 'bg-blue-900/30 border-blue-500/20',
    major: 'bg-purple-900/30 border-purple-500/20',
    practice: 'bg-emerald-900/30 border-emerald-500/20'
  };

  const categoryLabels = {
    mini: 'Mini Project',
    major: 'Major Project',
    practice: 'Tech Practice'
  };

  const categoryColors = {
    mini: 'bg-blue-500',
    major: 'bg-purple-500',
    practice: 'bg-emerald-500'
  };

  return (
    <div 
      className={`glass-card rounded-xl overflow-hidden flex flex-col h-full ${categoryStyles[category]}`}
    >
      {imageUrl && (
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-700"
          />
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-medium py-1 px-2 rounded-full text-white ${categoryColors[category]}`}>
              {categoryLabels[category]}
            </span>
          </div>
        </div>
      )}
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-xl font-display font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-300 mb-4 text-sm">{description}</p>
        
        <div className="mb-4 flex-grow">
          <h4 className="text-sm font-medium text-gray-200 mb-2">Key Learnings</h4>
          <ul className="text-gray-400 text-sm space-y-1 list-disc pl-4">
            {outcomes.map((outcome, index) => (
              <li key={index}>{outcome}</li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs py-1 px-2 rounded-full bg-white/10 text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3 mt-auto">
          {githubUrl && (
            <a 
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a 
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-sm text-gray-300 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

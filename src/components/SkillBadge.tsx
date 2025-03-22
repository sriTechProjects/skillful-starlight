
import React from 'react';

interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
  level?: number; // 1-5 for skill level
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'other';
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ 
  name, 
  icon, 
  level = 0,
  category 
}) => {
  const categoryColors = {
    frontend: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30',
    backend: 'from-emerald-500/20 to-green-500/20 border-emerald-500/30',
    tools: 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
    languages: 'from-pink-500/20 to-purple-500/20 border-pink-500/30',
    other: 'from-gray-500/20 to-slate-500/20 border-gray-500/30'
  };

  return (
    <div className={`rounded-lg px-4 py-3 bg-gradient-to-r ${categoryColors[category]} border backdrop-blur-lg transition-all duration-300 hover:scale-105 hover:shadow-lg`}>
      <div className="flex items-center gap-3">
        {icon && (
          <div className="text-white/90">
            {icon}
          </div>
        )}
        <div>
          <h3 className="text-white font-medium">{name}</h3>
          
          {level > 0 && (
            <div className="flex space-x-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 w-5 rounded-full ${
                    i < level ? 'bg-white/80' : 'bg-white/20'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillBadge;

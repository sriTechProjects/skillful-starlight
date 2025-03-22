
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Briefcase, Star, FileText, Mail } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/', icon: <Home size={24} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={24} /> },
  { name: 'Skills', path: '/skills', icon: <Star size={24} /> },
  { name: 'Resume', path: '/resume', icon: <FileText size={24} /> },
  { name: 'Contact', path: '/contact', icon: <Mail size={24} /> },
];

const Sidebar = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  return (
    <motion.div 
      className="glass fixed left-0 top-0 bottom-0 z-40 flex flex-col items-center py-8 overflow-visible"
      initial={{ width: '4rem' }}
      animate={{ width: '4rem' }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="flex flex-col items-center gap-10 w-full">
        {navItems.map((item, index) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => `relative flex items-center w-full px-4`}
            onMouseEnter={() => setExpandedIndex(index)}
            onMouseLeave={() => setExpandedIndex(null)}
          >
            {({ isActive }) => (
              <motion.div 
                className="relative flex items-center"
                initial={false}
                animate={{ 
                  x: expandedIndex === index ? 8 : 0 
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-white">
                  {item.icon}
                </div>
                {expandedIndex === index && (
                  <motion.div
                    className="absolute left-[-150px] whitespace-nowrap z-50"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="glass text-white py-2 px-4 rounded-lg text-sm font-medium">
                      {item.name}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </NavLink>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;

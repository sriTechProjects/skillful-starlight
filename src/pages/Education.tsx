
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar, Milestone } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      university: 'University Name',
      year: '2019 - 2023',
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Machine Learning', 'Database Systems'],
      achievements: ['Dean\'s List 4 semesters', 'Senior Project Excellence Award']
    },
    {
      degree: 'High School Diploma',
      university: 'High School Name',
      year: '2015 - 2019',
      courses: ['AP Computer Science', 'AP Calculus', 'Physics'],
      achievements: ['Valedictorian', 'Programming Competition Winner']
    }
  ];

  const certifications = [
    {
      name: 'Front-End Web Development',
      issuer: 'Certificate Provider Name',
      date: 'March 2022',
      link: '#'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Certificate Provider Name',
      date: 'August 2022',
      link: '#'
    },
    {
      name: 'UI/UX Design Fundamentals',
      issuer: 'Certificate Provider Name',
      date: 'January 2023',
      link: '#'
    }
  ];

  // Animation variants
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 12 
      }
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-glow">Education</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My academic journey and professional certifications
            </p>
          </motion.div>

          {/* S-shaped Timeline */}
          <motion.div 
            className="relative mx-auto my-16"
            variants={timelineVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Timeline line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2"></div>
            
            {/* Timeline events */}
            {education.map((edu, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`flex mb-24 items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-6 h-6 rounded-full bg-blue-500 border-4 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  </div>
                </div>
                
                {/* Content */}
                <div className={`glass-card rounded-xl p-6 ${index % 2 === 0 ? 'mr-8 md:mr-16 text-right' : 'ml-8 md:ml-16 text-left'} w-1/2`}>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 + (index * 0.1) }}
                  >
                    <div className="flex flex-col items-end mb-4">
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-blue-300">{edu.university}</p>
                      <div className="flex items-center text-gray-400 text-sm mt-1">
                        <Calendar size={14} className="mr-1" />
                        {edu.year}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-200 mb-2">Relevant Coursework</h4>
                      <div className="flex flex-wrap gap-2 justify-end">
                        {edu.courses.map((course, i) => (
                          <span 
                            key={i}
                            className="text-xs py-1 px-2 rounded-full bg-white/10 text-gray-300"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium text-gray-200 mb-2">Achievements</h4>
                      <ul className={`text-gray-300 text-sm space-y-1 ${index % 2 === 0 ? 'list-none' : 'list-disc pl-4'}`}>
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className={index % 2 === 0 ? 'text-right' : 'text-left'}>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
            
            {/* Certifications */}
            <motion.div
              variants={itemVariants}
              className="flex mb-16 items-center"
            >
              <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                <div className="w-6 h-6 rounded-full bg-purple-500 border-4 border-background"></div>
              </div>
              
              <div className="glass-card rounded-xl p-6 ml-8 md:ml-16 w-1/2">
                <h3 className="text-xl font-semibold text-white mb-4">Certifications</h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="border-l-2 border-blue-400 pl-4 py-2"
                    >
                      <h4 className="text-lg font-medium text-white mb-1">{cert.name}</h4>
                      <p className="text-blue-300 text-sm mb-1">{cert.issuer}</p>
                      <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                      
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      >
                        View Certificate →
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
          
          {/* Extra Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="glass-card rounded-xl p-6 mt-16 max-w-lg mx-auto"
          >
            <h3 className="text-lg font-medium text-white mb-3">Extracurricular Activities</h3>
            <ul className="text-gray-300 text-sm space-y-2">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Coding Club President (2021-2022)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Hackathon Participant - 3 events</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Open Source Contributor</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;

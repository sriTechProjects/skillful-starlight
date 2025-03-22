
import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, Calendar } from 'lucide-react';
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Academic Background */}
            <div className="md:col-span-2 space-y-8">
              <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                <BookOpen className="text-blue-400" size={20} />
                Academic Background
              </h2>
              
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-6"
                >
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <p className="text-blue-300">{edu.university}</p>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {edu.year}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
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
                    <ul className="text-gray-300 text-sm space-y-1 list-disc pl-4">
                      {edu.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Certifications */}
            <div>
              <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                <Award className="text-blue-400" size={20} />
                Certifications
              </h2>
              
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="glass-card rounded-xl p-5"
                  >
                    <h3 className="text-lg font-medium text-white mb-1">{cert.name}</h3>
                    <p className="text-blue-300 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                    
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
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="glass-card rounded-xl p-6 mt-8"
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
        </div>
      </div>
    </PageTransition>
  );
};

export default Education;

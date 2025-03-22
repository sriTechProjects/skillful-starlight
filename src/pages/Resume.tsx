
import React from 'react';
import { motion } from 'framer-motion';
import PageTransition from '../components/PageTransition';
import { Download, ExternalLink, BookOpen, Briefcase, Calendar, Award } from 'lucide-react';

const Resume = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      company: "Company Name",
      period: "Jan 2023 - Present",
      responsibilities: [
        "Developed and maintained responsive web applications using React and Tailwind CSS",
        "Collaborated with designers to implement UI/UX improvements across the platform",
        "Optimized application performance, resulting in 30% faster load times",
        "Participated in code reviews and mentored junior developers"
      ]
    },
    {
      title: "Web Developer Intern",
      company: "Internship Company",
      period: "Jun 2022 - Dec 2022",
      responsibilities: [
        "Assisted in building and maintaining client websites",
        "Created responsive layouts and implemented design systems",
        "Participated in team meetings and contributed to project planning",
        "Gained experience with React, JavaScript, and frontend development practices"
      ]
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
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 text-glow">Resume</h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              My professional experience and achievements
            </p>
          </motion.div>
          
          <div className="mb-8 flex justify-center">
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              href="#" // Add your resume download link here
              className="glass-card flex items-center gap-2 px-6 py-3 rounded-lg text-white hover:bg-white/10 transition-all"
              download
            >
              <Download size={18} />
              <span>Download Resume</span>
            </motion.a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Experience Section */}
            <div className="md:col-span-2 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                  <Briefcase className="text-blue-400" size={20} />
                  Work Experience
                </h2>
                
                <div className="space-y-6">
                  {experiences.map((exp, index) => (
                    <div key={index} className="glass-card rounded-xl p-6">
                      <div className="flex flex-wrap justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                          <p className="text-blue-300">{exp.company}</p>
                        </div>
                        <div className="flex items-center text-gray-400 text-sm">
                          <Calendar size={14} className="mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      
                      <ul className="text-gray-300 space-y-2">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 text-blue-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                  <BookOpen className="text-blue-400" size={20} />
                  Education
                </h2>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="flex flex-wrap justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">Bachelor of Science in Computer Science</h3>
                      <p className="text-blue-300">University Name</p>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      2019 - 2023
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    Graduated with honors. Specialized in web development and user interface design.
                  </p>
                  
                  <div>
                    <h4 className="text-sm font-medium text-gray-200 mb-2">Relevant Coursework</h4>
                    <div className="flex flex-wrap gap-2">
                      {['Data Structures', 'Algorithms', 'Web Development', 'Database Systems', 'UI/UX Design'].map((course, i) => (
                        <span 
                          key={i}
                          className="text-xs py-1 px-2 rounded-full bg-white/10 text-gray-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Skills and Certifications Column */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                  <Award className="text-blue-400" size={20} />
                  Skills
                </h2>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium text-white mb-3">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Node.js', 'Git'].map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs py-1 px-2 rounded-full bg-blue-500/20 text-blue-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-white mb-3">Soft Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['Problem Solving', 'Communication', 'Team Collaboration', 'Adaptability', 'Time Management'].map((skill, i) => (
                        <span 
                          key={i}
                          className="text-xs py-1 px-2 rounded-full bg-purple-500/20 text-purple-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                  <Award className="text-blue-400" size={20} />
                  Certifications
                </h2>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="space-y-4">
                    {[
                      { name: 'Front-End Web Development', issuer: 'Certificate Provider', date: 'March 2022' },
                      { name: 'React Developer Certification', issuer: 'Certificate Provider', date: 'August 2022' },
                      { name: 'UI/UX Design Fundamentals', issuer: 'Certificate Provider', date: 'January 2023' }
                    ].map((cert, i) => (
                      <div key={i} className="border-b border-white/10 last:border-0 pb-4 last:pb-0">
                        <h3 className="text-white font-medium">{cert.name}</h3>
                        <p className="text-blue-300 text-sm">{cert.issuer}</p>
                        <p className="text-gray-400 text-sm">{cert.date}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <h2 className="text-2xl font-display font-semibold text-white flex items-center gap-2 mb-6">
                  <ExternalLink className="text-blue-400" size={20} />
                  Links
                </h2>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="space-y-3">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                    >
                      <span className="bg-blue-500/20 p-1.5 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span>GitHub</span>
                    </a>
                    
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                    >
                      <span className="bg-blue-500/20 p-1.5 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </span>
                      <span>LinkedIn</span>
                    </a>
                    
                    <a 
                      href="mailto:your-email@example.com" 
                      className="flex items-center gap-2 text-gray-200 hover:text-white transition-colors"
                    >
                      <span className="bg-blue-500/20 p-1.5 rounded">
                        <svg className="w-4 h-4 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </span>
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Resume;

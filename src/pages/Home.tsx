
import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Code, Book, Briefcase } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const Home = () => {
  return (
    <PageTransition>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative flex flex-col justify-center items-center min-h-screen px-4 py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-1/4 -left-24 w-72 h-72 bg-blue-500/10 rounded-full filter blur-3xl" />
            <div className="absolute bottom-1/4 -right-24 w-80 h-80 bg-violet-500/10 rounded-full filter blur-3xl" />
          </div>
          
          <div className="container relative z-10 mx-auto max-w-5xl">
            <div className="text-center mb-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block mb-3"
              >
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm text-sm font-medium text-blue-300 mb-4">
                  Welcome to My Portfolio
                </span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl md:text-6xl font-display font-bold text-white leading-tight mb-6 text-glow"
              >
                Your Name Here
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl font-display text-blue-100 max-w-3xl mx-auto mb-8"
              >
                Your attention-grabbing tagline here
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg text-gray-300 max-w-2xl mx-auto mb-10"
              >
                Your one-liner explaining your focus or expertise
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap justify-center gap-4 mb-16"
              >
                <div className="glass-card px-6 py-5 rounded-xl flex items-center gap-3">
                  <Code className="text-blue-400" />
                  <span className="text-white font-medium">Frontend Dev</span>
                </div>
                <div className="glass-card px-6 py-5 rounded-xl flex items-center gap-3">
                  <Book className="text-blue-400" />
                  <span className="text-white font-medium">UX Design</span>
                </div>
                <div className="glass-card px-6 py-5 rounded-xl flex items-center gap-3">
                  <Briefcase className="text-blue-400" />
                  <span className="text-white font-medium">Project Management</span>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
          >
            <ChevronDown className="text-blue-400 h-8 w-8" />
          </motion.div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;

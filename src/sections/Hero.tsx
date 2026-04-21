import React from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined, DownloadOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { profileData } from '../data/mockData';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-card)]/50 backdrop-blur-sm">
            <span className="text-sm font-medium text-brand-primary">Available for new opportunities</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-[var(--text-primary)] mb-6">
            Hi, I'm {profileData?.name?.split(' ')[0] || ''} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              {profileData.role}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed">
            {profileData.tagline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              type="primary" 
              size="large" 
              className="h-12 px-8 flex items-center gap-2 rounded-lg bg-brand-primary hover:bg-brand-primary/90 shadow-[0_0_20px_rgba(24,144,255,0.4)]"
              onClick={scrollToProjects}
            >
              View Projects <ArrowRightOutlined />
            </Button>
            <Button 
              size="large" 
              className="h-12 px-8 flex items-center gap-2 rounded-lg border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-brand-primary hover:border-brand-primary transition-all"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/Thadikonda_Sudheer_Resume.pdf';
                link.download = 'Thadikonda_Sudheer_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
            >
              Download Resume <DownloadOutlined />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

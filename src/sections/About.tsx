import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Card } from 'antd';
import { profileData } from '../data/mockData';
import { MailOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';

export const About: React.FC = () => {
  return (
    <SectionWrapper 
      id="about" 
      title="About Me" 
      subtitle="Get to know me and my background."
    >
      <Card 
        className="bg-white dark:bg-[var(--bg-card)] border-gray-200 dark:border-[var(--border-subtle)] overflow-hidden rounded-2xl"
        bodyStyle={{ padding: 0 }}
      >
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 bg-gray-50 dark:bg-[var(--bg-base)] p-8 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-gray-200 dark:border-[var(--border-subtle)]">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-brand-primary to-brand-accent p-1 mb-6">
              <div className="w-full h-full rounded-full bg-white dark:bg-[var(--bg-card)] flex items-center justify-center overflow-hidden">
                {/* Fallback avatar if no image provided */}
                <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-brand-primary to-brand-accent">
                   {profileData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-[var(--text-primary)] mb-2">{profileData.name}</h3>
            <p className="text-brand-primary font-medium text-sm mb-6">{profileData.role}</p>
            
            <div className="flex gap-4">
              <a href={profileData.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-[var(--bg-card)] border border-gray-200 dark:border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-gray-900 dark:text-[var(--text-primary)] hover:border-brand-primary transition-all">
                <GithubOutlined className="text-lg" />
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white dark:bg-[var(--bg-card)] border border-gray-200 dark:border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-gray-900 dark:text-[var(--text-primary)] hover:border-brand-primary transition-all">
                <LinkedinOutlined className="text-lg" />
              </a>
              <a href={`mailto:${profileData.email}`} className="w-10 h-10 rounded-full bg-white dark:bg-[var(--bg-card)] border border-gray-200 dark:border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-gray-900 dark:text-[var(--text-primary)] hover:border-brand-primary transition-all">
                <MailOutlined className="text-lg" />
              </a>
            </div>
          </div>
          <div className="w-full md:w-2/3 p-8 md:p-12">
            <h4 className="text-2xl font-bold text-gray-900 dark:text-[var(--text-primary)] mb-4">Professional Profile</h4>
            <div className="text-gray-600 dark:text-[var(--text-secondary)] leading-relaxed space-y-4 text-base">
              {profileData.summary.split('. ').map((sentence,i, arr) => 
                sentence ? <p key={i}>{sentence}{i !== arr.length - 1 ? '.' : ''}</p> : null
              )}
            </div>
            
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
               <div>
                  <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] text-sm mb-1">Experience</p>
                  <p className="text-gray-900 dark:text-[var(--text-primary)] font-semibold">4+ Years</p>
               </div>
               <div>
                  <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] text-sm mb-1">Location</p>
                  <p className="text-gray-900 dark:text-[var(--text-primary)] font-semibold">Remote</p>
               </div>
               <div>
                  <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] text-sm mb-1">Availability</p>
                  <p className="text-gray-900 dark:text-[var(--text-primary)] font-semibold text-brand-primary">Open to offers</p>
               </div>
            </div>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  );
};

import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { experienceData } from '../data/mockData';
import { Timeline, Tag } from 'antd';
import { LaptopOutlined } from '@ant-design/icons';

export const Experience: React.FC = () => {
  const timelineItems = experienceData.map((exp, index) => ({
    dot: <div className="w-8 h-8 rounded-full bg-[var(--bg-base)] border border-brand-primary flex items-center justify-center text-brand-primary shadow-[0_0_10px_rgba(24,144,255,0.2)]">
           <LaptopOutlined />
         </div>,
    children: (
      <div className={`mb-10 pl-6 ${index !== experienceData.length - 1 ? 'pb-8' : ''}`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">{exp.role}</h3>
            <h4 className="text-lg text-[var(--text-secondary)] font-medium">{exp.company}</h4>
          </div>
          <div className="mt-2 md:mt-0">
            <Tag color="#1890ff" className="bg-brand-primary/10 text-brand-primary border-brand-primary/20 px-3 py-1 rounded-full text-sm">
              {exp.duration}
            </Tag>
          </div>
        </div>
        
        <ul className="list-disc list-inside text-[var(--text-secondary)] space-y-2 mb-6 ml-2">
          {exp.contributions.map((point, i) => (
            <li key={i} className="leading-relaxed">{point}</li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4 custom-scrollbar">
          {exp.techStack.map((tech, i) => (
            <Tag key={i} className="bg-[var(--bg-card)] border-[var(--border-subtle)] text-[var(--text-secondary)] rounded-md px-2 py-1 m-0">
              {tech}
            </Tag>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <SectionWrapper 
      id="experience" 
      title="Work Experience" 
      subtitle="My professional journey and key contributions across different roles."
    >
      <div className="max-w-4xl mx-auto mt-8">
        <Timeline 
          items={timelineItems} 
          className="custom-timeline"
        />
      </div>

      <style>{`
        .custom-timeline .ant-timeline-item-tail {
          border-inline-start: 2px solid #30363D !important;
          left: 15px !important;
        }
        .custom-timeline .ant-timeline-item-head-custom {
          padding: 0 !important;
          background: transparent !important;
        }
      `}</style>
    </SectionWrapper>
  );
};

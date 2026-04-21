import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { skillsData } from '../data/mockData';
import { Card, Progress, Tag } from 'antd';

export const Skills: React.FC = () => {
  return (
    <SectionWrapper 
      id="skills" 
      title="Technical Skills" 
      subtitle="A categorized overview of my technical expertise and proficiency levels."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category) => (
          <Card 
            key={category.category}
            title={<span className="text-gray-900 dark:text-[var(--text-primary)] text-lg">{category.category}</span>}
            className="bg-gray-50 dark:bg-[var(--bg-base)] border-gray-200 dark:border-[var(--border-subtle)] rounded-xl shadow-lg border-t-2 hover:border-t-brand-primary transition-all duration-300"
            headStyle={{ borderBottom: '1px solid #30363D', padding: '1rem 1.5rem' }}
            bodyStyle={{ padding: '1.5rem' }}
          >
            <div className="flex flex-col gap-5">
              {category.skills.map((skill) => (
                <div key={skill.key}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 dark:text-[var(--text-secondary)] font-medium">{skill.name}</span>
                    <span className="text-xs text-[var(--text-secondary)] dark:text-[var(--text-muted)]">{skill.level}%</span>
                  </div>
                  <Progress 
                    percent={skill.level} 
                    showInfo={false} 
                    strokeColor={{
                      '0%': '#1890ff',
                      '100%': '#A371F7',
                    }}
                    trailColor="#161B22"
                    size="small"
                  />
                </div>
              ))}
            </div>
            
            <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-200 dark:border-[var(--border-subtle)]/50 flex flex-wrap gap-2">
               {category.skills.map(s => (
                  <Tag key={`${s.key}-tag`} className="bg-white dark:bg-[var(--bg-card)] border-gray-200 dark:border-[var(--border-subtle)] text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] m-0">
                     {s.name}
                  </Tag>
               ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};

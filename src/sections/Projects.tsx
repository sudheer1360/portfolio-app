import React, { useState, useMemo } from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { projectsData } from '../data/mockData';
import { Card, Tag, Select } from 'antd';
import { GithubOutlined, GlobalOutlined, FolderOpenOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const allTechStacks = useMemo(() => {
    const stacks = new Set<string>();
    projectsData.forEach(p => p.techStack.forEach(t => stacks.add(t)));
    return ['All', ...Array.from(stacks)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (filter === 'All') return projectsData;
    return projectsData.filter(p => p.techStack.includes(filter));
  }, [filter]);

  return (
    <SectionWrapper 
      id="projects" 
      title="Featured Projects" 
      subtitle="A selection of my recent frontend and full-stack work."
    >
      <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
        <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] text-sm">
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </p>
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-600 dark:text-[var(--text-secondary)]">Filter tightly:</span>
          <Select 
            value={filter}
            onChange={setFilter}
            options={allTechStacks.map(t => ({ label: t, value: t }))}
            className="w-40"
            dropdownStyle={{ backgroundColor: '#161B22', border: '1px solid #30363D' }}
            popupMatchSelectWidth={false}
          />
        </div>
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
            >
              <Card 
                className="h-full flex flex-col bg-gray-50 dark:bg-[var(--bg-base)] border border-gray-200 dark:border-[var(--border-subtle)] rounded-xl overflow-hidden hover:border-brand-primary/50 transition-all duration-300 group shadow-lg hover:shadow-[0_0_30px_rgba(24,144,255,0.1)] hover:-translate-y-2"
                bodyStyle={{ padding: '2rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-lg bg-white dark:bg-[var(--bg-card)] border border-gray-200 dark:border-[var(--border-subtle)] flex items-center justify-center text-brand-primary text-2xl group-hover:bg-brand-primary/10 transition-colors">
                    <FolderOpenOutlined />
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-gray-900 dark:text-[var(--text-primary)] transition-colors text-xl">
                        <GithubOutlined />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-brand-primary transition-colors text-xl">
                        <GlobalOutlined />
                      </a>
                    )}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-[var(--text-primary)] mb-3 group-hover:text-brand-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-200 dark:border-gray-200 dark:border-[var(--border-subtle)]/50">
                  {project.techStack.map(tech => (
                    <Tag key={tech} bordered={false} className="bg-transparent text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] text-xs m-0 px-0 mr-3">
                      {tech}
                    </Tag>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
};

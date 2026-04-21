import React from 'react';
import { SectionWrapper } from '../components/SectionWrapper';
import { Button } from 'antd';
import { DownloadOutlined, FilePdfOutlined } from '@ant-design/icons';

export const Resume: React.FC = () => {
  return (
    <SectionWrapper 
      id="resume" 
      title="Resume" 
      subtitle="View or download my full professional resume."
    >
      <div className="bg-[var(--bg-card)] border border-[var(--border-subtle)] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg max-w-4xl mx-auto">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-3xl">
            <FilePdfOutlined />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[var(--text-primary)] mb-1">Thadikonda_Sudheer_Resume.pdf</h3>
            <p className="text-[var(--text-secondary)] text-sm">Last updated: April 2026 • 150 KB</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <Button 
            size="large" 
             className="border-[var(--border-subtle)] text-[var(--text-primary)] hover:text-brand-primary hover:border-brand-primary flex items-center justify-center gap-2"
             onClick={() => {
               window.open('/Thadikonda_Sudheer_Resume.pdf', '_blank');
             }}
          >
            Preview
          </Button>
          <Button 
            type="primary" 
            size="large" 
            className="bg-brand-primary hover:bg-brand-primary/90 flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(24,144,255,0.3)]"
            onClick={() => {
               // In a real app, this would trigger an actual download
               const link = document.createElement('a');
               link.href = '/Thadikonda_Sudheer_Resume.pdf';
               link.download = 'Thadikonda_Sudheer_Resume.pdf';
               document.body.appendChild(link);
               link.click();
               document.body.removeChild(link);
            }}
          >
            Download <DownloadOutlined />
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

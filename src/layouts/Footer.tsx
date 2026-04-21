import React from 'react';
import { profileData } from '../data/mockData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-50 dark:bg-[var(--bg-base)] border-t border-gray-200 dark:border-[var(--border-subtle)] py-8 text-center mt-auto">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] text-sm">
          &copy; {currentYear} {profileData.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profileData.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-brand-primary transition-colors"
          >
            GitHub
          </a>
          <a
            href={profileData.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-brand-primary transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profileData.email}`}
            className="text-sm text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] hover:text-brand-primary transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

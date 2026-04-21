import React, { type ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col w-full selection:bg-brand-primary/30">
      <Navbar />
      <main className="flex-1 w-full bg-gray-50 dark:bg-[var(--bg-base)] text-gray-700 dark:text-[var(--text-primary)]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

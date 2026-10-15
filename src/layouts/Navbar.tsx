import React, { useState, useEffect } from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import { Button } from 'antd';
import { MenuOutlined, CloseOutlined, GithubOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Moon, Sun } from 'lucide-react';
import { profileData } from '../data/mockData';
import { useTheme } from '../context/themeContextValue';

const NAV_ITEMS = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Experience', id: 'experience' },
  { label: 'Projects', id: 'projects' },
  { label: 'Resume', id: 'resume' },
  { label: 'Contact', id: 'contact' },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(NAV_ITEMS.map((item) => item.id));
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth',
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? 'bg-[var(--bg-base)]/85 backdrop-blur-md border-[var(--border-subtle)] py-4 shadow-sm'
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tight text-[var(--text-primary)] hover:text-brand-primary transition-colors">
          Sudheer<span className="text-brand-primary">.dev</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-sm font-medium transition-colors hover:text-brand-primary ${
                activeSection === item.id ? 'text-brand-primary' : 'text-[var(--text-secondary)]'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="w-px h-6 bg-[var(--border-subtle)] mx-2" />
          <div className="flex items-center gap-3">
             <a href={profileData.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><GithubOutlined className="text-lg" /></a>
             <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"><LinkedinOutlined className="text-lg" /></a>
             <button onClick={toggleTheme} className="ml-2 text-[var(--text-secondary)] hover:text-brand-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full">
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
             </button>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={toggleTheme} className="text-[var(--text-secondary)] hover:text-brand-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full">
             {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button
            type="text"
            icon={isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[var(--bg-card)] border-b border-[var(--border-subtle)] px-6 py-4 flex flex-col gap-4 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`text-base font-medium py-2 border-b border-[var(--border-subtle)]/50 ${
                activeSection === item.id ? 'text-brand-primary' : 'text-[var(--text-secondary)]'
              }`}
            >
              {item.label}
            </a>
          ))}
            <div className="flex items-center gap-4 pt-2">
             <a href={profileData.github} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)]"><GithubOutlined className="text-xl" /></a>
             <a href={profileData.linkedin} target="_blank" rel="noreferrer" className="text-[var(--text-secondary)]"><LinkedinOutlined className="text-xl" /></a>
             <a href={`mailto:${profileData.email}`} className="text-[var(--text-secondary)]"><MailOutlined className="text-xl" /></a>
          </div>
        </div>
      )}
    </header>
  );
};

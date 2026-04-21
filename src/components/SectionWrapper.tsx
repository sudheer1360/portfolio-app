import React, { type ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  id,
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section id={id} className={`py-20 md:py-32 w-full flex justify-center ${className}`}>
      <div className="w-full max-w-6xl px-6 md:px-12">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12 md:mb-16"
          >
            {title && (
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-[var(--text-primary)] mb-2">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-[var(--text-secondary)] dark:text-[var(--text-muted)] dark:text-[var(--text-secondary)] text-base md:text-lg max-w-2xl">
                {subtitle}
              </p>
            )}
            {title && (
              <div className="h-1 w-20 bg-brand-primary mt-4 rounded-full" />
            )}
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

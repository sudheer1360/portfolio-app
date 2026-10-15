import { MainLayout } from './layouts/MainLayout';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { Projects } from './sections/Projects';
import { Resume } from './sections/Resume';
import { Contact } from './sections/Contact';
import { ThemeProvider } from './context/ThemeContext';
import { useTheme } from './context/themeContextValue';
import { ConfigProvider, theme as antdTheme } from 'antd';

const AppContent = () => {
  const { theme } = useTheme();
  
  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: '#1890ff',
          fontFamily: 'Inter, sans-serif'
        },
        components: {
          Card: {
             colorBgContainer: 'var(--bg-card)',
             colorBorderSecondary: 'var(--border-subtle)'
          }
        }
      }}
    >
      <MainLayout>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </MainLayout>
    </ConfigProvider>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;

# Thadikonda Sudheer - Full Stack Developer Portfolio

A production-quality, fully responsive personal developer portfolio web application. Crafted meticulously to showcase professional experience, modern full-stack development skills, and distinguished projects cleanly with an immersive dark & light mode aesthetic.

This project focuses on clean architecture, reusability, strict type-safety, and top-tier user experience (smooth scrolling, custom hooks, Framer Motion reveals, etc.).

## 🚀 Tech Stack

- **Framework**: [React 19](https://react.dev/) setup via [Vite](https://vitejs.dev/) for ultra-fast builds and HMR.
- **Language**: [TypeScript](https://www.typescriptlang.org/) for robust, strict-typing confidence.
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) mapped safely with global CSS variable injections for dynamic theming.
- **Component UI**: [Ant Design 6](https://ant.design/) components dynamically responding to light/dark system settings.
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid entrance reveals and micro-interactions.
- **Icons**: Lucide React & `@ant-design/icons`.

## ✨ Core Features

- **Theming**: A deeply integrated Light/Dark mode toggle context (`ThemeContext`) smoothly transitioning base layout and UI components natively with `localStorage` persistence.
- **Smooth Navigation**: Global scrollspy navigation dynamically tracking active view sections.
- **Data Encapsulation**: A dedicated layout relying strictly on data mapping from `src/data/mockData.ts`, emulating REST API responses.
- **Experience Timeline**: Vertical chronological map of your professional architecture and deployments.
- **Filterable Showcase**: Portfolio grid featuring categorized tech stacks with active filtering support.
- **Contact**: Form opens the visitor's email app with the message pre-filled (no backend required).
- **Native PDF Distribution**: Integrated static resume routing granting native previewing or immediate physical downloads.

## 📁 Architecture & Structure

```bash
portfolio-app/
├── public/                 # Static assets (Resume PDF, etc.)
├── reference_docs/         # Data extraction sources / Old PDFs
├── scripts/                # One-off migration/extraction scripts (dev only)
├── src/
│   ├── components/         # Reusable structural components (SectionWrappers)
│   ├── context/            # Global React Contexts (ThemeContext)
│   ├── data/               # Centralized data model mapping (mockData.ts)
│   ├── hooks/              # Custom application hooks (useScrollSpy)
│   ├── layouts/            # Global Layout, Navbar, Footer
│   ├── sections/           # Hero, About, Skills, Projects, Resume, Contact
│   ├── types/              # Global strictly-typed interfaces 
│   ├── App.tsx             # Assembly component overriding Antd Configs
│   ├── main.tsx            # Origin mount point
│   └── index.css           # Global V4 Tailwind variables & base injections
├── package.json            # Node/Vite dependencies
└── vite.config.ts          # Vite build optimizations
```

## 💻 Getting Started

This project operates on standard Node environments using standard npm pipelines. Ensure you have Node.js installed locally.

```bash
# 1. Navigate to the directory
cd portfolio-app

# 2. Install Dependencies
npm install

# 3. Spin up the local development server
npm run dev
```

Your portfolio will now be running actively on `http://localhost:5173/`. 

## 🛠 Customization Guidelines

It's been designed with a separation of concerns at its core.

Do you need to update any data regarding your experience, profile statement, skills tags, or new projects? You **do not** need to hunt down individual UI files.
Simple head to `src/data/mockData.ts` and modify your JSON arrays. The entire frontend maps this dynamically! 

Update your resume PDF over time? Just name the newly generated document `Thadikonda_Sudheer_Resume.pdf`, drop it into the `public/` folder, and instantly redeploy!

## 📦 Building for Production

Compile a highly-optimized static asset directory using:

```bash
npm run build
```

This outputs standard static HTML/CSS/JS chunks inside the `dist/` directory, ready to be hosted effortlessly on any CDN provider like Vercel, Netlify, GitHub Pages, or AWS S3. 

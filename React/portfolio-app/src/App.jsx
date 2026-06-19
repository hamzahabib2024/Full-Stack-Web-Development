import { useMemo, useState } from 'react'
import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ContactForm from './components/ContactForm.jsx'

const projectData = [
  {
    title: 'Productivity Dashboard',
    description: 'React dashboard with charts, dark mode, and task cards.',
    tags: ['React', 'CSS', 'API'],
    demo: '#',
  },
  {
    title: 'E-commerce Landing',
    description: 'Responsive product landing page with animations and pricing.',
    tags: ['React', 'Responsive', 'UX'],
    demo: '#',
  },
  {
    title: 'Budget Tracker',
    description: 'Client-side expense tracker with charts and category filters.',
    tags: ['React', 'Hooks', 'State'],
    demo: '#',
  },
]

function App() {
  const [theme, setTheme] = useState('light')
  const featured = useMemo(() => projectData.slice(0, 3), [])

  return (
    <div className={`app ${theme}`}>
      <Header theme={theme} onToggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />
      <main className="page-content">
        <section className="hero">
          <div>
            <p className="eyebrow">React Portfolio Project</p>
            <h1>Build modern user experiences with clean React architecture.</h1>
            <p>
              This project demonstrates reusable components, responsive layout, theme switching, and a polished portfolio UI.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href="#contact">Contact Me</a>
            </div>
          </div>
          <div className="hero-card">
            <span className="hero-badge">Full Stack React</span>
            <p>Fast client-side navigation, clean component design, and a modern portfolio presentation.</p>
          </div>
        </section>

        <section id="projects" className="project-grid">
          <h2>Featured Projects</h2>
          <div className="cards">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Get In Touch</h2>
          <p>Use this form to describe your next project or share a collaboration idea.</p>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default App

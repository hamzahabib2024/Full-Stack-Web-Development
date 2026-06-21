import { useMemo } from 'react'
import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import profileImage from './assets/profile.jpg'

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Express', 'Git', 'Responsive Design']

const projects = [
  {
    title: 'React Portfolio Website',
    description: 'A responsive personal portfolio built with React and Vite, featuring theme switching, reusable components, and a contact form.',
    tags: ['React', 'Vite', 'Responsive'],
    demo: '#',
  },
  {
    title: 'Weather App',
    description: 'A weather forecast UI that consumes API data and displays real-time weather information with interactive cards.',
    tags: ['JavaScript', 'API', 'CSS'],
    demo: '#',
  },
  {
    title: 'Digital Clock',
    description: 'A clean time display app that updates every second and demonstrates DOM manipulation and state management.',
    tags: ['JavaScript', 'DOM', 'UI'],
    demo: '#',
  },
]

const experience = [
  {
    role: 'Web Developer Student',
    company: 'Self-directed Projects',
    period: '2023 - Present',
    details: 'Designed and built web applications using HTML, CSS, JavaScript, and React. Focused on responsive layout, component reusability, and user-friendly interfaces.',
  },
]

const education = [
  {
    institution: 'Artificial Intelligence Program',
    degree: 'Student',
    period: '2023 - Present',
    details: 'Studying AI concepts alongside full stack web development to create intelligent, modern applications.',
  },
]

function App() {
  const featured = useMemo(() => projects, [])

  return (
    <div className="app dark">
      <Header />
      <main className="page-content">
        <section className="hero">
          <div>
            <p className="eyebrow">Muhammad Hamza Habib</p>
            <h1>AI student & Frontend Developer</h1>
            <p>
              Building polished web experiences with React, JavaScript, and responsive design. I am based in Islamabad, Pakistan, and I specialize in converting ideas into user-friendly applications.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#projects">Projects</a>
              <a className="button secondary" href="#contact">Contact</a>
            </div>
            <div className="hero-keypoints">
              <span className="hero-keypoint">Design system foundations</span>
              <span className="hero-keypoint">Performance-first frontend</span>
              <span className="hero-keypoint">Modern React experiences</span>
            </div>
          </div>
          <div className="hero-card profile-card">
            <img className="profile-photo" src={profileImage} alt="Muhammad Hamza Habib profile" />
            <span className="hero-badge">Resume Summary</span>
            <p><strong>Email:</strong> mhamzahabib@gmail.com</p>
            <p><strong>Location:</strong> Islamabad, Pakistan</p>
            <p><strong>Focus:</strong> Web development with React, modern UI, and practical learning projects.</p>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-copy">
            <h2>About Me</h2>
            <p>
              I am a motivated developer studying Artificial Intelligence while building full stack web projects. I enjoy creating interfaces that are both functional and visually polished.
            </p>
          </div>
          <div className="about-grid">
            <div>
              <h3>Skills</h3>
              <ul>
                {skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3>Education</h3>
              <ul>
                {education.map((item) => (
                  <li key={item.institution}>
                    <strong>{item.institution}</strong>
                    <p>{item.degree}</p>
                    <p>{item.period}</p>
                  </li>
                ))}
              </ul>
            </div>
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

        <section id="experience" className="experience-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-card">
                <h3>{item.role}</h3>
                <p className="timeline-meta">
                  {item.company} • {item.period}
                </p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="capabilities" className="capabilities-section">
          <h2>Core Capabilities</h2>
          <div className="capabilities-grid">
            <article className="capability-card">
              <h3>UI Design</h3>
              <p>Pixel-perfect layout, professional spacing, and premium visual hierarchy for modern products.</p>
            </article>
            <article className="capability-card">
              <h3>React Development</h3>
              <p>Reusable components, clean JSX structure, and polished interface behavior.</p>
            </article>
            <article className="capability-card">
              <h3>Responsive Web</h3>
              <p>Adaptive layouts and cross-device usability for a refined presentation on mobile and desktop.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <h2>Contact</h2>
          <p>If you would like to collaborate or learn more about my work, send a message below.</p>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default App

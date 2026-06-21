import { useMemo } from 'react'
import Header from './components/Header.jsx'
import ProjectCard from './components/ProjectCard.jsx'
import ContactForm from './components/ContactForm.jsx'
import profileImage from './assets/profile.jpg'

const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/muhammad-hamza-habib-622243303/' },
  { label: 'GitHub', href: 'https://github.com/hamzahabib2024' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/Muhammad_Hamza_Habib/' },
]

const stats = [
  { label: 'CGPA', value: '3.42 / 4.0' },
  { label: 'Projects', value: '8+' },
  { label: 'LeetCode', value: '60+ solved' },
]

const technicalSkills = {
  'Languages & Frameworks': ['Python', 'Java', 'C++', 'JavaScript (ES6+)', 'PHP', 'React.js', 'HTML5', 'CSS3', 'LaTeX'],
  'AI / Machine Learning': ['TensorFlow', 'scikit-learn', 'Keras', 'pandas', 'NumPy', 'Matplotlib', 'Feature Engineering', 'Model Evaluation', 'Cross-validation'],
  'Computer Vision': ['OpenCV', 'Haar Cascade', 'Edge Detection', 'Object Detection', 'Image Segmentation'],
  'Web Development': ['React.js', 'PHP', 'REST APIs', 'AJAX', 'DOM Manipulation', 'MVC Architecture', 'Responsive Design'],
  Databases: ['MySQL', 'Oracle SQL', 'MongoDB', 'Data Warehousing', 'ETL Pipelines'],
}

const projects = [
  {
    title: 'Data Warehouse System',
    description: 'Built a full Bronze-Silver-Gold ETL pipeline using Oracle SQL for analytics-ready business tables.',
    tags: ['Oracle SQL', 'ETL', 'Data Warehousing'],
    demo: 'https://github.com/hamzahabib2024/data_warehouse_oracle_sql_project',
    github: 'https://github.com/hamzahabib2024/data_warehouse_oracle_sql_project',
  },
  {
    title: 'Breast Cancer Classification',
    description: 'Engineered a machine learning pipeline on the Wisconsin dataset achieving 97.37% accuracy.',
    tags: ['Python', 'scikit-learn', 'ML'],
    demo: 'https://github.com/hamzahabib2024',
    github: 'https://github.com/hamzahabib2024',
  },
  {
    title: 'Real-Time Face Detection',
    description: 'Created a live OpenCV-based face detection system with Haar Cascade preprocessing and bounding box visualization.',
    tags: ['OpenCV', 'Computer Vision', 'Python'],
    demo: 'https://github.com/hamzahabib2024/Computer_Vision/tree/main/Lab_mid',
    github: 'https://github.com/hamzahabib2024/Computer_Vision/tree/main/Lab_mid',
  },
  {
    title: 'Full-Stack Web Portfolio',
    description: 'A responsive React portfolio with PHP backend utilities, AJAX form handling, and dynamic UI experience.',
    tags: ['React', 'JavaScript', 'PHP'],
    demo: 'https://github.com/hamzahabib2024/Full-Stack-Web-Development',
    github: 'https://github.com/hamzahabib2024/Full-Stack-Web-Development',
  },
]

const experience = [
  {
    role: 'Web Developer Student',
    company: 'Self-directed Projects',
    period: '2023 - Present',
    details: 'Designed web applications and AI-powered workflows using React, JavaScript, PHP, Python, and computer vision techniques.',
  },
]

const education = [
  {
    institution: 'COMSATS University Islamabad',
    degree: 'BS Artificial Intelligence',
    period: '2024 – 2028',
    details: 'CGPA: 3.42 / 4.0 | 5th Semester',
  },
  {
    institution: 'Government College Peshawar',
    degree: 'FSc (Pre-Engineering)',
    period: '2021 – 2023',
    details: 'Marks: 90%',
  },
  {
    institution: 'University Public School and College Chakdara',
    degree: 'Matriculation',
    period: '2019 – 2021',
    details: 'Marks: 97%',
  },
]

const certifications = [
  { title: 'Agentic AI Bootcamp', issuer: 'NCAI', link: 'https://www.linkedin.com/in/muhammad-hamza-habib-622243303/overlay/Certifications/576072714/treasury/?profileId=ACoAAE10o7oBEedM5I_khasfrSqj2dO5QlsumE4' },
  { title: 'Programming for Everyone (Python)', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/GULCASY3JITM' },
  { title: 'Python Data Structures', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/verify/42IEU0ZL9B39' },
  { title: 'AI ka Taaruf', issuer: 'CAIS Society', link: 'https://www.linkedin.com/in/muhammad-hamza-habib-622243303/overlay/Certifications/1625088111/treasury/?profileId=ACoAAE10o7oBEedM5I_khasfrSqj2dO5QlsumE4' },
]

function App() {
  const featured = useMemo(() => projects, [])

  return (
    <div className="app dark">
      <Header />
      <main className="page-content">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Muhammad Hamza Habib</p>
            <h1>AI student, Web Developer, and Problem Solver</h1>
            <p className="hero-intro">
              Results-driven BS Artificial Intelligence student at COMSATS University Islamabad with hands-on experience in Python, machine learning, computer vision, and modern web development.
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">Explore Projects</a>
              <a className="button secondary" href="#contact">Let's Talk</a>
            </div>

            <div className="contact-row">
              <a className="contact-pill" href="mailto:mhamzahabib8@gmail.com">mhamzahabib8@gmail.com</a>
              <a className="contact-pill" href="tel:+923453323332">+92 345 3323332</a>
            </div>

            <div className="stat-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-card">
                  <p className="stat-value">{stat.value}</p>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="scroll-indicator">
              <span />
              <p>Scroll to discover more</p>
            </div>

            <div className="social-links">
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <aside className="hero-card profile-card">
            <img className="profile-photo" src={profileImage} alt="Muhammad Hamza Habib" />
            <span className="hero-badge">Profile Snapshot</span>
            <p>
              AI student with strong full-stack web development skills, passionate about building intelligent applications, data pipelines, and polished user experiences.
            </p>
            <ul className="profile-list">
              <li><strong>Location:</strong> Islamabad, Pakistan</li>
              <li><strong>Field:</strong> Artificial Intelligence & Web Development</li>
              <li><strong>Tools:</strong> React, Python, TensorFlow, SQL, OpenCV</li>
            </ul>
          </aside>
        </section>

        <section id="about" className="about-section">
          <div className="section-header">
            <h2>Professional Summary</h2>
            <p>
              Results-driven AI student at COMSATS University Islamabad (CGPA 3.42/4.0) with experience in Machine Learning, Computer Vision, and Full-Stack Web Development.
            </p>
          </div>
          <div className="summary-grid">
            <article className="summary-card">
              <h3>AI & Machine Learning</h3>
              <p>
                Built classification pipelines, performed feature engineering, and validated models with cross-validation for reliable production-ready performance.
              </p>
            </article>
            <article className="summary-card">
              <h3>Full-Stack Web</h3>
              <p>
                Developed responsive web applications using React.js, JavaScript, PHP, and REST APIs with clean UI and strong usability.
              </p>
            </article>
            <article className="summary-card">
              <h3>Computer Vision</h3>
              <p>
                Created real-time OpenCV systems for image processing, face detection, and object localization in live video streams.
              </p>
            </article>
          </div>
        </section>

        <section id="education" className="education-section">
          <div className="section-header">
            <h2>Education</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article key={item.institution} className="education-item">
                <h3>{item.degree}</h3>
                <p className="education-meta">{item.institution} • {item.period}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="skills-section">
          <div className="section-header">
            <h2>Technical Skills</h2>
          </div>
          <div className="skill-category-grid">
            {Object.entries(technicalSkills).map(([title, items]) => (
              <article key={title} className="skill-card">
                <h3>{title}</h3>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item} className="skill-pill">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="project-grid">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Selected work that combines AI, data engineering, and full-stack development.</p>
          </div>
          <div className="cards">
            {featured.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section id="experience" className="experience-section">
          <div className="section-header">
            <h2>Experience</h2>
            <p>Practical project experience applying AI and web technologies to real-world solutions.</p>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={item.role} className="timeline-card">
                <h3>{item.role}</h3>
                <p className="timeline-meta">{item.company} • {item.period}</p>
                <p>{item.details}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="certifications" className="certifications-section">
          <div className="section-header">
            <h2>Certifications & Achievements</h2>
          </div>
          <div className="certification-grid">
            {certifications.map((item) => (
              <article key={item.title} className="certification-card">
                <h3>{item.title}</h3>
                <p>{item.issuer}</p>
                <a href={item.link} target="_blank" rel="noreferrer">View Certificate</a>
              </article>
            ))}
          </div>
        </section>

        <section id="additional" className="additional-section">
          <div className="section-header">
            <h2>Additional Highlights</h2>
          </div>
          <div className="additional-grid">
            <article className="additional-card">
              <h3>Research Interests</h3>
              <p>Reviewing Green AI literature while exploring sustainable AI and practical machine learning use cases.</p>
            </article>
            <article className="additional-card">
              <h3>Languages</h3>
              <p>English, Urdu, Pashto (native)</p>
            </article>
            <article className="additional-card">
              <h3>Databases</h3>
              <p>MySQL, Oracle SQL, MongoDB, ETL architecture, and data warehousing workflows.</p>
            </article>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="section-header">
            <h2>Contact</h2>
            <p>Ready to collaborate? Send a message and let’s build something impactful together.</p>
          </div>
          <ContactForm />
        </section>
      </main>
    </div>
  )
}

export default App

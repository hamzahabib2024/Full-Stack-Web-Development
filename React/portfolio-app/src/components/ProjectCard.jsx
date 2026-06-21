function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <div className="project-links">
        <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
          View Project
        </a>
        {project.github && (
          <a className="project-link secondary" href={project.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

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
      <a className="project-link" href={project.demo} target="_blank" rel="noreferrer">
        View Demo
      </a>
    </article>
  )
}

export default ProjectCard

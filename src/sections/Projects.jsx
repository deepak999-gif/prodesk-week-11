import SectionTitle from "../components/SectionTitle";

const projects = [
  {
    title: "Transformer From Scratch",
    tag: "DEEP LEARNING",
    description:
      "A transparent implementation of the Transformer architecture designed for understanding."
  },
  {
    title: "ML Visual Laboratory",
    tag: "EDUCATION",
    description:
      "Interactive visualizations for understanding machine learning concepts."
  },
  {
    title: "Research Toolkit",
    tag: "RESEARCH",
    description:
      "Tools for running reproducible experiments and comparing machine learning models."
  }
];

export default function Projects() {

  return (

    <section
      id="projects"
      className="section"
    >

      <SectionTitle
        eyebrow="PROJECTS"
        title="Things built in the laboratory."
        description="Software, experiments, visualizations, and open-source work."
      />

      <div className="project-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.title}
          >

            <span>
              {project.tag}
            </span>

            <h3>
              {project.title}
            </h3>

            <p>
              {project.description}
            </p>

            <a href="#">
              View project →
            </a>

          </article>

        ))}

      </div>

    </section>

  );
}
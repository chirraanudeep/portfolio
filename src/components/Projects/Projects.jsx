import "./Projects.css";

const projects = [
  {
    title: "Deep Fake Detection",
    description: "A web app to detect deepfake videos using machine learning.",
    tech: ["React", "Node.js", "MongoDB", "Python", "Express.js", "cloudinary"],
  },
  {
    title: "E-commerce Website",
    description: "A responsive e-commerce website with an admin panel.",
    tech: ["React", "Express.js", "MongoDB", "Node.js"],
  },
  {
    title: "Stomach Disease Prediction",
    description: "Developed a deep learning model which will predict the stomach disease.",
    tech: ["Python", "model using ResNet-50"],
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <ul className="project-tech">
              {project.tech.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

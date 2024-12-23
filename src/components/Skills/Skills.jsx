import "./Skills.css";

const skills = [
  { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "Bootstrap"] },
  { category: "Backend", items: ["Node.js", "Express.js", "MongoDB", "MySQL"] },
  { category: "Tools", items: ["Git", "Postman", "ThunderClient", "VsCode"] },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((group, index) => (
          <div className="skill-group" key={index}>
            <h3>{group.category}</h3>
            <ul>
              {group.items.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

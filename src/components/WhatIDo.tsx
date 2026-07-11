import { skillGroups } from "../data/portfolio";
import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <section className="skills-section section-container" id="skills">
      <div className="skills-heading">
        <span>Technical Skills</span>
        <h2>
          Skills <strong>& Technologies</strong>
        </h2>
        <p>Tools and fundamentals I use to build AI-backed software systems.</p>
      </div>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <div className="skill-card-top">
              <h3>{group.title}</h3>
              <span>{group.items.length}</span>
            </div>
            <div className="skill-tags">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
      <div className="skills-note">Always learning new technologies</div>
    </section>
  );
};

export default WhatIDo;

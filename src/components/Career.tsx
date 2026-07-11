import { experience } from "../data/portfolio";
import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My experience <span>&</span>
          <br /> education
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((item) => (
            <div className="career-info-box" key={`${item.role}-${item.period}`}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{item.role}</h4>
                  <h5>{item.company}</h5>
                </div>
                <h3>{item.period}</h3>
              </div>
              <p>
                <span>{item.location}</span>
                {item.summary}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;

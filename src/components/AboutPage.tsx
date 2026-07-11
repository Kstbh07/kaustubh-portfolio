import { MdArrowBack, MdLocationOn, MdSchool } from "react-icons/md";
import { education, profile } from "../data/portfolio";
import "./styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <div className="aboutpage-header">
        <a href="/" className="aboutpage-back" data-cursor="disable">
          <MdArrowBack /> Back to Home
        </a>
        <h1>About Me</h1>
      </div>

      <div className="aboutpage-content">
        <div className="aboutpage-grid">
          <div className="aboutpage-photo-frame">
            <img src="/images/placeholder.webp" alt={profile.name} />
            <div>
              <span>{profile.handle}</span>
              <strong>{profile.name}</strong>
            </div>
          </div>

          <div className="aboutpage-info">
            <div className="aboutpage-card">
              <h2>Who am I?</h2>
              <p>
                I am a Computer Science undergraduate focused on AI/ML, backend
                systems, and practical software products. I like building things
                that move from idea to working implementation, whether that is a
                3D GitHub dependency explorer, an algorithm visualizer, or an
                open-source contribution.
              </p>
              <div className="aboutpage-meta">
                <span>
                  <MdLocationOn /> {profile.location}
                </span>
                <span>
                  <MdSchool /> CGPA 7.82
                </span>
              </div>
            </div>

            <div className="aboutpage-summary-card">
              <h3>Summary</h3>
              <p>{profile.summary}</p>
            </div>
          </div>
        </div>

        <div className="aboutpage-education">
          <h2>Education</h2>
          <div className="aboutpage-edu-timeline">
            {education.map((item) => (
              <div className="aboutpage-edu-item" key={item.title}>
                <span>{item.period}</span>
                <h4>{item.title}</h4>
                <p>{item.place}</p>
                <small>{item.details}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

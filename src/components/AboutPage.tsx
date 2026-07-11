import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { education, profile } from "../data/portfolio";
import Cursor from "./Cursor";
import Footer from "./Footer";
import "./styles/AboutPage.css";

const AboutPage = () => {
  return (
    <div className="aboutpage">
      <Cursor />
      {/* Navbar */}
      <div className="aboutpage-nav">
        <a href="/" className="aboutpage-nav-logo" data-cursor="disable">
          <span className="aboutpage-nav-dollar">$</span> {profile.shortName}{" "}
          <span className="aboutpage-nav-flag">--dev</span>
        </a>
        <ul className="aboutpage-nav-links">
          <li>
            <a href="/about" className="aboutpage-nav-active" data-cursor="disable">
              &lt;ABOUT /&gt;
            </a>
          </li>
          <li>
            <a href="/#work" data-cursor="disable">&lt;PROJECTS/&gt;</a>
          </li>
          <li>
            <a href="/#skills" data-cursor="disable">&lt;SKILLS/&gt;</a>
          </li>
          <li>
            <a href="/#experience" data-cursor="disable">&lt;EXPERIENCE/&gt;</a>
          </li>
          <li>
            <a href="/#contact" data-cursor="disable">&lt;CONTACT/&gt;</a>
          </li>
        </ul>
      </div>

      {/* Terminal Header */}
      <div className="aboutpage-content">
        <div className="aboutpage-terminal-header">
          <code>$ cat about.md</code>
        </div>

        {/* Main Grid */}
        <div className="aboutpage-grid">
          {/* Left Column - Stats + Photo */}
          <div className="aboutpage-left">
            <div className="aboutpage-stats-badge">
              <span className="aboutpage-stats-number">1.5+</span>
              <div>
                <strong>Years</strong>
                <strong>Experience</strong>
                <span>Full-Stack & AI Developer</span>
              </div>
            </div>

            <div className="aboutpage-photo-frame">
              <img src="/images/kaustubh-profile.jpg" alt={profile.name} />
              <div className="aboutpage-photo-overlay"></div>
              <span className="aboutpage-float-badge aboutpage-float-badge-top">Backend & AI</span>
              <span className="aboutpage-float-badge aboutpage-float-badge-right">Full-Stack Dev</span>
              <span className="aboutpage-float-badge aboutpage-float-badge-handle">#kstbh07</span>
              <span className="aboutpage-float-badge aboutpage-float-badge-bottom">DSA · 400+</span>
            </div>
          </div>

          {/* Center Column - About */}
          <div className="aboutpage-center">
            <div className="aboutpage-card">
              <h2>About me</h2>
              <h3 className="aboutpage-hello">
                Hello, I'm <span>{profile.name}</span>
              </h3>
              <p className="aboutpage-role">(Full-Stack & AI Developer)</p>
              <p className="aboutpage-desc">
                Hi! I'm {profile.shortName} — a full-stack developer passionate
                about building scalable applications and weaving AI/ML into
                real-world solutions.
              </p>
              <p className="aboutpage-desc">
                I thrive on exploring modern stacks, optimizing performance, and
                shipping work that makes an impact.
              </p>
              <div className="aboutpage-actions">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="aboutpage-resume-btn"
                  data-cursor="disable"
                >
                  📄 Resume
                </a>
                <a href={profile.github} target="_blank" rel="noreferrer" className="aboutpage-social-icon" data-cursor="disable">
                  <FaGithub />
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" className="aboutpage-social-icon" data-cursor="disable">
                  <FaLinkedinIn />
                </a>
                <a href={`mailto:${profile.email}`} className="aboutpage-social-icon" data-cursor="disable">
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="aboutpage-right">
            <h2 className="aboutpage-edu-title">Education</h2>
            <div className="aboutpage-edu-timeline">
              {education.map((item) => (
                <div className="aboutpage-edu-item" key={item.title}>
                  <h4>{item.title}</h4>
                  {item.period && <span className="aboutpage-edu-period">({item.period})</span>}
                  <p>{item.place}</p>
                  <small className="aboutpage-edu-detail">{item.details}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutPage;

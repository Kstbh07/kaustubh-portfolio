import { MdCopyright } from "react-icons/md";
import {
  FaGithub,
  FaLinkedinIn,
  FaXTwitter,
  FaInstagram,
} from "react-icons/fa6";
import { profile } from "../data/portfolio";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container section-container">
        <div className="footer-grid">
          {/* Branding Column */}
          <div className="footer-brand">
            <a href="/#" className="footer-logo" data-cursor="disable">
              {profile.name}
            </a>
            <p className="footer-brand-desc">
              I'm a Full-Stack Developer passionate about building scalable
              backend systems and integrating AI to create smarter web
              experiences.
            </p>
            <div className="footer-social-icons">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="Twitter"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://instagram.com/kstbh07"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <h4>QUICK LINKS</h4>
            <ul>
              <li>
                <a href="#about" data-cursor="disable">
                  About
                </a>
              </li>
              <li>
                <a href="#work" data-cursor="disable">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" data-cursor="disable">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" data-cursor="disable">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-links-col">
            <h4>RESOURCES</h4>
            <ul>
              <li>
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="#experience" data-cursor="disable">
                  Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-links-col">
            <h4>SERVICES</h4>
            <ul>
              <li>
                <a href="#work" data-cursor="disable">
                  Projects
                </a>
              </li>
              <li>
                <a href="/about" data-cursor="disable">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" data-cursor="disable">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="footer-copyright">
          <span className="footer-copyright-text">
            <MdCopyright /> 2026{" "}
            <strong>{profile.name}</strong>. All rights reserved.
          </span>
          <span className="footer-copyright-tagline">
            <span className="footer-terminal-prompt">&gt;</span> Made with
            Next.js, TypeScript &amp; zero regard for deadlines{" "}
            <span className="footer-cursor-blink">█</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { MdArrowOutward, MdCopyright, MdEmail, MdLocationOn, MdPhone, MdWork } from "react-icons/md";
import { profile } from "../data/portfolio";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>

        {/* Info Cards Row */}
        <div className="contact-info-cards">
          <div className="contact-info-card">
            <div className="contact-info-icon contact-info-icon-email">
              <MdEmail />
            </div>
            <div className="contact-info-text">
              <strong>Email</strong>
              <a href={`mailto:${profile.email}`} data-cursor="disable">
                {profile.email}
              </a>
              <span>Let's start a conversation</span>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon contact-info-icon-phone">
              <MdPhone />
            </div>
            <div className="contact-info-text">
              <strong>Phone</strong>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} data-cursor="disable">
                {profile.phone}
              </a>
              <span>Available during office hours</span>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon contact-info-icon-location">
              <MdLocationOn />
            </div>
            <div className="contact-info-text">
              <strong>Location</strong>
              <span className="contact-info-value">Open to Remote</span>
            </div>
          </div>
          <div className="contact-info-card">
            <div className="contact-info-icon contact-info-icon-status">
              <MdWork />
            </div>
            <div className="contact-info-text">
              <strong>Status</strong>
              <span className="contact-info-value">Open to Opportunities</span>
            </div>
          </div>
        </div>

        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a href={`mailto:${profile.email}`} data-cursor="disable">
                <MdEmail /> {profile.email}
              </a>
            </p>
            <p>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} data-cursor="disable">
                <MdPhone /> {profile.phone}
              </a>
            </p>
            <p>
              <span className="contact-line">
                <MdLocationOn /> {profile.location}
              </span>
            </p>
            <h4>Education</h4>
            <p>B.Tech CSE, Artificial Intelligence and Machine Learning</p>
            <p>Gyan Ganga Institute of Technology & Sciences (RGPV)</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={profile.leetcode}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LeetCode <MdArrowOutward />
            </a>
            <a
              href={profile.codeforces}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Codeforces <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> By <span>{profile.name}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

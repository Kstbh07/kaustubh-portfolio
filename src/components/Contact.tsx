import {
  MdEmail,
  MdLocationOn,
  MdWork,
} from "react-icons/md";
import {
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";
import { profile } from "../data/portfolio";
import Footer from "./Footer";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-section section-container" id="contact">
        <div className="contact-container">
          {/* Header */}
          <div className="contact-header">
            <span className="contact-badge">
              <MdEmail className="contact-badge-icon" />
              CONTACT
            </span>
            <h2 className="contact-title">
              Get in <span>Touch</span>
            </h2>
            <p className="contact-subtitle">
              Feel free to reach out for collaborations or just a friendly hello.
            </p>
          </div>

          {/* Info Cards Row */}
          <div className="contact-info-cards">
            <div className="contact-info-card">
              <div className="contact-info-icon">
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
              <div className="contact-info-icon">
                <FaLinkedinIn />
              </div>
              <div className="contact-info-text">
                <strong>LinkedIn</strong>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  View Profile
                </a>
                <span>Connect professionally</span>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaGithub />
              </div>
              <div className="contact-info-text">
                <strong>GitHub</strong>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  View Repositories
                </a>
                <span>Check my work</span>
              </div>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">
                <FaInstagram />
              </div>
              <div className="contact-info-text">
                <strong>Instagram</strong>
                <a
                  href="https://instagram.com/kstbh07"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                >
                  Follow me
                </a>
                <span>Daily updates</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <form
              className="contact-form"
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get("name") as string;
                const email = formData.get("email") as string;
                const subject = formData.get("subject") as string;
                const message = formData.get("message") as string;
                const mailtoLink = `mailto:${profile.email}?subject=${encodeURIComponent(
                  subject || "Portfolio Contact"
                )}&body=${encodeURIComponent(
                  `Hi, I'm ${name} (${email}).\n\n${message}`
                )}`;
                window.open(mailtoLink, "_blank");
              }}
            >
              <div className="contact-form-left">
                <div className="contact-form-group">
                  <label htmlFor="contact-name">Your Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-email">Email Address</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="contact-form-group">
                  <label htmlFor="contact-subject">Subject</label>
                  <input
                    type="text"
                    id="contact-subject"
                    name="subject"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Location & Status Badges */}
                <div className="contact-badges-row">
                  <div className="contact-status-badge">
                    <MdLocationOn className="contact-status-badge-icon" />
                    <div>
                      <strong>Location</strong>
                      <span>Open to Remote</span>
                    </div>
                  </div>
                  <div className="contact-status-badge">
                    <MdWork className="contact-status-badge-icon" />
                    <div>
                      <strong>Status</strong>
                      <span>Open to Opportunities</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-form-right">
                <div className="contact-form-group contact-form-group-message">
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={8}
                    required
                  ></textarea>
                </div>
              </div>
            </form>

            {/* Bottom row: Follow + Availability + Send */}
            <div className="contact-bottom-row">
              <div className="contact-follow">
                <span className="contact-follow-label">Follow me on</span>
                <div className="contact-follow-icons">
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
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    aria-label="GitHub"
                  >
                    <FaGithub />
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
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    data-cursor="disable"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>

              <div className="contact-availability">
                <div className="contact-availability-item">
                  <span className="contact-dot contact-dot-orange"></span>
                  Open for freelance work &amp; full-time opportunities
                </div>
                <div className="contact-availability-item">
                  <span className="contact-dot contact-dot-green"></span>
                  Available for remote positions worldwide
                </div>
              </div>

              <button
                type="submit"
                className="contact-send-btn"
                onClick={() => {
                  const form = document.querySelector(
                    ".contact-form"
                  ) as HTMLFormElement;
                  form?.requestSubmit();
                }}
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Contact;

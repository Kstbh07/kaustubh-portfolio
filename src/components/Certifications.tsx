import { MdVerified } from "react-icons/md";
import { certifications } from "../data/portfolio";
import "./styles/PortfolioSections.css";

const Certifications = () => {
  return (
    <section className="certifications-section section-container" id="certifications">
      <div className="portfolio-section-heading">
        <span>Credentials</span>
        <h2>
          <strong>Certifications</strong>
        </h2>
        <p>Professional learning across AI, cloud, SQL, GitHub, and languages.</p>
      </div>
      <div className="cert-grid">
        {certifications.map((cert) => (
          <article className="cert-card" key={`${cert.issuer}-${cert.title}`}>
            <div className="cert-icon">
              <MdVerified />
            </div>
            <div>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;

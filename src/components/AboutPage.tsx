import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { education, profile } from "../data/portfolio";
import Cursor from "./Cursor";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./styles/AboutPage.css";

const EXPERIENCE_START_DATE = new Date(2025, 0, 11);

const getExperienceYears = () => {
  const now = new Date();
  const elapsedMonths =
    (now.getFullYear() - EXPERIENCE_START_DATE.getFullYear()) * 12 +
    now.getMonth() -
    EXPERIENCE_START_DATE.getMonth() -
    (now.getDate() < EXPERIENCE_START_DATE.getDate() ? 1 : 0);
  const halfYearSteps = Math.max(0, Math.floor(elapsedMonths / 6));
  const years = halfYearSteps / 2;

  return Number.isInteger(years) ? String(years) : years.toFixed(1);
};

type GalaxyParticle = {
  angle: number;
  radius: number;
  size: number;
  speed: number;
  armOffset: number;
  depth: number;
};

const AboutGalaxy = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    const pointer = { x: 0, y: 0 };
    const particles: GalaxyParticle[] = Array.from({ length: 260 }, (_, index) => {
      const arm = index % 5;
      const radius = 24 + Math.random() * 540;

      return {
        angle: Math.random() * Math.PI * 2,
        radius,
        size: 0.7 + Math.random() * 1.9,
        speed: 0.00016 + Math.random() * 0.00032,
        armOffset: arm * ((Math.PI * 2) / 5),
        depth: 0.45 + Math.random() * 0.85,
      };
    });

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onPointerMove = (event: PointerEvent) => {
      pointer.x = (event.clientX / Math.max(width, 1) - 0.5) * 2;
      pointer.y = (event.clientY / Math.max(height, 1) - 0.5) * 2;
    };

    const draw = (time: number) => {
      context.clearRect(0, 0, width, height);
      const centerX = width * 0.5 + pointer.x * 18;
      const centerY = height * 0.48 + pointer.y * 12;
      const maxRadius = Math.max(width, height) * 0.62;

      const coreGradient = context.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        maxRadius
      );
      coreGradient.addColorStop(0, "rgba(94, 234, 212, 0.32)");
      coreGradient.addColorStop(0.18, "rgba(20, 184, 166, 0.16)");
      coreGradient.addColorStop(0.55, "rgba(59, 130, 246, 0.07)");
      coreGradient.addColorStop(1, "rgba(5, 8, 16, 0)");
      context.fillStyle = coreGradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        const spin = time * particle.speed;
        const spiral = particle.radius * 0.014;
        const angle = particle.angle + particle.armOffset + spiral + spin;
        const perspective = particle.depth + Math.sin(angle + time * 0.00018) * 0.14;
        const x =
          centerX +
          Math.cos(angle) * particle.radius * perspective +
          pointer.x * particle.depth * 34;
        const y =
          centerY +
          Math.sin(angle) * particle.radius * 0.38 * perspective +
          pointer.y * particle.depth * 24;
        const alpha = Math.max(0.18, Math.min(0.92, 1 - particle.radius / 680));

        context.beginPath();
        context.fillStyle =
          index % 7 === 0
            ? `rgba(255, 255, 255, ${alpha})`
            : `rgba(94, 234, 212, ${alpha})`;
        context.arc(x, y, particle.size * perspective, 0, Math.PI * 2);
        context.fill();

        if (index % 11 === 0) {
          context.beginPath();
          context.strokeStyle = `rgba(94, 234, 212, ${alpha * 0.13})`;
          context.lineWidth = 1;
          context.moveTo(centerX, centerY);
          context.lineTo(x, y);
          context.stroke();
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove);
    animationFrame = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="aboutpage-galaxy-canvas" aria-hidden="true" />;
};

const AboutPage = () => {
  const experienceYears = getExperienceYears();

  return (
    <div className="aboutpage">
      <Cursor />
      <AboutGalaxy />
      <Navbar />

      <div className="aboutpage-content">
        <div className="aboutpage-grid">
          <div className="aboutpage-left">
            <div className="aboutpage-photo-frame">
              <img src="/images/kaustubh-profile.jpeg" alt={profile.name} />
            </div>
          </div>

          <div className="aboutpage-center">
            <div className="aboutpage-card">
              <h2>About me</h2>
              <h3 className="aboutpage-hello">
                Hello, I'm <span>{profile.name}</span>
              </h3>
              <p className="aboutpage-role">(AIML Engineer | Full-Stack Developer | Database Administrator)</p>
              <p className="aboutpage-desc">
                Hi! I'm {profile.shortName} - a full-stack developer passionate
                about building scalable applications and weaving AI/ML into
                real-world solutions.
              </p>
              <p className="aboutpage-desc">
                I thrive on exploring modern stacks, optimizing performance, and
                shipping work that makes an impact.
              </p>
              <div className="aboutpage-experience-card">
                <span className="aboutpage-experience-number">{experienceYears}+</span>
                <div>
                  <strong>Years Experience</strong>
                  <small>Full-Stack & AI Developer</small>
                </div>
              </div>
              <div className="aboutpage-actions">
                <a
                  href={profile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="aboutpage-resume-btn"
                  data-cursor="disable"
                >
                  Resume
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

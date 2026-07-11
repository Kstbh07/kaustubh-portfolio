import { MdArrowForward } from "react-icons/md";
import { profile } from "../data/portfolio";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">{profile.summary}</p>
        <a
          className="about-know-more"
          href="/about"
          data-cursor="disable"
        >
          Know more about me <MdArrowForward />
        </a>
      </div>
    </div>
  );
};

export default About;

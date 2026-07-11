import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/portfolio";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              KAUSTUBH
              <br />
              <span>SEN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>B.Tech CSE</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">AI/ML</div>
              <div className="landing-h2-2">Backend</div>
            </h2>
            <h2>
              <div className="landing-h2-info">{profile.role}</div>
              <div className="landing-h2-info-1">{profile.secondaryRole}</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

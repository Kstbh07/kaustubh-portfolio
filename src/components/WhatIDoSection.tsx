import "./styles/WhatIDoSection.css";

const WhatIDoSection = () => {
  return (
    <section className="whatIDO" id="whatido">
      <div className="what-box-in">
        <div className="what-left">
          <h2>
            WHAT
            <br />
            I <span>DO</span>
          </h2>
        </div>
        <div className="what-right">
          <div className="what-card">
            <div className="what-card-inner">
              <h3>AI & MACHINE LEARNING</h3>
              <p className="what-card-sub">Building Intelligent Systems</p>
              <p className="what-card-desc">
                NLP pipelines, ML models, and AI-powered backends - turning
                research into production-ready applications that solve real
                problems.
              </p>
            </div>
          </div>
          <div className="what-card">
            <div className="what-card-inner">
              <h3>BUILD & SCALE</h3>
              <p className="what-card-sub">Shipping AI in Production</p>
              <p className="what-card-desc">
                I build the systems behind it: APIs, databases, and full-stack
                products - production-ready, not slide decks.
              </p>
            </div>
          </div>
          <div className="what-card">
            <div className="what-card-inner">
              <h3>OPEN SOURCE</h3>
              <p className="what-card-sub">Community & Collaboration</p>
              <p className="what-card-desc">
                Active contributor across open-source programs, improving codebases
                through feature work and collaborative development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;

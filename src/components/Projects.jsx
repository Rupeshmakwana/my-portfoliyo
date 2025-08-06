export default function Projects() {
  return (
    <section id="resume" className="grey-section">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>Professional Journey</h1>
        </div>
      </div>

      {/* Work Experience */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">

            <div className="timeline-block">
              <div className="timeline-ico"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-header">
                <h3>Software Engineer</h3>
                <p>march 2022 – Apr 2025</p>
              </div>
              <div className="timeline-content">
                <h4>Codiant Yash Technologies</h4>
                <p>Developed Laravel apps, integrated Twilio, Stripe, SendGrid, and Agora, optimized queries, mentored junior developers.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-header">
                <h3>Software Engineer</h3>
                <p>feb 2021 – march 2022</p>
              </div>
              <div className="timeline-content">
                <h4>Samosys Technologies pvt. Ltd.</h4>
                <p>Integrate a bing web search third party based project givitra and iggit for product delivery and track products.</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Education */}
      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Education</h2>
        </div>
        <div className="col-twelve">
          <div className="timeline-wrap">
            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>B.C.A.</h3>
                <p>2013</p>
              </div>
              <div className="timeline-content">
                <h4>Prestige Institute Of Management Dewas</h4>
                <p>Transitioned to web development via self-learning & hands-on practice.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>XII</h3>
                <p>2010</p>
              </div>
              <div className="timeline-content">
                <h4>Swatantrata higher secondary school, Indore</h4>
                <p>MP Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

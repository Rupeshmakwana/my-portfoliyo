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
                <p>Dec 2022 – Apr 2025</p>
              </div>
              <div className="timeline-content">
                <h4>Codiant Yash Technologies</h4>
                <p>Developed Laravel and CodeIgniter apps, integrated Twilio, Stripe, SendGrid, and Agora; optimized queries; mentored junior developers.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-header">
                <h3>PHP Developer</h3>
                <p>Jun 2019 – Nov 2022</p>
              </div>
              <div className="timeline-content">
                <h4>Catalyser Eduventures</h4>
                <p>Led ERP and LMS development using CodeIgniter; integrated Paytm, EazyPay, and PayUMoney; created REST APIs for educational platforms.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-header">
                <h3>Web Developer</h3>
                <p>Oct 2018 – Jun 2019</p>
              </div>
              <div className="timeline-content">
                <h4>IT Spark Technologies</h4>
                <p>Worked on e-commerce and listing platforms using CodeIgniter and WordPress; delivered responsive UI with Bootstrap and jQuery.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico"><i className="fa fa-briefcase"></i></div>
              <div className="timeline-header">
                <h3>Web Developer</h3>
                <p>Jun 2016 – Oct 2018</p>
              </div>
              <div className="timeline-content">
                <h4>ESP SoftTech Pvt. Ltd.</h4>
                <p>Developed multilingual e-commerce platforms and WordPress websites; built reusable components and modular layouts.</p>
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
                <h3>B.Sc.</h3>
                <p>2004</p>
              </div>
              <div className="timeline-content">
                <h4>PMB Gujarati Science College, DAVV Indore</h4>
                <p>Transitioned to web development via self-learning & hands-on practice.</p>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-ico">
                <i className="fa fa-graduation-cap"></i>
              </div>
              <div className="timeline-header">
                <h3>XII</h3>
                <p>2001</p>
              </div>
              <div className="timeline-content">
                <h4>RRMB Gujarati School, Indore</h4>
                <p>MP Board</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

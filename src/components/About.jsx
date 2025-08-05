import Image from "next/image";

export default function About() {
  return (
    <section id="about">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>About</h5>
            <h1>Let me introduce myself.</h1>
            <div className="intro-info">
              <Image src="/images/profile-pic.jpg" alt="Mukesh Kirholiya" width={100} height={100} />
              <p className="lead">
                Full Stack Developer with 8+ years of experience in PHP, Laravel, CodeIgniter, MySQL, REST APIs,
                and building scalable backend systems across domains like e-commerce, education, and healthcare.
              </p>
            </div>
          </div>
        </div>

        <div className="row about-content">
          <div className="col-six tab-full">
            <h3>Profile</h3>
            <ul className="info-list">
              <li><strong>Fullname:</strong> <span>Mukesh Kirholiya</span></li>
              <li><strong>Birth Date:</strong> <span>December 13, 1982</span></li>
              <li><strong>Job:</strong> <span>Full Stack Developer (Laravel, CodeIgniter, NEXT)</span></li>
              <li><strong>LinkedIn:</strong> <span>linkedin.com/in/mukesh-kirholiya-3661b520</span></li>
              <li><strong>Email:</strong> <span>mukesh2009@gmail.com</span></li>
            </ul>
          </div>
          <div className="col-six tab-full">
            <h3>Skills</h3>
            <ul className="skill-bars">
              <li><div className="progress percent90"><span>90%</span></div><strong>Laravel</strong></li>
              <li><div className="progress percent85"><span>85%</span></div><strong>CodeIgniter</strong></li>
              <li><div className="progress percent80"><span>80%</span></div><strong>MySQL</strong></li>
              <li><div className="progress percent75"><span>75%</span></div><strong>jQuery / JS</strong></li>
              <li><div className="progress percent80"><span>80%</span></div><strong>Bootstrap</strong></li>
              <li><div className="progress percent70"><span>75%</span></div><strong>Docker</strong></li>
              <li><div className="progress percent75"><span>70%</span></div><strong>AWS</strong></li>
            </ul>
          </div>
        </div>
      </section>
  );
}
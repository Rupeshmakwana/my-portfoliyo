export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="row section-intro">
          <div className="col-twelve">
            <h5>Contact</h5>
            <h1>I'd Love To Hear From You.</h1>
            <p className="lead">I'm always open to discussing new opportunities. If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
          </div>
        </div>
        <div className="row contact-form">
          <div className="col-twelve">
            {/* <form name="contactForm" id="contactForm" method="post" action="">
              <fieldset>
                <div className="form-field">
                  <input name="contactName" type="text" id="contactName" placeholder="Name"  minLength="2" required="" aria-required="true" />
                </div>
                <div className="form-field">
                  <input name="contactEmail" type="email" id="contactEmail" placeholder="Email"  required="" aria-required="true" />
                </div>
                <div className="form-field">
                  <input name="contactSubject" type="text" id="contactSubject" placeholder="Subject"  />
                </div>
                <div className="form-field">
                  <textarea name="contactMessage" id="contactMessage" placeholder="message" rows="10" cols="50" required="" aria-required="true"></textarea>
                </div>
                <div className="form-field">
                  <button className="submitform">Submit</button>
                  <div id="submit-loader">
                    <div className="text-loader">Sending...</div>
                    <div className="s-loader">
                      <div className="bounce1"></div>
                      <div className="bounce2"></div>
                      <div className="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form> */}

            {/* <div id="message-warning"></div>
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!<br />
            </div> */}
          </div>
        </div>

        <div className="row contact-info">
          <div className="col-four tab-full">
            <div className="icon">
              <i className="fa fa-map-marker"></i>
            </div>
            <h5>Where to find me</h5>
            <p>
              Indore<br />
              452010 Madhya Pradesh
            </p>

          </div>

          <div className="col-four tab-full collapse">
            <div className="icon">
              <i className="fa fa-envelope"></i>
            </div>
            <h5>Email Me At</h5>
            <p>
              makwanarupesh089@gmail.com
            </p>

          </div>

          <div className="col-four tab-full">
            <div className="icon">
              <i className="fa fa-phone"></i>
            </div>
            <h5>Call Me At</h5>
            <p>
              Phone: (+91) 7024440887
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
export default function Services() {
  return (
    <section id="services">
      <div className="overlay">

      </div>
      <div className="row section-intro">
        <div className="col-twelve ">
          <h5>Services</h5>
          <h1>What I Can Do For You</h1>
          <p className="lead">
            Laravel dev, API integrations, scalable backend design, payment gateway setup, cloud deployments.
          </p>
        </div>
        <div className="row services-content">
          <div id="owl-slider" className="owl-carousel services-list owl-theme" >
            <div className="owl-wrapper-outer">
              <div className="owl-wrapper" >
                <div className="col-four" >
                  <div className="service">

                    <span className="icon">
                      <i className="fa fa-code fa-stack-1x fa-inverse">
                      </i>
                    </span>

                    <div className="service-content">

                      <h3>Web Application Development</h3>

                      <p className="desc">
                        Fast, responsive and engaging apps that bring your ideas to life.
                      </p>

                    </div>

                  </div>
                </div>
                <div className="col-four" >
                  <div className="service">

                    <span className="icon">
                      <i className="fa fa-cogs fa-stack-1x fa-inverse">
                      </i>
                    </span>

                    <div className="service-content">

                      <h3>API Integration &amp; Development</h3>

                      <p className="desc">
                        REST API integration. REST API development with Laravel.
                      </p>

                    </div>

                  </div>
                </div>
                <div className="col-four" >
                  <div className="service">

                    <span className="icon">
                      <i className="fa fa-database fa-stack-1x fa-inverse">
                      </i>
                    </span>

                    <div className="service-content">

                      <h3>Database Design</h3>

                      <p className="desc">
                        Database architectures in MongoDB or MySQL, always aiming for performance, scale and stability.
                      </p>

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
        <div className="row services-content">
          <div className="owl-carousel services-list owl-theme" >
            <div className="owl-wrapper-outer"></div>
            <div className="col-four" >
              <div className="service">

                <span className="icon">
                  <i className="fa fa-dollar fa-stack-1x fa-inverse">
                  </i>
                </span>

                <div className="service-content">

                  <h3>Payment Gateway Integration</h3>

                  <p className="desc">
                    Integration with the most popular Payment Gateways such as Stripe and Paypal.
                  </p>

                </div>

              </div>
            </div>
            <div className="col-four">
              <div className="service">

                <span className="icon">
                  <i className="fa fa-cloud fa-stack-1x fa-inverse">
                  </i>
                </span>

                <div className="service-content">

                  <h3>Cloud Integration</h3>

                  <p className="desc">
                    Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku and Amazon AWS.
                  </p>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    </section >
  );
}
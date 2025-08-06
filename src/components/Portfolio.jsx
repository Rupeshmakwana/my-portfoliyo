import Image from "next/image";

export default function Portfolio() {
    return (
        <>
            <section id="portfolio">
                <div className="row section-intro">
                    <div className="col-twelve">
                        <h5>Portfolio</h5>
                        <h1>Some of My Work</h1>
                    </div>
                </div>
                <div className="row portfolio-content">
                    <div className="col-twelve">
                        <div id="folio-wrapper" className="block-1-2 block-mob-full stack">
                            {/* Assetlyst */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/assetlyst.png" alt="Assetlyst" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Assetlyst</h3>
                                                <span className="folio-types">https://assetlyst.com/</span><br />
                                                <span className="folio-types">• A real state property based platform.</span>
                                                <span className="folio-types">• Features: Sold ,Purchased and leased any property of USA.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Javascript</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Mightyfitness */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/mightyfitness.png" alt="Mightyfitness" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Mightyfitness</h3>
                                                <span className="folio-types">https://mightyfitness.meetmighty.com/</span><br />
                                                <span className="folio-types">Health and Fitness based Platform</span>
                                                <span className="folio-types">• This website use for health, fitness and diet service provide with user can 
purchase fitness related product and take a subscription</span>
                                                <span className="folio-types">• Features: purchase fitness product, Search and filtering products.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap, Javascript, Jquery</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Bussiness Summit */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/africa-summit.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Africa Summit</h3>
                                                <span className="folio-types">https://africa-summit-qa.codiantdev.com</span><br/>
                                                <span className="folio-types">• Enabled data collection from stakeholders to support research and policy discussions.</span>
                                                <span className="folio-types">• Integrated responses into the summit platform for analysis and presentation.</span>
                                                <span className="folio-types">• Admin dashboard with analytics, session tracking, and lead capture.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, Bootstrap, MySQL, REST API, firebase notification.</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* BeforeAfter */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/beforeafter.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">BeforeAfterPro</h3>
                                                <span className="folio-types">https://beforeafter.au</span><br />
                                                <span className="folio-types">• Designed to showcase transformation case studies for aesthetic clinics.</span>
                                                <span className="folio-types">• Features: Slider-based transformations, user authentication, and admin dashboard.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, jQuery, Bootstrap, MySQL, REST API, in app purchase, pub-sub server-notification webhook-setup, firebase notification.</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Mybillionlms */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/mybillionlms.png" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Mybillionlms</h3>
                                                <span className="folio-types">https://www.mybillioninc.com/</span><br />
                                                <span className="folio-types">• School, student, courses, quizzes and assignments management.</span>
                                                <span className="folio-types">• Features: Course management, user registration, progress tracking.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap, javascript, jquery</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

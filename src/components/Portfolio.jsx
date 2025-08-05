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
                            {/* Foodingram */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/foodingram.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Foodingram</h3>
                                                <span className="folio-types">https://foodingram.codiantprod.com</span><br />
                                                <span className="folio-types">• A food delivery platform with a focus on local restaurants.</span>
                                                <span className="folio-types">• Features: Restaurant listings, user reviews, order tracking, and payment integration.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, React</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* UACRDC */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/uacrdc.jpg" alt="UACRDC" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">UACRCC</h3>
                                                <span className="folio-types">https://uacrdc.com</span><br />
                                                <span className="folio-types">Electronics eCommerce Platform</span>
                                                <span className="folio-types">• Complete e-commerce solution for electronics products. RBAC integration.</span>
                                                <span className="folio-types">• Features: Secure checkout, product filtering, inventory control, customer accounts.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap</span>
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

                            {/* innovate-classroom */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/innovate-classroom.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Innovate-classroom</h3>
                                                <span className="folio-types">https://innovate-classroom-qa.codiantdev.com</span><br />
                                                <span className="folio-types">• School, student, courses, quizzes and assignments management.</span>
                                                <span className="folio-types">• Features: Course management, user registration, progress tracking.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* Chess Learners */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/chesslearners.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Chess Learners LMS</h3>
                                                <span className="folio-types">https://chesslearners.codiantprod.com</span><br /><span className="folio-types">Chess Learning Management System</span>
                                                <span className="folio-types">• A platform for chess enthusiasts to learn and improve their skills.</span>
                                                <span className="folio-types">• Features: Course management, user registration, progress tracking, and quizzes.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, React, MySQL, Bootstrap, firebase notification.</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* krishnacoming */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/krishnacoming.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">krishnacoming</h3>
                                                <span className="folio-types">https://krishnacoming.com</span><br />
                                                <span className="folio-types">Online Garbh Sanskar Platform</span>
                                                <span className="folio-types">• Provides resources and courses for prenatal education and live sessions with experts.</span>
                                                <span className="folio-types">• Features: Course management, user registration, progress tracking.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap, firebase notification.</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* catalyser */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/catalyser.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Catalyser</h3>
                                                <span className="folio-types">https://catalyser.in</span><br />
                                                <span className="folio-types">• Institute Agency Platform</span>
                                                <span className="folio-types">• Features: Course management, student enrollment, progress tracking.</span>
                                                <span className="folio-types">• Tech Stack: Codeigniter, MySQL, Bootstrap</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* ntseguru */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/ntseguru.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">Ntseguru</h3>
                                                <span className="folio-types">https://ntseguru.in</span><br />
                                                <span className="folio-types">• Educational platform for NTSE exam preparation.</span>
                                                <span className="folio-types">• Features: Mock tests, study materials, performance analytics.</span>
                                                <span className="folio-types">• Tech Stack: Laravel, MySQL, Bootstrap</span>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </div>

                            {/* itspark */}
                            <div className="bgrid folio-item">
                                <div className="item-wrap">
                                    <Image src="/images/portfolio/itspark.jpg" alt="Project" width={1200} height={800} />
                                    <a className="overlay">
                                        <div className="folio-item-table">
                                            <div className="folio-item-cell">
                                                <h3 className="folio-title">ITSpark</h3>
                                                <span className="folio-types">https://itsparktechnology.com</span><br />
                                                <span className="folio-types">• IT Services and Solutions Platform</span>
                                                <span className="folio-types">• Features: Service listings, client testimonials, contact forms.</span>
                                                <span className="folio-types">• Tech Stack: Codeigniter, MySQL, Bootstrap</span>
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

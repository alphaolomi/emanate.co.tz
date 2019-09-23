import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div>
      <section>
        <div class="header-content-area">
          <div class="container">
            <div class="header-pattern-1">
              <img src="img/header-pattern-1.png" alt="" />
            </div>
            <div class="header-pattern-2">
              <img src="img/header-pattern2.png" alt="" />
            </div>
            <div class="header-animation-area">
              <div class="row">
                <div class="col-xl-12 col-lg-12 col-md-12">
                  <div class="intro-text">
                    <h1 data-aos="slide-right" data-aos-anchor-placement="top-bottom" data-aos-delay="700"
                      data-aos-duration="1200">Creativity is a most <br /> valuable asset</h1>
                    <p data-aos="fade-in" data-aos-anchor-placement="top-bottom" data-aos-delay="1500"
                      data-aos-duration="1200">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
									<br />
                      Quod ab tenetur itaque ullam repellendus ipsum! Nesciunt, <br /> deserunt porro nihil
									culpa illo deleniti.</p>
                    <div class="learnmore" data-aos="fade-in" data-aos-anchor-placement="top-bottom"
                      data-aos-delay="1500" data-aos-duration="1200">
                      <a href="contact.php" class="skill-btn">hire us</a>
                    </div>
                  </div>
                </div>
                <div class="header-1-artwork">
                  <div class="layer">
                  </div><img src="img/header-1-artwork.png" alt="" />
                  <div class="layer-1" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    data-aos-delay="800" data-aos-duration="1000">
                    <img src="img/man-in-board.png" alt="" />
                  </div>
                  <div class="layer-2" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
                    data-aos-delay="800" data-aos-duration="1000">
                    <img src="img/man-in-pc.png" alt="" />
                  </div>
                  <div class="layer-3">
                    <img src="img/spin.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="home-about-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="home-about-image">
                  <img src="img/home-about.jpg" alt="" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="section-heading-1 home-about-text">
                  <h4>About US</h4>
                  <h3>Know interesting things</h3>
                  <p>At Emanate, we all come to work every day because we want to solve the biggest problem in Tanzania. Everyone is guessing. Developers don’t know what apps to build, how to monetize them, or even what to price them at. Advertisers & brands don’t know where their target users are, how to reach them, or even how much they need to spend in order to do so</p>
                  <div class="section-button">
                    <a href="about-us.php">Read More</a>
                  </div>
                  <div class="e-pattern">
                    <img src="img/expertise/e-pattern.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="services-area">
          <svg id="curve" data-name="layer 1" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1416.99 174.01">
            <path class="cls-1" d="M0,280.8S283.66,59,608.94,163.56s437.93,150.57,808,10.34V309.54H0V280.8Z"
              transform="translate(0 -135.53)" />
          </svg>
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-5 d-flex align-items-center">
                <div class="section-heading-2 section-heading-2-p">
                  <h4>our services</h4>
                  <h3>Services We provides</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis,
                    sit amet hendrerit metus vulputate id. Nulla laoreet maximus feugiat. Nullam rhoncus,
                    orci vitae convallis venenatis Lorem ipsum dolor sit amet, consectetur adipiscing elit.
								Nullam placerat rutrum turpis, sit amet hendrerit metus.</p>
                  <div class="section-button">
                    <a href="contact.php">get service</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-7">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 d-flex align-items-center">
                    <div class="single-service" data-aos="fadein" data-aos-anchor-placement="top-bottom"
                      data-aos-delay="100" data-aos-duration="1000">
                      <div class="service-icon">
                        <img src="img/service/1.png" alt="" />
                      </div>
                      <div class="service-text">
                        <h3>Website Design and Development</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat
											rutrum turpis.</p>
                      </div>
                      <div class="servive-p-1">
                        <img src="img/service/service-p-1.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 margin-top-sb-30">
                    <div class="row">
                      <div class="col-xl-12">
                        <div class="single-service">
                          <div class="service-icon">
                            <img src="img/service/3.png" alt="" />
                          </div>
                          <div class="service-text">
                            <h3>Web App Development</h3>
                            <p>We build cloud data driven systems using the best web technologies ensuring security, integrety and reliability.</p>
                          </div>
                        </div>
                      </div>
                      <div class="col-xl-12">
                        <div class="single-service service-mt-30" data-aos="fadein"
                          data-aos-anchor-placement="top-bottom" data-aos-delay="300"
                          data-aos-duration="1000">
                          <div class="service-icon">
                            <img src="img/service/2.png" alt="" />
                          </div>
                          <div class="service-text">
                            <h3>UI/UX Design</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
													placerat rutrum turpis.</p>
                          </div>
                          <div class="servive-p-2">
                            <img src="img/service/service-p-3.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="portfolio-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="section-heading-2 portfolio-pattern">
                  <h4>Case Study</h4>
                  <h3>Our Recent Work</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam placerat rutrum turpis,
								sit amet hendrerit metus vulputate id.</p>
                  <div class="p-pattern">
                    <img src="img/portfolio/p-pattern.png" alt="" />
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="portfolio-button-area">
                  <div class="section-button">
                    <a href="portfolio.php">view more</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="row portfolio-item-slider">
              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="http://mbashaholdings.com/"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>Mbasha Holdings Ltd</h5>
                    <p>A full tailor made website for Mbasha Holdings Ltd  Arusha Leading Furniture Company.</p>
                  </div>
                </div>
              </div>
              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="#"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>Expect In Africa Safari Tour Company</h5>
                    <p>Website Designing for Expect In Africa Safari Tour company.</p>
                  </div>
                </div>
              </div>
              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="#"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>Optimax Motors Company Tz</h5>
                    <p>Website for Optimax Motors Tz a company which imports cars from Japan and UK.</p>
                  </div>
                </div>
              </div>
              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="http://c-smart.jamesemanuel.me/"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>C-Smart Travel Company Ltd.</h5>
                    <p>Website for C-Smart Travel company which provide meet & assist service in Kilimanjaro International Airport (JRO) & Arusha Airport (ARK).</p>
                  </div>
                </div>
              </div>
              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="http://fmf.astatine.co.tz/"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>Flaviana Matata Foundation</h5>
                    <p>Flaviana Matata Foundation Website Redesigning.</p>
                  </div>
                </div>
              </div>



              <div class="single-portfolio-item">
                <img src="img/portfolio/p1.png" alt="" />
                <div class="portfolio-item-content">
                  <div class="item-icon">
                    <a href="http://ihi.or.tz"><i class="fa fa-link"></i></a>
                  </div>
                  <div class="item-text">
                    <h5>Ifakara Health Institute (IHI)</h5>
                    <p>A system that assists Ifakara Health Institute (IHI) in administering and automating the Contract process. Functions can include grant discovery, budget planning, peer collaboration, regulatory compliance, proposal submission, administrative reporting and project tracking.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section>
        <div class="expertise-area">
          <div class="container">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6">
                <div class="expertise-image">
                  <img src="img/expertise/expertise.png" alt="" />
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 d-flex align-items-center">
                <div class="section-heading-1 home-expertise-text">
                  <h4>Experties</h4>
                  <h3>Design & Developing</h3>
                  <p>We believe in the power of open source software; We are committed to creating it, refining it, certifying it for reliability and promoting its use. As well as launching and running our own projects, we contribute staff, code and funding to many more.</p>
                  <div class="section-button">
                    <a href="contact.php">get quote</a>
                  </div>
                  <div class="e-pattern">
                    <img src="img/expertise/e-pattern.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  </Layout >
)

export default IndexPage

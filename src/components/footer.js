import React from "react"

const Footer = () => (

    <section id="footer-fixed">
        <div className="big-footer">
            <div className="container">
                <div className="row">
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-logo">
                            <a href="index.php">
                                <img src="img/footer-logo.png" alt="" />
                            </a>
                            <p>
                                Our success is measured by your success.
                            For us it’s not just creating something that looks great, it needs <br />to deliver results
                                for you.
                        </p>
                        </div>
                        <div className="social">
                            <ul>
                                <li><a className="footer-socials" href="#"><i className="fa fa-instagram"></i></a></li>
                                <li><a className="footer-socials" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="footer-socials" href="#"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-heading">
                            <h3>quick links</h3>
                        </div>
                        <div className="footer-content">
                            <ul>
                                <li><a href="about-us.php">about us</a></li>
                                <li><a href="contact.php">contact us</a></li>
                                <li><a href="#">privacy policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-heading">
                            <h3>Latest works</h3>
                        </div>
                        <div className="footer-content">
                            <ul>
                                <li><a href="http://csmarttravel.com">C Smart Website</a></li>
                                <li><a href="http://mbashaholdings.com/all">Mbasha Holdings Ltd</a></li>
                                <li><a href="http://expectinafricasafari.com/">Expect In Africa Safari</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                        <div className="footer-heading">
                            <h3>Let us know you were here</h3>
                        </div>
                        <div className="footer-content footer-cont-mar-40">
                            <form action="#">
                                <input id="leadgenaration" type="email" placeholder="Enter your email" />
                                <input id="subscribe" type="submit" value="send" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <p>All rights reserved @ Emanate {new Date().getFullYear()}.</p>
        </footer>
    </section>
)


export default Footer

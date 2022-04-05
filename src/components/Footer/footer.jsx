

export default function Footer(){
    return (
        <>
            <footer id="dk-footer" className="dk-footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className="dk-footer-box-info">
                        <a href="index.html" className="footer-logo">
                            <img src="images/footer_logo.png" alt="footer_logo" className="img-fluid" />
                        </a>
                        <p className="footer-info-text">
                           Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.
                        </p>
                        <div className="footer-social-link">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-facebook"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-twitter"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-google-plus"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-linkedin"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-instagram"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    
                    <div className="footer-awarad">
                        <img src="images/icon/best.png" alt=""/>
                        <p>Best Design Company 2019</p>
                    </div>
                </div>
        
                <div className="col-md-12 col-lg-8">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="contact-us">
                                <div className="contact-icon">
                                    <i className="fa fa-map-o" aria-hidden="true"></i>
                                </div>
                                
                                <div className="contact-info">
                                    <h3>Jaipur India</h3>
                                    <p>5353 Road Avenue</p>
                                </div>
                                
                            </div>
                           
                        </div>
                
                        <div className="col-md-6">
                            <div className="contact-us contact-us-last">
                                <div className="contact-icon">
                                    <i className="fa fa-volume-control-phone" aria-hidden="true"></i>
                                </div>
                                
                                <div className="contact-info">
                                    <h3>95 711 9 5353</h3>
                                    <p>Give us a call</p>
                                </div>
                                
                            </div>
                           
                        </div>
                
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget footer-left-widget">
                                <div className="section-heading">
                                    <h3>Useful Links</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <ul>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">Services</a>
                                    </li>
                                    <li>
                                        <a href="#">Projects</a>
                                    </li>
                                    <li>
                                        <a href="#">Our Team</a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">Contact us</a>
                                    </li>
                                    <li>
                                        <a href="#">Blog</a>
                                    </li>
                                    <li>
                                        <a href="#">Testimonials</a>
                                    </li>
                                    <li>
                                        <a href="#">Faq</a>
                                    </li>
                                </ul>
                            </div>

                        </div>
                
                        <div className="col-md-12 col-lg-6">
                            <div className="footer-widget">
                                <div className="section-heading">
                                    <h3>Subscribe</h3>
                                    <span className="animate-border border-black"></span>
                                </div>
                                <p>
                                Reference site about Lorem Ipsum, giving information on its origins, as well.</p>
                                <form action="#">
                                    <div className="form-row">
                                        <div className="col dk-footer-form">
                                            <input type="email" className="form-control" placeholder="Email Address"/>
                                            <button type="submit">
                                                <i className="fa fa-send"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                         
                            </div>

                        </div>
                
                    </div>
            
                </div>
        
            </div>
           
        </div>



        <div className="copyright">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <span>Copyright © 2019, All Right Reserved Seobin</span>
                    </div>
            
                    <div className="col-md-6">
                        <div className="copyright-menu">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">Terms</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
            
                </div>
        
            </div>
        </div>
      
    
        <div id="back-to-top" className="back-to-top">
            <button className="btn btn-dark" title="Back to Top" /*style="display: block;"*/>
                <i className="fa fa-angle-up"></i>
            </button>
        </div>
        
</footer>
        </>
    );
}
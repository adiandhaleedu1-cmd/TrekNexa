import { Mountain } from "lucide-react";
// import { Facebook, Instagram, Linkedin, Twitter, } from "lucide-react";
import { Link } from "react-router-dom";
import "./Footer.css"

function Footer() {
    return (
        <footer className="treknexa-footer">
            <div className="container">
                <div className="row g-4">
                    <div className="clo-lg-5 col-md-6">

                        <Link to="/" className="footer-brand">
                            <Mountain size={28} />
                            <span>TrekNexa</span>
                        </Link>

                        <p className="footer-description">
                            Discover Maharashtra's heritage trails, explore historic forts,
                            and plan your next trekking adventure with intelligent
                            recommendations.
                        </p>

                        <div className="footer-socials">
                            <a href="#" aria-label="Instagram">
                                {/* <Instagram size={19} /> */}
                                Instagram
                            </a>

                            <a href="#" aria-label="Facebook">
                                {/* <Facebook size={19} /> */}
                                Facebook
                            </a>

                            <a href="#" aria-label="Twitter">
                                {/* <Twitter size={19} /> */}
                                Twitter
                            </a>

                            <a href="#" aria-label="LinkedIn">
                                {/* <Linkedin size={19} /> */}
                                Linkedin
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Explore</h5>

                        <ul className="footer-links">
                            <li>
                                <Link to="/explore">Explore Forts</Link>
                            </li>
                            <li>
                                <Link to="/plan-trek">Plan Trek</Link>
                            </li>
                            <li>
                                <Link to="/treks">Popular Treks</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-heading">Company</h5>

                        <ul className="footer-links">
                            <li>
                                <Link to="/about">About Us</Link>
                            </li>
                            <li>
                                <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                                <Link to="/privacy">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-heading">Start Exploring</h5>

                        <p className="footer-cta-text">
                            Find your next adventure across Maharashtra's beautiful
                            landscapes.
                        </p>

                        <Link to="/plan-trek" className="btn footer-cta-btn">
                            Plan Your Trek
                        </Link>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© 2026 TrekNexa. All rights reserved.</p>

                    <p>Explore. Trek. Discover.</p>
                </div>

            </div>
        </footer >
    )
};

export default Footer;
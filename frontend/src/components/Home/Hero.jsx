import { ArrowRight, Map } from "lucide-react";
import heroHomeImg from "../../assets/images/heroHome.png";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero"
            style={{ backgroundImage: `url(${heroHomeImg})` }}>

            <div className="hero-overlay"></div>

            <div className="container position-relative">
                <div className="row align-items-center min-vh-100">
                    <div className="col-lg-7">
                        <div className="hero-content">

                            <span className="hero-tag">
                                <Map size={18} />
                                Explore Maharashtra
                            </span>

                            <h1 className="hero-title">
                                Discover Maharashtra's
                                <span> Fort Heritage</span>
                            </h1>

                            <p className="hero-description">
                                Discover historic forts, explore scenic trekking routes,
                                and plan your next adventure with context-aware
                                recommendations and real-time weather insights.
                            </p>

                            <div className="hero-actions">
                                <button className="btn hero-primary-btn">
                                    Explore Forts
                                    <ArrowRight size={18} />
                                </button>

                                <button className="btn hero-secondary-btn">
                                    Plan My Trek
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
import { Compass, Map, ShieldCheck, Sparkles } from "lucide-react";
import "./WhyTrekNexa.css";

const benefits = [
    {
        id: 1,
        icon: Sparkles,
        title: "Personalized Recommendations",
        description:
            "Get trekking routes recommended according to your fitness level, experience, available time, and preferences.",
    },
    {
        id: 2,
        icon: Map,
        title: "Context-Aware Planning",
        description:
            "Recommendations consider route characteristics and relevant conditions instead of treating every trek the same.",
    },
    {
        id: 3,
        icon: ShieldCheck,
        title: "Safety-Oriented Insights",
        description:
            "Understand important route conditions, weather information, and potential warnings before starting your trek.",
    },
    {
        id: 4,
        icon: Compass,
        title: "Discover Heritage",
        description:
            "Explore Maharashtra's historic forts and trekking destinations while discovering their heritage and surroundings.",
    },
];

function WhyTrekNexa() {
    return (
        <section className="why-treknexa">
            <div className="container">

                <div className="row align-items-center g-5">

                    <div className="col-lg-5">
                        <span className="section-tag">
                            Why TrekNexa
                        </span>

                        <h2 className="section-title">
                            Trek Smarter.
                            <span> Explore Better.</span>
                        </h2>

                        <p className="why-treknexa-description">
                            TrekNexa brings together your preferences, route
                            information, and relevant conditions to help you
                            discover trekking routes that fit your adventure.
                        </p>

                        <button className="btn why-treknexa-btn">
                            Start Planning
                        </button>
                    </div>

                    <div className="col-lg-7">
                        <div className="row g-4">

                            {benefits.map((benefit) => {
                                const Icon = benefit.icon;

                                return (
                                    <div className="col-md-6" key={benefit.id} >
                                        <div className="benefit-card">

                                            <div className="benefit-icon">
                                                <Icon size={22} />
                                            </div>

                                            <h3 className="benefit-title">
                                                {benefit.title}
                                            </h3>

                                            <p className="benefit-description">
                                                {benefit.description}
                                            </p>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhyTrekNexa;
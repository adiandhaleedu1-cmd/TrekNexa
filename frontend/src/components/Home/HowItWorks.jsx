import { ArrowRight, CheckCircle, Map, Route, SlidersHorizontal, } from "lucide-react";
import "./HowItWorks.css";

const steps = [
    {
        id: 1,
        icon: SlidersHorizontal,
        number: "01",
        title: "Tell Us Your Preferences",
        description: "Choose your fitness level, trekking experience, available time, and preferences.",
    },
    {
        id: 2,
        icon: Map,
        number: "02",
        title: "We Analyze the Context",
        description: "TrekNexa considers route difficulty, duration, weather, and available trek information.",
    },
    {
        id: 3,
        icon: Route,
        number: "03",
        title: "Get Smart Recommendations",
        description: "Receive ranked trekking routes that match your profile and current conditions.",
    },
    {
        id: 4,
        icon: CheckCircle,
        number: "04",
        title: "Choose Your Trek",
        description: "Compare routes, understand why they are recommended, and plan your adventure.",
    },
];

function HowItWork() {
    return (
        <section className="how-it-works">
            <div className="container">

                <div className="how-it-works-header text-center">
                    <span className="section-tag">
                        Simple & Intelligent
                    </span>

                    <h2 className="section-title">
                        How TrekNexa Works
                    </h2>

                    <p className="section-description">
                        From your preferences to your next adventure, TrekNexa
                        helps you make a more informed trekking decision.
                    </p>
                </div>


                <div className="row g-4">
                    {steps.map((step) => {
                        const Icon = step.icon;

                        return (
                            <div className="col-lg-3 col-md-6" key={step.id}>
                                <div className="how-it-works-card">

                                    <div className="step-top">
                                        <div className="step-icon">
                                            <Icon size={24} />
                                        </div>

                                        <span className="step-number">
                                            {step.number}
                                        </span>
                                    </div>

                                    <h3 className="step-title">
                                        {step.title}
                                    </h3>

                                    <p className="step-description">
                                        {step.description}
                                    </p>

                                    {step.id < steps.length &&
                                        (
                                            <ArrowRight className="step-arrow" size={20} />
                                        )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
};

export default HowItWork;
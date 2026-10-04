import { MapPin, Clock, ArrowRight } from "lucide-react";
import "./FeaturedForts.css";

const featuredForts = [
    {
        id: 1,
        name: "Rajgad Fort",
        location: "Pune",
        difficulty: "Moderate",
        duration: "5–6 hrs",
        image:
            "https://images.unsplash.com/photo-1605649487212-47bdab064df7?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 2,
        name: "Raigad Fort",
        location: "Raigad",
        difficulty: "Moderate",
        duration: "4–5 hrs",
        image:
            "https://images.unsplash.com/photo-1595658658481-d53d3f999875?auto=format&fit=crop&w=900&q=80",
    },
    {
        id: 3,
        name: "Harishchandragad",
        location: "Ahmednagar",
        difficulty: "Difficult",
        duration: "7–8 hrs",
        image:
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80",
    },
];

function FeaturedForts() {
    return (
        <section className="featured-forts">
            <div className="container">
                <div className="featured-forts-header">
                    <div>
                        <span className="section-tag">
                            Explore Destinations
                        </span>

                        <h2 className="section-title">
                            Featured Forts
                        </h2>

                        <p className="section-description">
                            Discover some of Maharashtra's iconic forts and
                            trekking destinations.
                        </p>
                    </div>

                    <button className="btn view-all-btn">
                        View All Forts
                        <ArrowRight size={18} />
                    </button>
                </div>

                <div className="row g-4">
                    {featuredForts.map((fort) => (
                        <div
                            className="col-lg-4 col-md-6"
                            key={fort.id}
                        >
                            <article className="fort-card">

                                {/* Image */}
                                <div className="fort-card-image">
                                    <img
                                        src={fort.image}
                                        alt={fort.name}
                                    />

                                    <span
                                        className={`difficulty-badge ${fort.difficulty.toLowerCase()}`}
                                    >
                                        {fort.difficulty}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="fort-card-content">

                                    <h3 className="fort-card-title">
                                        {fort.name}
                                    </h3>

                                    <div className="fort-card-meta">
                                        <span>
                                            <MapPin size={16} />
                                            {fort.location}
                                        </span>

                                        <span>
                                            <Clock size={16} />
                                            {fort.duration}
                                        </span>
                                    </div>

                                    <button className="fort-card-link">
                                        Explore Trek
                                        <ArrowRight size={16} />
                                    </button>

                                </div>
                            </article>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedForts;
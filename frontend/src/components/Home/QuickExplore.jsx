import { MapPin, Search } from "lucide-react";
import "./QuickExplore.css";

function QuickExplore() {
    return (
        <section className="quick-explore">
            <div className="container">

                <div className="quick-explore-header text-center">
                    <span className="section-tag">
                        Start Your Journey
                    </span>

                    <h2 className="section-title">
                        Find Your Next Adventure
                    </h2>

                    <p className="section-description">
                        Explore historic forts and trekking routes across Maharashtra.
                    </p>
                </div>

                <div className="quick-explore-card">
                    <div className="row g-3 align-items-end">

                        <div className="col-lg-6">
                            <label htmlFor="fortSearch" className="form-label">
                                Search Fort
                            </label>

                            <div className="search-input-wrapper">
                                <Search size={20} />

                                <input
                                    id="fortSearch"
                                    type="text"
                                    className="form-control"
                                    placeholder="Search forts, locations..."
                                />
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <label htmlFor="location" className="form-label">
                                Location
                            </label>

                            <div className="location-input-wrapper">
                                <MapPin size={20} />

                                <select
                                    id="location"
                                    className="form-select"
                                    defaultValue=""
                                >
                                    <option value="" disabled>
                                        Select location
                                    </option>
                                    <option value="pune">Pune</option>
                                    <option value="sahyadri">Ahilyanagar</option>
                                    <option value="kolhapur">Kolhapur</option>
                                    {/* <option value="nashik">Nashik</option> */}
                                    {/* <option value="raigad">Raigad</option> */}
                                </select>
                            </div>
                        </div>

                        <div className="col-lg-3">
                            <button className="btn quick-explore-btn w-100">
                                <Search size={18} />
                                Explore Forts
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
};

export default QuickExplore;
import { Mountain, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg treknexa-navbar">
            <div className="container">

                <a className="navbar-brand treknexa-brand" href="/">
                    <Mountain size={26} />
                    <span>TrekNexa</span>
                </a>

                <button className="navbar-toggler treknexa-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#treknexaNavbar"
                    aria-controls="treknexaNavbar"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <Menu size={24} />
                </button>

                <div className="collapse navbar-collapse" id="treknexaNavbar">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                Home
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/explore">
                                Explore Forts
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/plan-trek">
                                Plan Trek
                            </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/about">
                                About
                            </a>
                        </li>
                    </ul>

                    <div className="navbar-actions">
                        <a href="/login" className="btn treknexa-login-btn">
                            Login
                        </a>

                        <a href="/register" className="btn treknexa-register-btn">
                            Register
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
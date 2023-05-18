import React from "react";

function Header() {
    return (
        <header className="m-0">
            <nav
                id="navbar"
                className="navbar navbar-expand-lg bg-body-tertiary py-3 text-bg-light fixed-top"
                data-bs-theme="dark">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item pe-4">
                                <a className="nav-link fs-5" href="#welcome-section">About</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fs-5" href="#projects">Work</a>
                            </li>
                            <li className="nav-item pe-4">
                                <a className="nav-link fs-5" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
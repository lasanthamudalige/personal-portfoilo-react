import React from "react";

function Header() {
    return (
        <header class="m-0">
            <nav
                id="navbar"
                class="navbar navbar-expand-lg bg-body-tertiary py-3 text-bg-light fixed-top"
                data-bs-theme="dark">
                <div class="container-fluid">
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item pe-4">
                                <a class="nav-link fs-5" href="#welcome-section">About</a>
                            </li>
                            <li class="nav-item pe-4">
                                <a class="nav-link fs-5" href="#projects">Work</a>
                            </li>
                            <li class="nav-item pe-4">
                                <a class="nav-link fs-5" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
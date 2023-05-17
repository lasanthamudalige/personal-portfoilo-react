import React from "react";

function Footer() {
    const year = new Date().getFullYear()
    return (
        <footer class="container-fluid bg-dark text-light text-center py-2">
            <p class="py-4">&copy; {year} Lasantha Mudalige. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
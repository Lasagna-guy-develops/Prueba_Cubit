import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
    return (
        <div className="footer">
            <footer class="py-5 bg-dark fixed-bottom">
                <div class="container">
                    <p class="m-0 text-center text-white">
                        Copyright &copy; mi persona, supongo...
                    </p>
                    <br />
                    <div class="m-0 text-center">
                    <a href="https://www.instagram.com/seb.mz/?hl=es-la">
                        <FontAwesomeIcon icon={faInstagram} size="3x" />
                    </a>
                        <b>&nbsp;&nbsp;&nbsp;&nbsp;</b>
                    <a href="https://github.com/Lasagna-guy-develops">
                        <FontAwesomeIcon icon={faGithub} size="3x" />
                    </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
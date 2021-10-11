import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        Prueba
                    </Link>

                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Proyecto de vida
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                className={`nav-item  ${
                                    props.location.pathname === "/userlist" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/userlist">
                                    Lista de Usuarios
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/questions" ? "active" : ""
                                }`}
                            >
                                <Link class="nav-link" to="/questions">
                                    Preguntas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
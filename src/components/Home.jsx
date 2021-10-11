import React from "react";

function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img
                            class="img-fluid rounded mb-4 mb-lg-0"
                            src="https://hipcamp-res.cloudinary.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1593986725/campground-photos/jmjybtptrfrouuvicmpg/the-coop-camp-the-coop-cabin.jpg"
                        />
                        <br/>
                        <br/>
                        <img
                            className="img-fluid rounded mb-4 mb-lg-0"
                            src="https://cdn.visordown.com/Africa%20Twin.JPG"
                        />
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/>
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Proyecto de vida</h1>
                        <p>
                            Mi proyecto de vida es relativamente sencillo y tiene 5 metas
                        </p>
                        <ul>
                            <li>Graduarme de la universidad</li><br />
                            <li>Conseguir una maestría en ciberseguridad en el exterior</li><br />
                            <li>Conseguir licencia de piloto de avión</li><br />
                            <li>Recorrer Asia y europa en moto</li><br />
                            <li>Vivir con tranquilidad en una bacaña en Norteamérica</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
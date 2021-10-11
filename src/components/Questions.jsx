import React from "react";

function Questions() {
    return (
        <div >
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <br />
                        <h2 class="font-weight-light">¿Qué es una prueba unitaria, cuándo se aplica y que nos permite?</h2>
                        <p>
                            son pruebas de pequeñós fragmentos de codigo que funcionan como un contrato: chequeando que entra y que sale para corroborar que no hayan bugs.
                            Se hace antes de pasar el codigo al qa lo que nos permite analizar el codigo rapidamente para solucionar errores menores y mayores por último,
                            permitiendo seguir las practicas del TDD.
                        </p>
                        <br/>
                        <h2 className="font-weight-light">¿Cuales son las ventajas de la programación funcional?</h2>
                        <p>
                            Paradigma de programación la cual busca desarrollar de una forma clara en la que se enfoca en el que y no el como, por lo tanto se jerarquiza el codigo
                            y se busca conformar el codigo en su mayor parte de funciones puras con baja mutabilidad y pocos efectos secundarios.
                        </p>
                        <br/>
                        <h2 className="font-weight-light">Pros y Contras del uso de GitFlow vs Trunk.</h2>
                        <p>
                            en trunk hay una mayor facilidad de editar y actualizar, hay mas confianza en el equipo y permite agilidad, gitflow se facilita para trabajar proyectos
                            con developers juniors, open source o donde se tenga un producto que necesite muchas ramass de desarrollo.
                        </p>
                        <br/>
                        <h2 className="font-weight-light">¿Cuales son las ventajas de utilizar arquitecturas sin servidor?</h2>
                        <p>
                            menor ocupación de espacio, mas facilidad para escalar, menos costos y mayor rapidez al desplegar.
                        </p>
                        <br/>
                        <h2 className="font-weight-light">¿Que ventajas tiene el uso de una base de datos no relacional?</h2>
                        <p>
                            mayor rapiudez en transacciones, escalabilidad horizontal, facilidad de decidir entre datos estructurados, no estructurados o semiestructurados.
                        </p>
                        <br/><br/><br/><br/><br/><br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Questions;
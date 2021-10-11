import React, {Component} from "react";
import axios from "axios";
import UserApi from "./UserApi";

const circular= {'border-radius': '50%', "pointer-events": "all"};

function User(){

        return(
            <div className="home">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Usuario</h1>
                            <UserApi />
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default User;
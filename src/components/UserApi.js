import React, { Component } from "react";
import axios from "axios";
import {withRouter} from "react-router";

const circular= {'border-radius': '50%', "pointer-events": "all"};

class Userapi extends Component {

    state = {
        people: []
    };

    componentDidMount() {
        axios
            .get("https://reqres.in/api/users/"+this.props.match.params.id)
            .then(response => {
                this.successShow(response);
            })
            .catch(error => {
                this.successShow(error);
            });
    }
    successShow(response) {
        this.setState({
            people: response.data.data
        });
    }

    render() {
        const headers = Object.keys(this.state.people);
        return (
                <tr>
                    {
                        Object.keys(this.state.people).map((id) => {
                            return <p>{headers.shift()+":      "+this.state.people[id]}</p>
                        })
                    }
                </tr>
        )
    }
}

export default withRouter(Userapi);

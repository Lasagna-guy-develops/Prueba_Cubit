import React, { Component } from "react";
import axios from "axios";
import {withRouter} from "react-router";

const liStyle= {float: 'left', width: '50%', 'text-align': 'center'};
const ulStyle= {'list-style-type': 'disc'};
const circular= {'border-radius': '50%', "pointer-events": "all"};

class Usersapi extends Component {

    state = {
        people: [],
    };

    componentDidMount() {
        axios
            .get("https://reqres.in/api/users")
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
        return (
            <ul style={ulStyle}>
                {this.state.people.map(({id, email, first_name, last_name, avatar}) => (
                    <div>
                        <li style={liStyle} key={id}>
                            <img style={circular} src={avatar} onClick={()=> this.props.history.push('/User/'+id)} alt={first_name}/>
                            <br /><br />
                            {first_name} {last_name}
                            <br />
                            {email}
                            <br /><br />
                        </li>
                    </div>))}
            </ul>
        );
    }
}

export default withRouter(Usersapi);

import React from 'react';
import axios from 'axios';

class Users extends React.Component {
    state = {
        users: [],
    }

    componentDidMount() {
        const token = localStorage.getItem('jwt');
        const endpoint = 'http://localhost:5000/api/users';
        const options = {
            headers: {
                Authorization: token
            }
        }

        axios.get(endpoint, options)
        .then( res => {
            this.setState({ users: res.data });
        })
        .catch (err => {
            console.log('error from /api/users', err);
        });
    };

    render() {
        if (localStorage.getItem ('jwt')){
        return (
            <div>
               
                <h2> List of All Users:</h2>
                <ul>
                    {this.state.users.map(user => 
                        
                        ( <li key = {user.id}> {user.username} {user.department} </li>)
                         
                    )}
                </ul>
            </div>
        )}else{
            return (<div>
                <h4>Please Sign In With the Proper Credentials to View Users</h4>
            </div>)
            
        }
    }
}

export default Users;
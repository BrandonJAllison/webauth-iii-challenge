import React from 'react';
import axios from 'axios';

class SignUp extends React.Component {
    state = {
        username: '',
        password: '',
        department: ''
    }

    InputHandler = event => {
        event.preventDefault();
        const target = event.target;
        this.setState({ [target.name]: target.value });
    }

    SubmitHandler = event => {
        event.preventDefault();
        console.log(this.state);
        const credentials = this.state;
        const endpoint = 'http://localhost:5000/api/auth/register';
        axios.post(endpoint, credentials)
            .then (res => {
                console.log('response data from login', res.data);
                localStorage.setItem('jwt', res.data.token);
            })
            .catch( err => {
                console.log('err from login', err);
            });
    }

    render() {
        return (
            <form onSubmit={this.SubmitHandler}>
                <div>
                    <label htmlFor="username">Username: &nbsp;</label>
                    <input name="username" value={this.state.username} onChange={this.InputHandler} type='text' />
                </div>
                <div>
                    <label htmlFor="password">Password: &nbsp;</label>
                    <input name="password" value={this.state.password} onChange={this.InputHandler} type='password' />
                </div>
                <div>
                    <label htmlFor="department">Department: &nbsp;</label>
                    <input name="department" value={this.state.department} onChange={this.InputHandler} type='text' />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
            </form>
        )
    }
}

export default SignUp;
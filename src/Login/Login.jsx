import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import pactech from '../assets/img/pactech2.png';

export const signOut = () => {
    localStorage.removeItem('usuario');
    localStorage.removeItem('token');
    window.location.href = "advertise.pactech.dev.br/Login";
};


function Login() {

    const [name, setName] = useState('');
    const [Password, setPassword] = useState('');
    const [user, setUser] = useState();
    const cachedUser = localStorage.getItem('usuario');

    const signIn = async e => {
        e.preventDefault();
        if (!cachedUser) {
            const response = await Axios.post("http://localhost:3002/auth/login", {
                name: name,
                password: Password
            }).then((response) => {
                setUser(response.data);
                localStorage.setItem('usuario', response.data.user.name);
                console.log(response.data);
                localStorage.setItem('token', `Bearer ${response.data.token}`);
            });
        };
    };
    if (user) {
        window.location.href = "advertise.pactech.dev.br/";
    }


    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className='login_logo'
                    src={pactech}
                    alt=""
                />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form onSubmit={signIn}>
                    <h5>Name</h5>
                    <input
                        type="text"
                        placeholder='Name'
                        value={name}
                        onChange={({ target }) => { setName(target.value); }}
                    />

                    <h5>Password</h5>
                    <input
                        type="password"
                        placeholder='password'
                        value={Password}
                        onChange={({ target }) => { setPassword(target.value); }}
                    />
                    <button type='submit'
                        className='login_signInButton'>
                        Login
                    </button>
                </form>
                <Link to='/register'>
                    <button
                        className='login_registerButton'>Create your Pactech account
                    </button>
                </Link>
            </div>
        </div>
    );
}



export default Login;
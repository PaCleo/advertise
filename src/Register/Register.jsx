import React from 'react';
import '../Login/Login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Axios from 'axios';
import pactech from '../assets/img/pactech2.png';


function Register() {
    const [PasswordReg, setPasswordReg] = useState('');
    const [nameReg, setNameReg] = useState('');

    const register = () => {
        try {
            Axios.post("http://localhost:3002/auth/register", {
                name: nameReg,
                password: PasswordReg,

            }); 
            window.location.href = "http://pactech-advertise.s3-website-sa-east-1.amazonaws.com/";
        } catch(err) {
                onsole.log(err);
                setError('Failed to remove product');
            }

        };

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
                    <h1>Create Your Account</h1>
                    <form>

                        <h5>Name</h5>
                        <input
                            type="text" value={nameReg}
                            onChange={e => setNameReg(e.target.value)}
                        />

                        <h5>Password</h5>
                        <input
                            type="password" value={PasswordReg}
                            onChange={e => setPasswordReg(e.target.value)}
                        />

                        <button
                            onClick={register}
                            className='login_signInButton'>
                            Create
                        </button>
                    </form>

                    <p>
                        By signin-in you agree to nothing is just a site to a portifolio.
                    </p>
                </div>
            </div>
        );
    };

    export default Register;
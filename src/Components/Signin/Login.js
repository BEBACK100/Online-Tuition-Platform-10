import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Authcontext } from '../../Context/UserContext';

const Login = () => {
    const [error, setError] = useState(null)
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate();
    const { signin, providerlogin } = useContext(Authcontext)

    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider()
    const handlegithublogin = () => {
        providerlogin(githubProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => console.error(error))
    }
    const handlegooglesignin = () => {



        providerlogin(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
        if (password < 6) {
            setError('password should be six characters or more')
        }
        if (password !== confirm) {

            setError('Your Password did not match')
            return
        }
        if (password === confirm) {

        }

        signin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset()
                navigate(from, { replace: true });

            })
            .catch(error => console.error(error));

    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="flex gap-8">

                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                        <form onSubmit={handlelogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <span className="label-text">Conform Password</span>
                                </label>
                                <h1 className='text-red-400 text-3xl'>{error} </h1>
                                <input type="password" name="confirm" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link className='text-blue-600 hover:bg-slate-300' to='/Registration'>Create A new Account</Link>
                        </form>
                    </div>
                    <div>


                        <button onClick={handlegooglesignin} className="btn btn-outline btn-wide mt-20 btn-primary w-25">  <FontAwesomeIcon icon="fa-solid fa-g" />Login with Google</button>


                        <button onClick={handlegithublogin} className="btn btn-outline btn-wide mt-20 btn-success w-25">  Login with GitHub</button>
                    </div>
                    <div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;
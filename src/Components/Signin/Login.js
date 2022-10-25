import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handlelogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)
    }
    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-5">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
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
                                <input type="password" name="confirm" className="input input-bordered" required />
                                <label className="label">
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <Link className='text-blue-600 hover:bg-slate-300' to='/signup'>Create A new Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
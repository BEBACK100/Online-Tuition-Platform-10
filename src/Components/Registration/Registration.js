import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { EyeSlashIcon } from '@heroicons/react/24/solid'
import { Authcontext } from '../../Context/UserContext';


const Registration = () => {
    const { createuser } = useContext(Authcontext)
    const [error, setError] = useState(null);
    const handlesubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(name, email, password, confirm)
        if (password < 6) {
            setError('password should be six characters or more')
        }
        if (password !== confirm) {

            setError('Your Password did not match')
            return
        }
        createuser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error))

    }
    return (
        <div className=''>

            <div className="hero min-h-screen">
                <div className="pt-20 z-20">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold pt-2 ">Registration Now</h1>

                    </div>
                    <div className="card flex-shrink-0  max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handlesubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="name" name="name" className="input input-bordered" required />
                            </div>
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
                                <div className='flex'>
                                    <div> <input type="password" name="password" className="input input-bordered"

                                        required ></input></div>
                                    <div> </div><EyeSlashIcon className="h-6 w-6 text-blue-500" />
                                </div>

                                <label className="label">
                                    <span className="label-text">ConformPassword</span>
                                </label>
                                <input type="password" name="confirm" className="input input-bordered" required />
                                <label className="label">
                                    <h1 className='text-red-400 text-3xl'>{error} </h1>
                                    <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-2xl">Registration</button>
                            </div>
                            <Link className='text-blue-600 hover:bg-slate-300' to='/login'>Already have an Account</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Registration;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from '../../Context/UserContext';
import ReactSwitch from 'react-switch';

import img from './images.jpg'
const Navbar = () => {
    const { user, logout } = useContext(Authcontext)

    return (
        <div>

            <div className="navbar bg-blue-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <Link to='/Math'>Math</Link>
                            <Link to='/Physics'>Physics</Link>
                            <Link to='/Chemistry'>Chemistry</Link>





                        </ul>
                    </div>
                    <p className="btn btn-ghost normal-case text-3xl text-blue-900">Online-Tution-Platform</p>

                    <div>
                        <img className='rounded-full' src={img} alt="" />
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal ml-4 text-blue-700 font-bold text-3xl space-x-3 p-0">
                        <Link to='/Courses'>Courses</Link>
                        <Link to='/blog'>Blog</Link>
                        {
                            user?.uid ?
                                <button onClick={logout}>Logout</button>
                                :
                                <>
                                    <Link to='/registration'>Registration</Link>
                                    <Link to='/login'>Login</Link>
                                </>}


                    </ul>
                </div>

                <h1 className='text-blue-500 text-xl font-bold ml-4'>{user?.email}</h1>
                {
                    user?.photoURL ?
                        <img className='rounded-full h-20' src={user.photoURL} alt="" />
                        : <FontAwesomeIcon icon="fa-regular fa-user" />

                }
                <div className="navbar-end">


                    <div className='mr-4'> <ReactSwitch></ReactSwitch></div>
                    <div><p className="btn text-2xl">  <Link to='/'>{`Home`} </Link></p></div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;
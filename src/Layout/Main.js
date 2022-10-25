import React from 'react';
import { Outlet } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <div className=' grid grid-cols-2 bg-gradient-to-r from-blue-200 to-green-200'>

                <div className=' text-3xl'>
                    <h1>this left</h1>
                </div>
                <div className=''>
                    <Home></Home>
                </div>
            </div>

        </div>
    );
};

export default Main;
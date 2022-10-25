import React from 'react';

import { Outlet } from 'react-router-dom';

import img from './logo fav.jpg'
import Navbar from '../Components/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>

            <Outlet></Outlet>
            <div className=' grid grid-cols-2 bg-gradient-to-r from-blue-200 to-green-200'>

                <div className=' text-3xl'>
                    <h1>this left</h1>
                    <img src={img} alt="" />
                </div>
                <div className='justify-center'>
                    <div className="card card-compact w-96 h-full bg-blue-200">




                        <h1 className='text-4xl '>This is the online Tuition Platform , You can learn from here Various kinds of Subjects </h1>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Main;
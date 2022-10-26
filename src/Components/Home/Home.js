import React from 'react';

import img from '../../Layout/logo fav.jpg'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className=' grid grid-cols-2 bg-gradient-to-r from-blue-300 to-green-200'>

                <div className=' text-3xl mt-20'>

                    <img src={img} alt="" />
                </div>
                <div className='justify-center mt-20'>
                    <div className="card card-compact w-full h-full bg-blue-200">




                        <h1 className='text-4xl font-bold '>This is the online Tuition Platform , You can learn from here Various kinds of Subjects Like -<span className='text-4xl text-blue-600'>Physics, Chemistry,Math ,ICT etc..... </span></h1>
                        <div className='mx-auto mt-20'>

                            <div className="card w-full bg-base-100 shadow-xl image-full">
                                <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                                <div className="card-body">

                                    <h1 className='text-3xl'>You Can Registration From here</h1>
                                    <div className="card-actions mx-auto mt-8">
                                        <button className="btn btn-primary"><Link to='/registration text-3xl'>Click Me for <span className='text-red-500'>Registration</span> First</Link></button>
                                    </div>
                                </div>
                            </div>


                        </div>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;
import React from 'react';
import Registration from '../Registration/Registration';
import img from '../../Layout/logo fav.jpg'

const Home = () => {
    return (
        <div>
            <div className=' grid grid-cols-2 bg-gradient-to-r from-blue-200 to-green-200'>

                <div className=' text-3xl'>
                    <h1>this left</h1>
                    <img src={img} alt="" />
                </div>
                <div className='justify-center'>
                    <div className="card card-compact w-full h-full bg-blue-200">




                        <h1 className='text-4xl '>This is the online Tuition Platform , You can learn from here Various kinds of Subjects </h1>
                        <Registration></Registration>


                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;
import React from 'react';
import CourseSidebar from './CourseSidebar';

const ProLanguar = () => {
    return (
        <div className='grid grid-cols-2'>
            <div className='grid grid-cols-2'>
                <div>
                    <h1>card are here</h1>
                    <CourseSidebar></CourseSidebar>
                </div>
            </div>
            <div className='grid grid-cols-1'>

                <div className="card w-96 bg-base-100 shadow-xl">

                    <div className="card-body bg-blue-500 text-center mt-5">
                        <h2 className="card-title text-4xl ">Programmin Language</h2>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default ProLanguar;
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CourseSidebar = () => {
    const [displaydata, setDisplaydata] = useState([])


    useEffect(() => {
        fetch('http://localhost:9000/displayData')
            .then(res => res.json())
            .then(data => setDisplaydata(data))
    }, [])
    return (
        <div className='ml-6 mt-15'>
            <div className="card w-96 bg-base-100 shadow-xl pl-10 py-5">



                {
                    displaydata.map(alldata => <p key={alldata.id} >
                        <div className='bg-blue-200 w-60 ml-3 p-4'>
                            <Link to={`${alldata.name}`}> <h2 className="card-title text-4xl font-bold" > {alldata.name}</h2></Link>
                        </div>


                    </p>)

                }

            </div>
            <div><button className="btn btn-active btn-accent mt-10"> <Link to='/Courses'>Go to Back page</Link></button></div>
        </div>
    );
};

export default CourseSidebar;
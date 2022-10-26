import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [displaydata, setDisplaydata] = useState([])


    useEffect(() => {
        fetch('http://localhost:9000/displayData')
            .then(res => res.json())
            .then(data => setDisplaydata(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-400 m-20 pt-10'>All Couse ar here, you can <br></br>click the Course name for Details:{displaydata.length}</h1>
            <div>
                {
                    displaydata.map(alldata => <p key={alldata.id} >
                        <div className="card w-80 h-100 mx-auto bg-base-100 shadow-xl image-full mb-4">
                            <img src={alldata.Image} alt="" />
                            <div className="card-body">
                                <Link to={`${alldata.name}`}> <h2 className="card-title text-4xl font-bold" > {alldata.name}</h2></Link>

                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary"><Link to='/'>{`Home`} </Link></button>
                                </div>
                            </div>
                        </div>

                    </p>)
                }
            </div>
        </div>
    );
};
export default Courses;
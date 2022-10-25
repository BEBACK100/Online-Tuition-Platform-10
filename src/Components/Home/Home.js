import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [displaydata, setDisplaydata] = useState([])

    useEffect(() => {
        fetch('http://localhost:9000/displayData')
            .then(res => res.json())
            .then(data => setDisplaydata(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl'>This is Right Sight:{displaydata.length}</h1>
            <div>
                {
                    displaydata.map(alldata => <p key={alldata.id} >
                        <div className="card w-full bg-base-100 shadow-xl image-full mb-4">
                            <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                            <div className="card-body">
                                <Link to={`${alldata.name}`}> <h2 className="card-title text-4xl font-bold" > {alldata.name}</h2></Link>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
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

export default Home;
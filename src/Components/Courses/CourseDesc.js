import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseDesc = () => {
    const descripatin = useLoaderData()
    return (
        <div>
            <h1>subject descripation:{descripatin.length}</h1>
        </div>
    );
};

export default CourseDesc;
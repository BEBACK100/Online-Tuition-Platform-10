import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FAQ = () => {
    const descripation = useLoaderData();
    return (
        <div>
            <h1>This is faq page:{descripation} </h1>
        </div>
    );
};

export default FAQ;
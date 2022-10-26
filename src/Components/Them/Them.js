import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';


const Them = ({ theme }) => {
    const [them, setthem] = useState('light');
    useEffect(() => {
        if (them === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [them]);
    const handlethemSwitch = () => {
        setthem(them === 'dark' ? 'light' : 'dark');
    };
    return (
        <div className='h-screen bg-white dark:bg-black flex justify-end items-start'>
            <button className='bg-orange-300  rounded-3xl' onClick={handlethemSwitch}>Dark Mode</button>
        </div>
    );
};

export default Them;
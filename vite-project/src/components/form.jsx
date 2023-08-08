/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginAPI } from '../Service/auth';

function Form() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            email: email,
            password: password,
        };

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        };


        const token = await LoginAPI(options, setError);
        const workersName = await LoginAPI(options, setError);
        if (token && workersName) {
            navigate("/breakfast");
        }


    };

    return (
        <div className='bg-lime-400 px-10 py-20 rounded-3xl border-2 border-gray-200'>
            <h1 className='text-3xl font-semibold'>Welcome to Burger Queen</h1>
            <p className='font-medium text-lg text-lime-700 mt-4'>Please enter your details</p>
            <form className='mt-8' onSubmit={handleSubmit}>
                <div>
                    <label className='text-lg font-medium'>Email</label>
                    <input className='w-full border-2 border-yellow-300 rounded-xl p-4 mt-1 bg-white' placeholder='Enter your email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mt-4'>
                    <label className='text-lg font-medium'>Password</label>
                    <input className='w-full border-2 border-yellow-300 rounded-xl p-4 mt-1 bg-white' placeholder='Enter your password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='mt-8 flex flex-col justify-between items-center'>
                    <div>
                        <input type='checkbox' id='remember' />
                        <label className='ml-2 font-medium text-base' htmlFor='remember'>Remember for 30 days</label>
                    </div>
                    <button className='font-medium text-base text-orange-500'>Forgot password?</button>
                </div>
                <div className='mt-8 flex flex-col gap-y-4'>
                    {error && <div>{error}</div>}
                    <button
                        className='active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] easy-in-out py-3 rounded-xl bg-orange-500 border-orange-400 border-2 text-white text-lg font-bold'
                        type='submit'>Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
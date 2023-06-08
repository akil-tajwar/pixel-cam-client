import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='pt-40'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='w-full mx-auto mt-14'>
                    <img className='w-full' src="/login.svg" alt="" />
                </div>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Login</h2>
                    <form>
                        <div className=''>
                            <div className='pb-2'>
                                <label className='text-white' htmlFor="email">Email</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" required />
                            </div>
                            <div className='pb-2'>
                                <label className='text-white' htmlFor="password">Password</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" required />
                            </div>
                        </div>
                        <button className='w-full mt-5 bg-[#00DCF4] rounded text-black font-semibold p-2 mb-3'>Login</button><br />
                    </form>
                    <p className='text-center text-white'>--------- or ---------</p>
                    <div className='flex gap-2 mb-3'>
                        <button className='w-full bg-[#00DCF4] rounded text-black font-semibold p-2 mt-3'>Google</button>
                    </div>
                    <div className='text-center'>
                        <small><span className='text-white'>New to Turbo Toy Car?</span> <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'></p>
        </div>
    );
};

export default Login;
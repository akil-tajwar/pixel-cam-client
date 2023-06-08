import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className='pt-40'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Signup</h2>
                    <form>
                        <div className='flex gap-5'>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="text">Name</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" required />
                            </div>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="email">Email</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" required />
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="password">Password</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" required />
                            </div>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="password">Confirm Password</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" required />
                            </div>
                        </div>
                        <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="text">Photo URL</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" required />
                            </div>
                        <button className='w-full mt-5 bg-[#00DCF4] rounded text-black font-semibold p-2 mb-3'>Login</button><br />
                    </form>
                    <p className='text-center text-white'>--------- or ---------</p>
                    <div className='flex gap-2 mb-3'>
                        <button className='w-full bg-[#00DCF4] rounded text-black font-semibold p-2 mt-3'>Google</button>
                    </div>
                    <div className='text-center'>
                        <small><span className='text-white'>Already have an account?</span> <Link to='/login' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
                <div className='w-full mx-auto mt-28'>
                    <img className='w-full' src="/signup.svg" alt="" />
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'></p>
        </div>
    );
};

export default Signup;
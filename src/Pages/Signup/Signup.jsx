import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import { updateProfile } from 'firebase/auth';

const Signup = () => {
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);
    const { logout, setLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/login";
    const handleSignup = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        const photo = form.photo.value;

        setError('');
        if (password.length < 6 && password.length > 0) {
            setError('Password must have at least 6 characters');
            return;
        }
        else if (password.length === 0) {
            setError('You can not submit an empty email or password field');
            return;
        }
        else if(password !== confirm){
            setError('Password and confirm password does not match');
            return;
        }
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, name, photo);
                navigate(from, { replace: true });
                logout();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
        const updateUserData = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
                .then(() => {
                    console.log('name updated');
                })
                .catch(error => {
                    console.log(error);
                })
            return <Navbar user={user}></Navbar>
        }
    }
    return (
        <div className='pt-40'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Signup</h2>
                    <form onSubmit={handleSignup}>
                        <div className='flex gap-5'>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="text">Name</label><br />
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="text" name="name" id="" required />
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
                                <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="password" name="confirm" id="" required />
                            </div>
                        </div>
                        <div className='pb-2 w-full'>
                            <label className='text-white' htmlFor="text">Photo URL</label><br />
                            <input className='bg-[#f5f5f5] rounded p-2 border-slate-300 border w-full' type="text" name="photo" id="" required />
                        </div>
                        <button className='w-full mt-5 bg-[#00DCF4] rounded text-black font-semibold p-2 mb-3'>Signup</button><br />
                    </form>
                    <div className='text-center'>
                        <small><span className='text-white'>Already have an account?</span> <Link to='/login' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
                <div className='w-full mx-auto mt-28'>
                    <img className='w-full' src="/signup.svg" alt="" />
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'>{error}</p>
        </div>
    );
};

export default Signup;
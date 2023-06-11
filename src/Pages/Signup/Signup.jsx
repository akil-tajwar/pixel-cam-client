import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);
    const { logout, setLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/login";
    const onSubmit = (data) => {
        console.log(data);
        setError('');
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserData(result.user, data.name, data.photo);
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
    const password = watch("password");
    const confirmPassword = watch("confirm");
    const passwordRegex =
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{6,}$/;
    return (
        <div className='pt-32 mb-36'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Signup</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex gap-5'>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="text">Name</label><br />
                                <input {...register("name", { required: true })} className='bg-white text-black rounded p-2 border-slate-300 border w-full' type="text" name="name" id="" />
                                {errors.name && <span className='text-red-600 text-center font-semibold mb-20'>This field is required</span>}
                            </div>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="email">Email</label><br />
                                <input {...register("email", { required: true })} className=' bg-white text-black rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" />
                                {errors.email && <span className='text-red-600 text-center font-semibold mb-20'>This field is required</span>}
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="password">Password</label><br />
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: 6,
                                        maxLength: 20,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })} type='password' className='bg-white text-black rounded p-2 border-slate-300 border w-full' />
                                {errors.password?.type === 'required' && <p className='text-red-600 font-bold'>First name is required</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold'>Password must have 1 uppercase and 1 special characters</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600 font-bold'>Paassword must have 6 characters</p>}
                            </div>
                            <div className='pb-2 w-full'>
                                <label className='text-white' htmlFor="password">Confirm Password</label><br />
                                <input {...register("confirm", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                })} className='bg-white text-black rounded p-2 border-slate-300 border w-full' type="password" name="confirm" id="" />
                                {errors.confirm?.type === 'required' && <p className='text-red-600 font-bold'>First name is required</p>}
                                {errors.confirm?.type === 'pattern' && <p className='text-red-600 font-bold'>Password must have 1 uppercase and 1 special characters</p>}
                                {errors.confirm?.type === 'minLength' && <p className='text-red-600 font-bold'>Paassword must have 6 characters</p>}
                            </div>
                        </div>
                        <div className='text-center'>
                            {password !== confirmPassword && (
                                <span className="text-red-600 mt-3 font-bold">
                                    Password doesn't match with confirm password
                                </span>
                            )}
                        </div>
                        <div className='pb-2 w-full'>
                            <label className='text-white' htmlFor="text">Photo URL</label><br />
                            <input {...register("photo")} className='bg-white text-black rounded p-2 border-slate-300 border w-full' type="text" name="photo" id="" />
                        </div>
                        <input className='w-full mt-5 bg-[#2cae74] rounded text-black font-semibold p-2 mb-3 cursor-pointer' type="submit" value='Signup' />
                    </form>
                    <div className='text-center'>
                        <small><span className='text-white'>Already have an account?</span> <Link to='/login' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
                <div className='w-full mx-auto mt-20'>
                    <img className='w-full' src="/signup.svg" alt="" />
                </div>
            </div>
            {/* <p className='text-red-600 text-center font-semibold mb-20'>{error}</p> */}
        </div>
    );
};

export default Signup;
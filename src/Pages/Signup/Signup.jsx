import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Navbar from '../Shared/Navbar';
import { updateProfile } from 'firebase/auth';
import { useForm } from 'react-hook-form';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const [passwordType, setPasswordType] = useState("password");
    const [passwordInput, setPasswordInput] = useState("");
    const [passwordType2, setPasswordType2] = useState("password");
    const [passwordInput2, setPasswordInput2] = useState("");
    const [error, setError] = useState('');
    const { user, createUser } = useContext(AuthContext);
    const { logout, setLogout } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/login";

    const handlePasswordChange = (evnt) => {
        setPasswordInput(evnt.target.value);
    }
    const handlePasswordChange2 = (evnt) => {
        setPasswordInput2(evnt.target.value);
    }
    const togglePassword = () => {
        if (passwordType === "password") {
            setPasswordType("text")
            return;
        }
        setPasswordType("password")
    }
    const togglePassword2 = () => {
        if (passwordType2 === "password") {
            setPasswordType2("text")
            return;
        }
        setPasswordType2("password")
    }

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
                                <label className='text-white' >Password</label><br />
                                <div className='flex'>
                                    <input
                                        {...register("password", {
                                            required: "Password is required",
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                        })} type={passwordType} onChange={handlePasswordChange} value={passwordInput} className='bg-white text-black rounded-s p-2 border-slate-300 border w-full' />
                                    <button onClick={togglePassword} className='bg-white text-black px-3 rounded-r'>{passwordType === "password" ? <BsEyeSlash /> : <BsEye />}</button>
                                </div>
                                {errors.password?.type === 'required' && <p className='text-red-600 font-bold'>Password is required</p>}
                                {errors.password?.type === 'pattern' && <p className='text-red-600 font-bold'>Password must have 1 uppercase and 1 special characters</p>}
                                {errors.password?.type === 'minLength' && <p className='text-red-600 font-bold'>Paassword must have 6 characters</p>}
                            </div>
                            <div className='pb-2 w-full'>
                                <label className='text-white'>Confirm Password</label><br />
                                <div className='flex'>
                                    <input {...register("confirm", {
                                        required: true,
                                        minLength: 6,
                                        pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/
                                    })} type={passwordType2} onChange={handlePasswordChange2} value={passwordInput2} className='bg-white text-black rounded-s p-2 border-slate-300 border w-full' name="confirm" id="" />
                                    <button onClick={togglePassword2} className='bg-white text-black px-3 rounded-r'>{passwordType2 === "password" ? <BsEyeSlash /> : <BsEye />}</button>
                                </div>
                                {errors.confirm?.type === 'required' && <p className='text-red-600 font-bold'>Password is required</p>}
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
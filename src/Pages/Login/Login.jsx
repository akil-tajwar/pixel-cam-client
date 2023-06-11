import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { AuthContext } from '../../Providers/AuthProvider';
import { app } from '../../Firebase/firebase.init';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { signIn } = useContext(AuthContext);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true });
                setUser(user);
                console.log(user);
            })
            .catch((error) => {
                console.log(error.message);
                setError(error.message);
            });
    }
    const onSubmit = (data) => {
        console.log(data);
        signIn(data.email, data.password)
            .then(result => {
                navigate(from, { replace: true });
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })

        if (error.includes('auth/user-not-found')) {
            setError('Your email address wrong');
            return;
        }
        else if (error.includes('auth/wrong-password')) {
            setError('Your password is wrong');
            return;
        }
        else if (data.password.length === 0 || data.email.length === 0) {
            setError('You can not submit an empty email or password field');
            return;
        }
    }
    return (
        <div className='pt-40 mb-36'>
            <div className='grid grid-cols-2 gap-40 w-3/4 mx-auto'>
                <div className='w-full mx-auto mt-14'>
                    <img className='w-full' src="/login.svg" alt="" />
                </div>
                <div className='mx-auto w-full bg-[#171818] rounded-lg p-8 mt-20 mb-4'>
                    <h2 className='text-4xl text-center text-white font-semibold mb-3'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className=''>
                            <div className='pb-2'>
                                <label className='text-white' htmlFor="email">Email</label><br />
                                <input {...register("email", { required: true })} className=' bg-white text-black rounded p-2 border-slate-300 border w-full' type="email" name="email" id="" />
                            </div>
                            <div className='pb-2'>
                                <label className='text-white' htmlFor="password">Password</label><br />
                                <input {...register("password", { required: true })} className=' bg-white text-black rounded p-2 border-slate-300 border w-full' type="password" name="password" id="" />
                            </div>
                        </div>
                        <input className='w-full mt-5 bg-[#2cae74] rounded text-black font-semibold p-2 mb-3 cursor-pointer' type="submit" value='Login' /><br />
                    </form>
                    <p className='text-center text-white'>--------- or ---------</p>
                    <div className='flex gap-2 mb-3'>
                        <button onClick={googleLogin} className='w-full bg-[#2cae74] rounded text-black font-semibold p-2 mt-3'>Google</button>
                    </div>
                    <div className='text-center'>
                        <small><span className='text-white'>New to Turbo Toy Car?</span> <Link to='/signup' className='text-[#1d7edd] font-semibold'>Create new account</Link></small>
                    </div>
                </div>
            </div>
            <p className='text-red-800 text-center font-semibold mb-20'>{error}</p>
        </div>
    );
};

export default Login;
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
    useEffect(() => {
        localStorage.setItem('theme', theme);
        const localTheme = localStorage.getItem('theme');
        document.querySelector('html').setAttribute('data-theme', localTheme);
    }, [theme])
    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme('light');
        }
        else {
            setTheme('dark');
        }
    }
    return (
        <div className='flex items-center justify-center mt-14'>
            <div className="fixed w-full py-6 z-10 text-white bg-[#171818]">
                <div className='flex w-3/4 mx-auto justify-between items-center p-3'>
                    <div className='flex gap-2 justify-center items-center'>
                        <img className='w-14' src="/public/pixelcam.png" alt="" />
                        <div>
                            <h3 className="text-3xl text-[#00dcf4] font-semibold">P<span className='text-[#ff9523]'>i</span><span className='text-[#00d776]'>x</span><span className='text-[#ff14ff]'>e</span><span className='text-[#dfc500]'>l</span>Cam</h3>
                        </div>
                    </div>
                    <div className='flex flex-row gap-9 font-semibold justify-center items-center'>
                        <Link className='hover:text-[#00dcf4]' to={'/'}>Home</Link>
                        <Link className='hover:text-[#00dcf4]' to={'/instructors'}>Instructors</Link>
                        <Link className='hover:text-[#00dcf4]' to={'/classes'}>Classes</Link>
                        {
                            user ? <p onClick={handleLogout} className='hover:text-[#00dcf4] cursor-pointer'>Logout</p> : <Link className='hover:text-[#00dcf4]' to={'/login'}>Login</Link>
                        }
                        {
                            user ? <div className='w-10 h-10 relative'><img className='rounded-full w-full h-full object-cover border-2 border-[#00dcf4]' src={user.photoURL} title={user.displayName} alt="user photo" /></div> : <Link className='hover:text-[#00dcf4]' to={'/signup'}>Signup</Link>
                        }
                        <label className="swap swap-rotate hover:text-[#00dcf4]">
                            <input type="checkbox" onChange={handleToggle} />
                            <svg className="swap-on fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" /></svg>
                            <svg className="swap-off fill-current w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
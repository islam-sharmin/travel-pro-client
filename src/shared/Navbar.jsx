import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {

    const [theme, setTheme] = useState('light');

    useEffect( () => {
        localStorage.setItem('theme',theme)
        const localTheme = localStorage.getItem('theme')
        document.querySelector('html').setAttribute('data-theme', localTheme)
    },[theme])

    const handleToggle = e => {
        if (e.target.checked) {
            setTheme('dark');
        }
        else {
            setTheme('light');
        }
    }

    console.log(theme);

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch()
    }


    const navLinks = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? 'font-bold text-purple-600 p-1 border border-purple-600 rounded' : 'font-bold'}>Home</NavLink></li>
        <li><NavLink to='/allTouristSpot' className={({ isActive }) => isActive ? 'font-bold text-purple-600 p-1 border border-purple-600 rounded' : 'font-bold'}>All Tourists Spot</NavLink></li>
        <li><NavLink to='/addTouristSpot' className={({ isActive }) => isActive ? 'font-bold text-purple-600 p-1 border border-purple-600 rounded' : 'font-bold'}>Add Tourists Spot</NavLink></li>
        <li><NavLink to='/myList' className={({ isActive }) => isActive ? 'font-bold text-purple-600 p-1 border border-purple-600 rounded' : 'font-bold'}>My List</NavLink></li>
        <li><NavLink to='/register' className={({ isActive }) => isActive ? 'font-bold text-purple-600 p-1 border border-purple-600 rounded' : 'font-bold'}>Register</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[20] p-2 shadow bg-base-100 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl font-bold text-purple-700">TravelPro</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        navLinks
                    }
                </ul>
            </div>
            <div className="navbar-end gap-5">
            <label className="cursor-pointer grid place-items-center">
                    <input type="checkbox"
                        onChange={handleToggle}
                        className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2" />
                    <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                    <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                </label>
                {user ? (
                    <div className="flex items-center gap-3">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="user pic"
                                className="tooltip tooltip-open tooltip-bottom hover:text-purple-600"
                                src={user?.photoURL || "https://i.ibb.co/p3d9pYn/user.png"}
                                title={user?.displayName || 'user name not fond'}
                            />
                        </div>
                    </div>
                    <Link to="/login"><button onClick={handleLogOut} className="btn bg-purple-600 text-white">Log Out</button></Link>
                </div>
                ) : (
                    <Link to='/login' className="btn bg-purple-600 text-white">Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
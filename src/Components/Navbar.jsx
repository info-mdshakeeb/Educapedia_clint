import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { authUser } from '../Context/UserContext';


const Navbar = () => {

    const { user, logutOut } = useContext(authUser)
    return (
        <div className="navbar bg-base-100 px-12 ">
            <div className="flex-1">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Educapedia</Link>
            </div>
            <div className="flex-none mr-20">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input type="checkbox" className="toggle" />
                    </label>
                </div>

            </div>
            <div className="flex-none">
                {user ?
                    <div className="tooltip tooltip-left" data-tip={user?.displayName}>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                                <div className="w-10 rounded-full">
                                    <img src={user?.photoURL} alt='img' />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-400 rounded-box w-52">
                                <button className=' text-red-400' onClick={logutOut}>Logout</button>
                            </ul>
                        </div>
                    </div>
                    : <Link to='/login'><button className='btn btn-outline mx-3'>Login</button></Link>}
            </div>
        </div>
    );
};

export default Navbar;
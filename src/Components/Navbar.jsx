import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Educapedia</a>
            </div>
            <div className="flex-1">
                <ul className="menu menu-horizontal p-0">
                    <li><NavLink to='/courses'>Courses</NavLink></li>
                    <li><NavLink to='/faq'>FAQ</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                </ul>
            </div>
            <div className="flex-none">
                <div className="">
                    <label className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="" alt='img' />
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
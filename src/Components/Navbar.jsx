import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 container">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Educapedia</a>
            </div>
            <div className="flex-1">
                <ul className="menu menu-horizontal p-0">
                    <li className='px-3'>Login</li>
                    <li>register</li>
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
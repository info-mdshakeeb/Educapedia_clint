import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const SignUp = () => {
    const { successMessage } = AlartMessage()
    const { error, setErro, createUser, setUserNAme, varifymail } = useContext(authUser);
    return (
        <form className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-5xl font-bold mb-2 text-green-400">Register now !</h1>
                    <p>Give All the nessesarry information for registet & ready to go</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Usrname</span>
                            </label>
                            <input type="text" placeholder="username" name='username' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="url" name='photourl' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control  mb-4">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='pass' className="input input-bordered" />
                            <small className=' text-red-500 pt-2' >{error}</small>
                        </div>

                        <small>Alreay have account go
                            <Link to='/login' className='link link-hover text-teal-400'> Login
                            </Link> Page
                        </small>
                        <div className="form-control mt-2">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default SignUp;
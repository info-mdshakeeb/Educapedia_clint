import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const Login = () => {
    const { successMessage, errorMessage } = AlartMessage()
    const { googlelogin, setUser } = useContext(authUser)
    const loginWithGoogle = () => {
        googlelogin()
            .then(rs => {
                setUser(rs.user)
                successMessage('Login Success')
            })
            .catch(er => errorMessage(er.message))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col ">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-2 text-green-400">Login now for Premium access  !</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <p className="link link-hover"><small>Forgot password?</small></p>
                            </label>
                            <small>Dont have Accout go <Link to='/signup' className='link link-hover text-teal-400'> Registation </Link> Page</small>
                        </div>
                        <div className=" mt-6">
                            <button className="btn btn-primary w-3/4 mr-2 ">Login</button>
                            <button onClick={loginWithGoogle} className="btn  btn-info">G</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
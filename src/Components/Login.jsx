import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const Login = () => {
    const { successMessage, errorMessage } = AlartMessage()
    const { googlelogin, setUser, loginWithEmail, setloading } = useContext(authUser)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    const loginWithGoogle = () => {
        setloading(true)
        googlelogin()
            .then(rs => {
                setUser(rs.user)
                successMessage('Login Success')
                navigate(from, { replace: true })
            })
            .catch(er => errorMessage(er.message))
    }
    const heandelLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        setloading(true)
        loginWithEmail(email, pass)
            .then(re => {
                setUser(re.user)
                successMessage('login succesFull 9;')

                navigate(from, { replace: true })
            })
            .catch(er => errorMessage(er.message))
    }
    return (
        <div className="">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold mb-2 text-green-400">Login now for Premium access  !</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={heandelLogin} action="">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" name='email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" name='pass' className="input input-bordered" />
                                    <div className="flex justify-between items-center">
                                        <button className='btn btn-primary my-3 w-1/2'>Login</button>
                                        <div className="ml-5">Or</div>
                                        <div className="flex w-full">
                                            <FaGoogle className='mx-3 cursor-pointer' onClick={loginWithGoogle} ></FaGoogle>
                                            <FaGithub className='cursor-pointer'></FaGithub>
                                        </div>
                                    </div>
                                    <small>Dont have Accout go <Link to='/signup' className='link link-hover text-teal-400'> Registation </Link> Page</small>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
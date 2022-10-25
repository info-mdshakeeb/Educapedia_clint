import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const Login = () => {
    const { successMessage, errorMessage } = AlartMessage()
    const { googlelogin, setUser, loginWithEmail, setError, error, setloading } = useContext(authUser)
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
        const eamil = form.email.value;
        const pass = form.pass.value;
        setloading(true)
        loginWithEmail(eamil, pass)
            .then(re => {
                setUser(re.user)
                successMessage('login succesFull 9;')
                setError('')
                navigate(from, { replace: true })
            })
            .catch(er => setError(er.message))
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
                                    <label className="label">
                                        <p className="link link-hover"><small>Forgot password?</small></p>
                                    </label>
                                    <p><small className=' text-red-500'>{error}</small></p>
                                    <small>Dont have Accout go <Link to='/signup' className='link link-hover text-teal-400'> Registation </Link> Page</small>
                                    <button className='btn btn-primary my-3 w-1/2'>Login</button>
                                    <div className="flex">
                                        <p onClick={loginWithGoogle} className='btn btn-primary '>G</p>
                                        <p className='btn btn-primary'>Git</p>
                                    </div>
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
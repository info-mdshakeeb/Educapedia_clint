import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { authUser } from '../Context/UserContext';
import AlartMessage from '../Hooks/AlartMessage';

const SignUp = () => {
    const { successMessage } = AlartMessage()
    const { error, setError, createUser, setUserNAme, varifymail } = useContext(authUser);

    const heandelRegister = e => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.username.value;
        const pass = form.pass.value;
        const url = form.photourl.value;

        createUser(email, pass)
            .then(rs => {
                setError('')
                setUserNAme(name, url)
                    .then(re => {
                        varifymail()
                            .then(rs => {
                                successMessage('Account Created')
                                setError('Varifiaction mail sand Your mail')
                            })
                    })
            })
            .catch(er => setError(er.message))
        setError('')
    }
    return (
        <form onSubmit={heandelRegister} className="hero min-h-screen bg-base-200">
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
                            <input type="text" placeholder="url" name='photourl' className="input input-bordered" />
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
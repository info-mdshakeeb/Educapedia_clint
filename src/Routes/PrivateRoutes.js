import Lottie from 'lottie-react';
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import loadingAmimation from '../assets/loading.json';
import { authUser } from "../Context/UserContext";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authUser);
    const location = useLocation();
    if (loading) {
        return <div className=" w-48 mx-auto flex h-screen items-center"><Lottie animationData={loadingAmimation} loop={true} /></div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoutes;
import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authUser } from "../Context/UserContext";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(authUser);
    const location = useLocation();
    if (loading) {
        return <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 100 }}>100%</div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children
};

export default PrivateRoutes;
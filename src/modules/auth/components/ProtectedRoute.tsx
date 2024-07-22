
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";


function ProtectedRoute() {
    const auth = useAuth();
    
    return (auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />);
}

export default ProtectedRoute;
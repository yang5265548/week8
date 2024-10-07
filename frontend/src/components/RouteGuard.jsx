import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "./LoadingSpinner";

function RouteGuard({children,requireAuth}){
    const {isAuthenticated,isLoading} = useContext(AuthContext);

    if(isLoading){
        return <LoadingSpinner/>
    }

    if(requireAuth && !isAuthenticated){
        return <Navigate to="/login" replace />
    }

    if(!requireAuth && isAuthenticated){
        return <Navigate to="/" replace />
    }

    return children;

}

export default RouteGuard;
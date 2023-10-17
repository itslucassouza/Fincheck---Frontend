import { Navigate, Outlet } from "react-router-dom";

interface AuthguardProps {
    isPrivate: boolean;
}

export function AuthGuard({isPrivate}: AuthguardProps) {
    const signedIn = false; 

    if(!signedIn && isPrivate) {
        // Redirecionar para login
        return <Navigate to="/login" replace />
    }

    if(signedIn && !isPrivate) {
        // redirecionar para / 
        return <Navigate to="/login" replace />
    }

    return (
        <Outlet />
    )
}
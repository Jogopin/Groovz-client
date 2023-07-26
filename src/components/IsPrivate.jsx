import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"

export default function IsPrivate({children}){
    const {isLoggedIn, isLoading } = useAuth()

    if(isLoading) return <p>Loading.......</p>

    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }else {
        return children
    }
}
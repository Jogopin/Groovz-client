import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import LoadingSpinner from "./LoadingSpinner"

export default function IsPrivate({children}){
    const {isLoggedIn, isLoading } = useAuth()

    if(isLoading) return <LoadingSpinner/>

    if(!isLoggedIn){
        return <Navigate to="/login"/>
    }else {
        return children
    }
}
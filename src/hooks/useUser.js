import { useEffect, useState } from "react";
import { getUserDetails } from "../services/api";

export default function useUser(userId){
    const [userDetails, setUserDetails] = useState({})

    useEffect(()=>{
        if(!userId){
            return
        }
        const fetchUserDetails = async ()=>{
            try{
                const response = await getUserDetails(userId) 
                setUserDetails(response)
            }catch(error){
                console.error(error)
            }
        }
        fetchUserDetails()
    },[userId])

    return {userDetails}
}
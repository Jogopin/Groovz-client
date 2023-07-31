import { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../services/api";

export default function useUserById(userId) {
  const [requestedUserDetails, setRequestedUserDetails] = useState({});

  useEffect(() => {
    if (!userId) {
      return;
    }
    const loadUserDetails = async () => {
      try {
        const response = await getUserDetails(userId);
        setRequestedUserDetails(response);
      } catch (error) {
        console.error(error);
      }
    };
    loadUserDetails();
  }, [userId]);

  const saveUserDetails = async({userId,firstName,lastName,address})=>{
    try{
        const response = await updateUserDetails({userId,firstName,lastName,address})
        setRequestedUserDetails(response)
        return response

    }catch(error){
        console.error("Error updating the user",error)
    }    

  }

    return {requestedUserDetails,saveUserDetails }
}

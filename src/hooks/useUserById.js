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
        // Errors comming from the api  are handled in the callApi function from api.js
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
      // Propagate the error to the caller
      throw error
    }    

  }

    return {requestedUserDetails,saveUserDetails }
}

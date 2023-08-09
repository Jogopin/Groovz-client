import { useEffect, useState } from "react";
import { getUserDetails, updateUserDetails } from "../services/api";

export default function useUserById(userId) {
  const [requestedUserDetails, setRequestedUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const loadUserDetails = async () => {
    if (!userId) {
      return;
    }
    
    try {
      setIsLoading(true);
      const response = await getUserDetails(userId);
      setRequestedUserDetails(response);
    } catch (error) {
      // Errors coming from the api are handled in the callApi function from api.js
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadUserDetails();
  }, [userId]);

  const saveUserDetails = async({userId, firstName, lastName, address}) => {
    try {
      setIsLoading(true);
      const response = await updateUserDetails({userId, firstName, lastName, address});
      setRequestedUserDetails(response);
      return response;
    } catch (error) {
      // Propagate the error to the caller
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  return { requestedUserDetails, saveUserDetails, isLoading };
}

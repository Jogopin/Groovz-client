import { useEffect, useState } from "react";
import useUserById from "../../hooks/useUserById";
import { doneIcon, editIcon, xIcon } from "../../assets/icons";
import EditableUserInfo from "../../components/EditableUserInfo";
import ButtonIcon from "../../components/ButtonIcon";

export default function ProfileDetails({ userId }) {
  const [profileUserDetails, setProfileUserDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
  });
  const { requestedUserDetails,saveUserDetails } = useUserById(userId);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setProfileUserDetails({
      firstName: requestedUserDetails.firstName ?? "",
      lastName: requestedUserDetails.lastName ?? "",
      address: requestedUserDetails.address ?? "",
    });
  }, [requestedUserDetails]);

  const handleSaveClick = async () => {
    try {
      const formUserData = {
        userId,
        firstName: profileUserDetails.firstName,
        lastName: profileUserDetails.lastName,
        address: profileUserDetails.address,
      };
      
      await saveUserDetails(formUserData)
    } catch (error) {
      console.log("error in saving the user details", error);
    } finally {
      setIsEditing(false);
    }
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleCancelClick = () => {
    setIsEditing(false);
  };
  return (
    <>
      {/* username & email */}
      <section className="mx-auto mb-4 flex  flex-col gap-5 rounded-lg bg-white p-6 text-zinc-800 shadow-md md:flex-row">
        <div className="w-full">
          <label className="block text-xs font-medium text-zinc-500">
            {"Username"}
          </label>
          <p className="mt-1 w-full px-2 py-1 font-medium sm:text-base">
            {requestedUserDetails.username}
          </p>
        </div>
        <div className="w-full">
          <label className="block text-xs font-medium text-zinc-500">
            {"Email"}
          </label>
          <p className="mt-1 w-full px-2 py-1 font-medium sm:text-base">
            {requestedUserDetails.email}
          </p>
        </div>
      </section>
      {/* Name & Address*/}
      <section className="md:3/5 mx-auto mb-4 rounded-lg bg-white p-6 text-zinc-800 shadow-md">
        {/* Input Form  Display*/}
        <EditableUserInfo
          userPersonalDetails={profileUserDetails}
          setUserPersonalDetails={setProfileUserDetails}
          isEditing={isEditing}
        />
        {/* Edit Buttons */}
        <div className="mt-6 flex justify-end">
          {!isEditing ? (
            <ButtonIcon
              handleClick={handleEditClick}
              iconImage={editIcon}
              alt={"edit-icon"}
            />
          ) : (
            <div className="flex gap-4">
              <ButtonIcon
                variant={"secondary"}
                handleClick={handleSaveClick}
                iconImage={doneIcon}
                alt={"save"}
              />
              <ButtonIcon
                handleClick={handleCancelClick}
                iconImage={xIcon}
                alt={"cancel"}
              />
            </div>
          )}
        </div>
      </section>
    </>
  );
}


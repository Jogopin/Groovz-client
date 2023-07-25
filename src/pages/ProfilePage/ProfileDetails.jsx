import { useEffect, useState } from "react";
import { updateUserDetails } from "../../services/api";
import useUser from "../../hooks/useUser";
import InputLabel from "../../components/InputLabel";

export default function ProfileDetails({ userId }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const { userDetails } = useUser(userId);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFirstName(userDetails.firstName ?? "");
    setLastName(userDetails.lastName ?? "");
    setAddress(userDetails.address ?? "");
  }, [userDetails]);

  const handleEditClick = () => {
    setIsEditing(true);
  };
  const handleSaveClick = async () => {
    try {
      const userData = {
        userId: user._id,
        firstName,
        lastName,
        address,
      };
      await updateUserDetails(userData);
    } catch (error) {
      console.log("error in saving the user details", error);
    } finally {
      setIsEditing(false);
    }
  };
  const handleCancelClick = () => {
    setFirstName(userDetails.firstName);
    setLastName(userDetails.lastName);
    setAddress(userDetails.address);
    setIsEditing(false);
  };
  return (
    <>
      {/* username & email */}
      <div className="flex flex-col rounded-md">
        <div className="w-full rounded-md bg-zinc-700 p-2 text-zinc-50">
          <label className="block font-medium sm:text-xs">{"Username"}</label>
          <p className="mt-1 cursor-default px-2  py-0 text-center  font-medium  sm:text-base">
            {" "}
            {userDetails.username}
          </p>
        </div>
        <div className="my-2 w-full  rounded-md  border-2 border-zinc-800 p-2 text-zinc-800 ">
          <label className="block font-medium sm:text-xs">{"Email"}</label>
          <p className="mt-1 cursor-default  px-2 py-0 font-medium  sm:text-base">
            {userDetails.email}
          </p>
        </div>
      </div>
      {/* Name & Address*/}
      <div className="my-10 flex w-5/6 flex-col gap-4 rounded-md  border-2 border-zinc-800 bg-white p-4">
        <InputLabel
          id={"firstName"}
          label={"First Name"}
          input={{
            name: "firstName",
            value: firstName,
            onChange: (e) => setFirstName(e.target.value),
            placeholder: "John",
            disabled: !isEditing,
          }}
        />
        <InputLabel
          label={"Last Name"}
          id={"last-name"}
          input={{
            name: "lastName",
            value: lastName,
            onChange: (e) => setLastName(e.target.value),
            placeholder: "Doe",
            disabled: !isEditing,
          }}
        />
        <InputLabel
          label={"Shipping address"}
          id={"address-input"}
          input={{
            name: "address",
            value: address,
            onChange: (e) => setAddress(e.target.value),
            placeholder: "Street, City, Country",
            disabled: !isEditing,
          }}
        />
      </div>

      {!isEditing ? (
        <button onClick={handleEditClick} className="btn-secundary">
          Edit
        </button>
      ) : (
        <div className="flex gap-8">
          <button onClick={handleSaveClick} className="btn-primary">
            Save
          </button>
          <button onClick={handleCancelClick} className="btn-secundary">
            Cancel
          </button>
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import useUser from "../hooks/useUser";
import InputLabel from "../components/InputLabel";
import { updateUserDetails } from "../services/api";

export default function Profile() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const { user } = useAuth();
  const userId = user ? user._id : null;
  const { userDetails } = useUser(userId);
  const [openTab, setOpenTab] = useState(1);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setFirstName(userDetails.firstName ?? "");
    setLastName(userDetails.lastName ?? "");
    setAddress(userDetails.address ?? "");
    console.log("userDetails", userDetails);
  }, [userDetails]);

  const handleTabClick = (e, tabNum) => {
    e.preventDefault();
    setOpenTab(tabNum);
  };
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
    <div className="mx-auto mt-12">
      <div className="m-auto flex max-w-xl flex-col items-center  text-zinc-800">
        {/* TABS */}
        <ul className="flex rounded-t-md bg-zinc-400 font-medium sm:text-base">
          <li>
            <button
              onClick={(e) => {
                handleTabClick(e, 1);
              }}
              className={` ${
                openTab === 1
                  ? "scale-105 rounded-t-md bg-zinc-300"
                  : " rounded-bl-md rounded-tr-md "
              }  flex space-x-2 px-4 py-2`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 sm:h-6 sm:w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
                />
              </svg>
              <span className="">Personal Details</span>
            </button>
          </li>
          <li>
            <button
              onClick={(e) => {
                handleTabClick(e, 2);
              }}
              className={` ${
                openTab === 2
                  ? "scale-105 rounded-t-md bg-zinc-300"
                  : " rounded-bl-md rounded-tr-md"
              }  px-4 py-2`}
            >
              Orders
            </button>
          </li>
        </ul>
        <div className="w-full  rounded-md border-b-4 border-l-2 border-zinc-400 bg-zinc-300 px-1 py-4 shadow-lg">
          {/* Personal Details */}
          <section
            className={`${
              openTab === 1 ? "block" : "hidden"
            } relative my-4 flex flex-col items-center`}
          >
            {/* username & email */}
            <div className="flex flex-col rounded-md">
              <div className="w-full rounded-md bg-zinc-700 p-2 text-zinc-50">
                <label className="block font-medium sm:text-xs">
                  {"Username"}
                </label>
                <p className="mt-1 cursor-default px-2  py-0 text-center  font-medium  sm:text-base">
                  {" "}
                  {userDetails.username}
                </p>
              </div>
              <div className="my-2 w-full  rounded-md  border-2 border-zinc-800 p-2 text-zinc-800 ">
                <label className="block font-medium sm:text-xs">
                  {"Email"}
                </label>
                <p className="mt-1 cursor-default  px-2 py-0 font-medium  sm:text-base">
                  {userDetails.email}
                </p>
              </div>
            </div>
            {/* Name & Address*/}
            <div className="my-10 flex flex-col gap-4 w-5/6 rounded-md  border-2 border-zinc-800 bg-white p-4">
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
          </section>
          {/* Orders */}
          <section
            className={`${
              openTab === 2 ? "block" : "hidden"
            } relative mx-auto my-4 flex w-5/6 flex-col`}
          >
            React JS with Tailwind CSS Tab 2 Content show
          </section>
        </div>
      </div>
    </div>
  );
}

import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import UserOrders from "./UserOrders";
import ProfileDetails from "./ProfileDetails";

export default function Profile() {
  const { user } = useAuth();
  const userId = user ? user._id : null;

  const [openTab, setOpenTab] = useState(1);

  const handleTabClick = (e, tabNum) => {
    e.preventDefault();
    setOpenTab(tabNum);
  };

  return (
    <>
      <nav className="h-16 w-full bg-zinc-700">
        <ul className="flex  h-full  items-center justify-evenly font-bold text-zinc-300">
          <li>
            <button
              onClick={(e) => {
                handleTabClick(e, 1);
              }}
              className={` ${
                openTab === 1 ? "active-white" : ""
              }  flex space-x-2 p-2`}
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
                openTab === 2 ? "active-white" : ""
              }  flex space-x-2 p-2`}
            >
              Orders
            </button>
          </li>
        </ul>
      </nav>
      <div className="mx-auto mt-10 sm:w-4/5 lg:w-2/5">
        {openTab === 1 && <ProfileDetails userId={userId} />}
        {openTab === 2 && <UserOrders userId={userId} />}
      </div>
    </>
  );
}

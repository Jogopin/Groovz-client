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
            <ProfileDetails userId={userId} />
          </section>
          {/* Orders */}
          <section
            className={`${
              openTab === 2 ? "block" : "hidden"
            } relative mx-auto my-4 flex w-5/6 flex-col`}
          >
            <UserOrders userId={userId} />
          </section>
        </div>
      </div>
    </div>
  );
}

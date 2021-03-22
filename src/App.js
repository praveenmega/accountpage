import React, { useState } from "react";
import CardComponent from "./CardComponent";

function App() {
  const [sideDrawer, setSideDrawer] = useState("false");
  const [profileDrawer, setProfileDrawer] = useState("false");

  const sideDrawerHandler = () => {
    setSideDrawer(!sideDrawer);
  };

  const profileDrawerHandler = () => {
    setProfileDrawer(!profileDrawer);
  };

  return (
    <div>
      <header className="bg-gray-800 border-b border-gray-700 h-16">
        <div className="max-w-7xl mx-auto flex p-3 items-center justify-between">
          <div className="flex flex-1">
            <div>
              <img
                className="w-10 h-10 ml-3"
                src="/assets/logo.png"
                alt="logo"
              />
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center lg:flex lg:flex-1">
              <div className="text-white text-base flex-1 text-center ml-2">
                <button>Dashboard</button>
              </div>
              <div className="text-white text-base flex-1 text-center">
                <button>Team</button>
              </div>
              <div className="text-white text-base flex-1 text-center">
                <button>Projects</button>
              </div>
              <div className="text-white text-base flex-1 text-center">
                <button>Calendar</button>
              </div>
              <div className="text-white text-base flex-1 text-center">
                <button>Report</button>
              </div>
              <div className="flex-1 lg:hidden"></div>
              <div className="flex flex-1 items-center lg:hidden">
                <div className="sm:text-base sm:flex-1 sm:text-center">
                  <button>
                    <svg
                      className="h-6 w-6 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-center relative sm:flex-1">
                  <button
                    className="focus:outline-none"
                    onClick={profileDrawerHandler}
                  >
                    <img
                      className="h-8 w-8 rounded-full"
                      src="/assets/author.jpg"
                      alt="user"
                    />
                  </button>
                  <div
                    className={`absolute top-10 right-0 bg-white w-40 h-auto rounded-md ${
                      profileDrawer ? "" : "hidden"
                    } `}
                  >
                    <div className="ml-2 mt-2 text-gray-600 text-sm flex-1 h-8">
                      <button className="focus:outline-none w-full text-left">
                        Your Profile
                      </button>
                    </div>
                    <div className="ml-2 text-left text-gray-600 text-sm flex-1 h-8">
                      <button className="focus:outline-none w-full text-left">
                        Settings
                      </button>
                    </div>
                    <div className="ml-2 text-left text-gray-600 text-sm flex-1 h-8">
                      <button className="focus:outline-none w-full text-left">
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
            <div>
              <button>
                <svg
                  className="h-6 w-6 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            </div>
            <div className="mr-3 ml-6 relative">
              <button
                className="focus:outline-none"
                onClick={profileDrawerHandler}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src="/assets/author.jpg"
                  alt="user"
                />
              </button>
              <div
                className={`absolute top-10 right-0 bg-white w-40 h-auto rounded-md ${
                  profileDrawer ? "" : "hidden"
                } `}
              >
                <div className="ml-2 mt-2 text-gray-600 text-sm flex-1 h-8">
                  <button className="focus:outline-none w-full text-left">
                    Your Profile
                  </button>
                </div>
                <div className="ml-2 text-left text-gray-600 text-sm flex-1 h-8">
                  <button className="focus:outline-none w-full text-left">
                    Settings
                  </button>
                </div>
                <div className="ml-2 text-left text-gray-600 text-sm flex-1 h-8">
                  <button className="focus:outline-none w-full text-left">
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div
            className="text-white mr-3 space-y-1 sm:hidden"
            onClick={sideDrawerHandler}
          >
            <div className="h-1 w-8 bg-white rounded-sm"></div>
            <div className="h-1 w-8 bg-white rounded-sm"></div>
            <div className="h-1 w-8 bg-white rounded-sm"></div>
          </div>
        </div>
      </header>

      <div
        className={`w-full h-full absolute top-16 bg-gray-800 z-50 sm:hidden transition-all duration-500 ${
          sideDrawer ? "" : "hidden"
        }`}
      >
        <div className="ml-3 mt-2 flex-col justify-center items-center">
          <div className="text-white text-sm flex-1 h-10">
            <button>Dashboard</button>
          </div>
          <div className="text-white text-sm flex-1 h-10">
            <button>Team</button>
          </div>
          <div className="text-white text-sm flex-1 h-10">
            <button>Projects</button>
          </div>
          <div className="text-white text-sm flex-1 h-10">
            <button>Calendar</button>
          </div>
          <div className="text-white text-sm flex-1 h-10">
            <button>Report</button>
          </div>
        </div>
        <div className="border-t border-b border-gray-700">
          <div className="ml-3 mt-2 flex items-start h-10">
            <div className="self-center">
              <button>
                <img
                  className="w-8 h-8 rounded-full"
                  src="/assets/author.jpg"
                  alt="user"
                />
              </button>
            </div>
            <div className="ml-2">
              <p className="text-xs text-white">Tom Cook</p>
              <p className="text-xs text-gray-400">tom@apple.net</p>
            </div>
          </div>
          <div className="ml-3 mt-2 flex-col justify-center items-center">
            <div className="text-gray-300 text-sm flex-1 h-10">
              <button>Your Profile</button>
            </div>
            <div className="text-gray-300 text-sm flex-1 h-10">
              <button>Settings</button>
            </div>
            <div className="text-gray-300 text-sm flex-1 h-10">
              <button>Sign Out</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800">
        <div className="max-w-7xl mx-auto pt-5 pb-32  px-4 sm:px-6 lg:px-8">
          <div>
            <div className="flex justify-between">
              <div>
                <h2 className="text-3xl leading-9 font-bold text-white">
                  Backend Developer
                </h2>
                <div className="text-gray-400 block mt-2 sm:flex">
                  <div className="sm:mr-2 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                      <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                    </svg>
                    <p className="text-sm ml-1">Full-time</p>
                  </div>
                  <div className="sm:mx-2 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-1 text-sm">Remote</p>
                  </div>
                  <div className="sm:mx-2 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-1 text-sm">$120k-140k</p>
                  </div>
                  <div className="sm:mx-2 flex items-center">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="ml-1 text-sm">closing on January 9, 2020</p>
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex">
                <span className=" ml-3">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-gray-700 border border-transparent shadow-sm rounded-md text-sm text-white"
                  >
                    <svg
                      className="h-4 w-4 text-gray-400 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    Edit
                  </button>
                </span>
                <span className=" ml-3 ">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-gray-700 border border-transparent shadow-sm rounded-md text-sm text-white"
                  >
                    <svg
                      className="h-4 w-4 text-gray-400 mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View
                  </button>
                </span>
                <span className=" ml-3">
                  <button
                    type="button"
                    class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-blue-500 border border-transparent shadow-sm rounded-md text-sm text-white"
                  >
                    <svg
                      className="h-4 w-4 text-white mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Publish
                  </button>
                </span>
              </div>
            </div>
            <div className="hidden mt-5 sm:flex lg:hidden">
              <span>
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-gray-700 border border-transparent shadow-sm rounded-md text-sm text-white"
                >
                  <svg
                    className="h-4 w-4 text-gray-400 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                  Edit
                </button>
              </span>
              <span className=" ml-3 ">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-gray-700 border border-transparent shadow-sm rounded-md text-sm text-white"
                >
                  <svg
                    className="h-4 w-4 text-gray-400 mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  View
                </button>
              </span>
              <span className=" ml-3">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-blue-500 border border-transparent shadow-sm rounded-md text-sm text-white"
                >
                  <svg
                    className="h-4 w-4 text-white mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Publish
                </button>
              </span>
            </div>
            <div className="mt-5 sm:hidden flex items-center">
              <span className="mr-3">
                <button
                  type="button"
                  class="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-blue-500 border border-transparent shadow-sm rounded-md text-sm text-white"
                >
                  <svg
                    className="h-4 w-4 text-white mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Publish
                </button>
              </span>
              <span>
                <button className="inline-flex items-center px-4 py-2 sm:px-2 md:px-4 bg-blue-500 border border-transparent shadow-sm rounded-md text-sm text-white">
                  <select className="bg-blue-500 focus:outline-none">
                    <option>More</option>
                    <option>Edit</option>
                    <option>View</option>
                  </select>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="-mt-24">
        <div className="max-w-7xl mx-auto pb-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow overflow-hidden rounded-md">
            <div className="bg-white px-4 pt-5 border-b border-gray-200 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Job Postings
              </h3>
              <div>
                <div className="py-4 sm:hidden">
                  <select className="block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none rounded-md">
                    <option>My Account</option>
                    <option>Company</option>
                    <option>Team Members</option>
                    <option>Billing</option>
                  </select>
                </div>
                <div className="hidden sm:block">
                  <div className="">
                    <nav className="-mb-px flex">
                      <a
                        href="/"
                        className="whitespace-nowrap py-4 px-1 border-b-2 border-transparent font-medium text-gray-500"
                      >
                        My Account
                      </a>
                      <a
                        href="/"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500"
                      >
                        Company
                      </a>
                      <a
                        href="/"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500"
                      >
                        Team Members
                      </a>
                      <a
                        href="/"
                        className="whitespace-nowrap ml-8 py-4 px-1 border-b-2 border-transparent font-medium text-gray-500"
                      >
                        Billing
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-4 pt-4 pb-3 sm:px-6">
              <label for="filter_candidates" className="sr-only">
                Filter Candidates
              </label>
              <div className="flex rounded-md shadow-sm">
                <div className="relative flex-grow focus-within:z-10">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      className="h-5 w-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <input
                    id="filter_candidates"
                    className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                    placeholder="John doe"
                  />
                </div>
                <button className="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-r-md">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span className="ml-2">Filter</span>
                </button>
              </div>
            </div>
            <CardComponent />
            <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
              <div className="flex-1 flex justify-between sm:hidden">
                <a
                  href="/"
                  className="relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm"
                >
                  Previous
                </a>
                <a
                  href="/"
                  className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm"
                >
                  Next
                </a>
              </div>
              <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm leading-5 text-gray-700">
                    Showing <span className="font-medium">1</span> to{" "}
                    <span className="font-medium">10</span> of{" "}
                    <span className="font-medium">97</span> results
                  </p>
                </div>
                <div>
                  <span class="relative z-0 inline-flex shadow-sm">
                    <button
                      type="button"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      1
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      2
                    </button>
                    <button
                      type="button"
                      class="hidden -ml-px relative md:inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      3
                    </button>
                    <span className="hidden -ml-px relative md:inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none">
                      ...
                    </span>
                    <button
                      type="button"
                      class="hidden -ml-px relative md:inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      8
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      9
                    </button>
                    <button
                      type="button"
                      class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      10
                    </button>
                    <button
                      type="button"
                      className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-sm text-gray-700 focus:outline-none"
                    >
                      <svg
                        className="h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  HiOutlineHome,
  HiOutlineRectangleGroup,
  HiOutlineVideoCamera,
  HiOutlineUser,
} from "react-icons/hi2";
import Logout from "../../features/authentication/Logout";
import AddMarathonModal from "../../features/marathons/AddMarathonModal";

const tabs = [
  { name: "dashboard", icon: HiOutlineHome, link: "/dashboard" },
  { name: "marathons", icon: HiOutlineRectangleGroup, link: "/marathons" },
  { name: "movies", icon: HiOutlineVideoCamera, link: "/movies" },
  { name: "account", icon: HiOutlineUser, link: "/account" },
];

function AppMenu() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState();

  const urlSegment = location.pathname.split("/");

  function handleClick(tab) {
    if (tab.name === active) return;
    setActive(tab.name);
    navigate(tab.link);
  }

  useEffect(
    function () {
      setActive(urlSegment[1]);
    },
    [urlSegment]
  );

  return (
    <div className="row-start-2 md:row-span-2 flex flex-row bg-stone-800 border-t-[0.5px] border-stone-600 shadow-lg md:pt-32 md:pb-12 md:flex-col justify-between items-center  md:border-r-[0.5px]">
      <AddMarathonModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="flex md:flex-col gap-4 w-full">
        <ul className=" text-sm font-semibold flex md:flex-col gap-4 w-full justify-around">
          {tabs.map((tab, index) => {
            const Icon = tab.icon;
            return (
              <li key={index}>
                <a
                  className={`relative py-2 md:pl-8 flex items-center gap-3 cursor-pointer capitalize transition-all duration-200 hover:text-main-500 ${
                    active === tab.name ? "text-main-500" : "text-stone-300"
                  }`}
                  onClick={() => handleClick(tab)}
                >
                  <Icon className=" text-2xl" />{" "}
                  <span className="hidden md:inline">{tab.name}</span>
                  {
                    <div
                      className={`hidden md:block w-1 h-full absolute left-0 bg-main-500 transition-all duration-200 origin-left ${
                        active === tab.name ? "scale-x-100" : "scale-x-0"
                      }`}
                    ></div>
                  }
                </a>
              </li>
            );
          })}
        </ul>
        <button
          className=" hidden md:block bg-main-500 w-48 py-3 rounded-md text-sm font-semibold text-stone-50 self-center"
          onClick={setIsOpen}
        >
          Create new marathon
        </button>
      </nav>
      <div className="hidden md:block md:self-start">
        <Logout />
      </div>
    </div>
  );
}

export default AppMenu;

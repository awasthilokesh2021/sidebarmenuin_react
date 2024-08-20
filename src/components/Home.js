import React, { useState } from "react";
import Header from "./Header";
import { HiMenu } from "react-icons/hi";
import { FaHome } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { IoIosContacts } from "react-icons/io";
import { MdCastForEducation } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { Link } from "react-router-dom";

const Home = () => {
  const [open, setOpen] = useState(true);
  const menu = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "contact", link: "/", icon: IoIosContacts },
    { name: "About", link: "/", icon: FcAbout },
    { name: "dashboard", link: "/", icon: MdDashboard, margin: true },
    { name: "Carrier", link: "/", icon: MdCastForEducation },
    { name: "settings", link: "/", icon: MdCastForEducation },
    { name: "Company", link: "/", icon: MdCastForEducation, margin: true },
    { name: "info", link: "/", icon: MdCastForEducation },
  ];

  return (
    <div className="flex">
      <div
        className={`bg-black min-h-screen ${
          open ? "w-72" : "w-12"
        } duration-500 text-white`}
      >
        <div className="py-5 px-2 flex justify-end">
          <HiMenu
            size={28}
            className="text-white cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col mt-4 relative gap-3 text-center text-white">
          {menu?.map((value, i) => (
            <Link
              to={value?.link}
              key={i}
              className={`${
                value?.margin && "mt-5"
              } hover:bg-slate-500 font-medium py-1 flex gap-4 px-4 items-center`}
            >
              <div>{React.createElement(value?.icon, { size: "20" })}</div>
              <h2
                className={`duration-500 ${
                  !open && "opacity-0 translate-x-30 overflow-hidden"
                }`}
              >
                {value?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="bg-slate-400 w-full">
        <Header />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { CiHome } from "react-icons/ci";
import { MdInput } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { SlSettings } from "react-icons/sl";
import { HiOutlineGift } from "react-icons/hi";
import Avatar from "../../asset/Avatar.png";
import { Link } from "react-router-dom";

export default function SideBar() {
  const navItems = [
    {
      id: 0,
      name: "Home",
      to: "/dashboard",
      icon: <CiHome className="text-xl" />,
    },
    {
      id: 1,
      name: "Input farm Details",
      to: "/dashboard/inputs",
      icon: <MdInput className="text-xl" />,
    },
  ];

  const navList = [
    {
      id: 0,
      name: "settings",
      to: "/dashboard/settings",
      icon: <SlSettings className="text-xl" />,
    },
    {
      id: 1,
      name: "help center",
      to: "/dashboard/help-center",
      icon: <MdOutlineHeadsetMic className="text-xl" />,
    },
    {
      id: 2,
      name: "refer family & friends",
      to: "/dashboard/refer",
      icon: <HiOutlineGift />,
    },
  ];
  return (
    <aside className="h-full w-[18%] absolute overflow-hidden top-0 left-0 transition duration-150 ease-in">
      <nav className="grid p-2.5">
        <ul>
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="py-3 px-2 flex items-center text-base gap-4 w-full capitalize"
            >
              <span className="">{item.icon}</span>
              <span className="hidden md:flex">{item.name}</span>
            </Link>
          ))}
        </ul>
        <div className="absolute gap-5 mb-10 bottom-0">
          <ul>
            {navList.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className="py-3 px-2 flex items-center text-base gap-4 w-full capitalize"
              >
                <span className="">{item.icon}</span>
                <span className="hidden md:flex">{item.name}</span>
              </Link>
            ))}
          </ul>

          <div className="flex flex-row mt-14 justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              <img src={Avatar} alt="" className="h-10 w-10 rounded-full" />

              <span className="hidden md:flex flex-col w-[132px]">
                <span className="font-semibold">John Doe</span>
                <span className="break-all text-sm text-[grey/60]">
                  example@gmail.com
                </span>
              </span>
            </div>

            <FiLogOut className="hidden md:flex text-xl mr-2 text-end" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

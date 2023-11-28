import React from "react";
import { MdInput } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import Avatar from "../../asset/Avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

const navItems = [
  {
    id: 0,
    name: "enter crop Details",
    to: "/dashboard/inputs",
    icon: <MdInput className="text-xl" />,
  },
];

const navList = [
  {
    id: 0,
    name: "help center",
    to: "/dashboard/support",
    icon: <MdOutlineHeadsetMic className="text-xl" />,
  },
  {
    id: 1,
    name: "refer family & friends",
    to: "/dashboard/refer",
    icon: <HiOutlineGift />,
  },
];

interface Props {
  show?: boolean;
}

export default function SideBar({ show = false }: Props) {
  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogOut = async () => {
    logout(() => {
      return navigate("/", { replace: true });
    });
  };

  return (
    <aside
      className={`absolute top-[72px] bg-white h-screen ${
        show ? "flex z-10" : "hidden"
      }`}
    >
      <nav className="flex flex-col justify-between h-[82%] w-[252px] p-2">
        <ul className="">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "bg-[#8AB88A] py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize rounded-xl text-[#004700]"
                  : "py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize"
              }
            >
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </NavLink>
          ))}
        </ul>

        <div className="mt-auto">
          <ul className="">
            {navList.map((item) => (
              <NavLink
                key={item.id}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#8AB88A] py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize rounded-xl text-[#004700]"
                    : "py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize"
                }
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </ul>

          <div className="flex flex-row mt-10 justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              <img src={Avatar} alt="" className="h-10 w-10 rounded-full" />

              <span className="flex flex-col w-[132px]">
                <span className="font-semibold">
                  {user && user?.data.user.name}
                </span>
                <span className="break-all text-sm text-[grey/60]">
                  {user && user?.data.user.email}
                </span>
              </span>
            </div>

            <button type="submit" onClick={handleLogOut}>
              <FiLogOut className=" text-xl mr-2 text-end" />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

import React from "react";
// import { CiHome } from "react-icons/ci";
import { MdInput } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import Avatar from "../../asset/Avatar.png";
import { Link, useNavigate } from "react-router-dom";
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
    to: "/dashboard/help-center",
    icon: <MdOutlineHeadsetMic className="text-xl" />,
  },
  {
    id: 1,
    name: "refer family & friends",
    to: "/dashboard/refer",
    icon: <HiOutlineGift />,
  },
];

export default function SideBar() {
  const { user } = useAuth();

  // const navigate = useNavigate();

  // const handleLogOut = async () => {
  //   try {
  //     logout(() => {
  //       navigate("/");
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  return (
    <aside className="hidden lg:flex w-[250px] p-3 fixed h-[90%] top-[72px] bg-white z-1">
      <nav className="flex flex-col">
        <ul className="">
          {navItems.map((item) => (
            <Link key={item.id} to={item.to} className="py-4 px-2.5 flex items-center rounded-xl text-base gap-4 w-full capitalize bg-[#8AB88A]">
              <span className="">{item.icon}</span>
              <span className="hidden md:flex">{item.name}</span>
            </Link>
          ))}
        </ul>

        <div className="mt-auto">
          <ul className="">
            {navList.map((item) => (
              <Link key={item.id} to={item.to} className="py-3 px-2 flex items-center text-base gap-4 w-full capitalize">
                <span className="">{item.icon}</span>
                <span className="hidden md:flex">{item.name}</span>
              </Link>
            ))}
          </ul>

          <div className="flex flex-row mt-10 justify-between items-center">
            <div className="flex flex-row space-x-2 items-center">
              <img src={Avatar} alt="" className="h-10 w-10 rounded-full" />

              <span className="hidden md:flex flex-col w-[132px]">
                <span className="font-semibold">{user?.data.user.name}</span>
                <span className="break-all text-sm text-[grey/60]">{user?.data.user.email}</span>
              </span>
            </div>

            <FiLogOut className="hidden md:flex text-xl mr-2 text-end" />
          </div>
        </div>
      </nav>
    </aside>
  );
}

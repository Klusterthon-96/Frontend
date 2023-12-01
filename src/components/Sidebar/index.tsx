/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { MdInput } from "react-icons/md";
import { FiLogOut } from "react-icons/fi";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { HiOutlineGift } from "react-icons/hi";
import Avatar from "../../asset/Avatar.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSocket } from "../../socket";

type Session = {
    _id: string;
    name: string;
    query_result: object; // Update with the actual type of query_result
};

const navItems = [
    {
        id: 0,
        name: "enter crop Details",
        to: "/dashboard/inputs",
        icon: <MdInput className="text-xl" />
    }
];

const navList = [
    {
        id: 0,
        name: "help center",
        to: "/dashboard/support",
        icon: <MdOutlineHeadsetMic className="text-xl" />
    },
    {
        id: 1,
        name: "refer family & friends",
        to: "/dashboard/refer",
        icon: <HiOutlineGift />
    }
];

export default function SideBar() {
    const socket = useSocket();
    const { user } = useAuth();

    const [isLoading, setIsLoading] = useState(false);

    const [sessions, setSessions] = useState<Session[] | undefined>();

    const navigate = useNavigate();

    const token = user?.data.accessToken;

    const handleLogoutPrompt = () => {
        Swal.fire({
            title: "Do you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#006400",
            backdrop: "rgba(0, 0, 0, 0.7)",
            allowOutsideClick: false,
            allowEscapeKey: false,
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!",
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/auth/logout`, { withCredentials: true }).then(() => {
                    localStorage.removeItem("user");
                    localStorage.removeItem("isVerified");
                    navigate(`/auth/login`);
                });
            }
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Logged Out!",
                    icon: "success"
                });
            }
        });
    };

    useEffect(() => {
        const getAllSession = async () => {
            setIsLoading(true);
            try {
                const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/session/`, {
                    withCredentials: true,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setSessions(response.data.data.sessions);

                setIsLoading(false);
            } catch (error) {
                console.error("error", error);
                setIsLoading(false);
            }
        };

        getAllSession();
    }, [token]);

    useEffect(() => {
        const handleNewSession = (result: Session) => {
            setSessions((prevSessions: any) => [result, ...prevSessions]);
        };

        socket.on("connect", () => {
            console.log("Socket connected");
            socket.on("session received", handleNewSession);
        });
        return () => {
            socket.off("session received", handleNewSession);
        };
    }, [socket]);

    return (
        <aside className={`hidden lg:flex absolute top-[65px] bg-white h-screen`}>
            <nav className="flex flex-col justify-between h-[88%] w-[252px] p-2">
                <ul className="">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.id}
                            to={item.to}
                            className={({ isActive }) =>
                                isActive
                                    ? "bg-[#8AB88A] py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize rounded-xl text-green-900 font-semibold"
                                    : "py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize"
                            }
                        >
                            <span>{item.icon}</span>
                            <span>{item.name}</span>
                        </NavLink>
                    ))}
                </ul>

                {/* SESSIONS HISTORY LINK */}

                {!isLoading ? (
                    <ul className="my-[30px] h-[60%] overflow-y-scroll">
                        {sessions?.map((item: Session) => (
                            <li key={item._id}>
                                <NavLink
                                    to={`/dashboard/response/${item._id}`}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "bg-[#8AB88A] py-3 px-2 flex items-center text-base gap-4 w-full capitalize rounded-xl text-green-900 font-semibold"
                                            : "py-3 px-2 flex items-center text-base gap-4 w-full capitalize"
                                    }
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <>
                        <div className="space-y-3">
                            <Skeleton height={48} borderRadius={12} />
                            <Skeleton height={48} borderRadius={12} />
                            <Skeleton height={48} borderRadius={12} />
                        </div>
                    </>
                )}

                <div className="mt-auto">
                    <ul className="">
                        {navList.map((item) => (
                            <NavLink
                                key={item.id}
                                to={item.to}
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-[#8AB88A] py-3 px-2 mb-3 flex items-center text-base gap-4 w-full capitalize rounded-xl text-green-900 font-semibold"
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
                                <span className="font-semibold">{user && user?.data.user.name}</span>
                                <span className="break-all text-sm text-[grey/60]">{user && user?.data.user.email}</span>
                            </span>
                        </div>

                        <button type="submit" onClick={handleLogoutPrompt}>
                            <FiLogOut className=" text-xl mr-2 text-end" />
                        </button>
                    </div>
                </div>
            </nav>
        </aside>
    );
}

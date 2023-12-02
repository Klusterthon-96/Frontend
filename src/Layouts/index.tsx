import React from "react";
import AuthGuard, { GuestGuard } from "../AuthGuard/AuthGuard";
import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
// import HomePage from "../page/HomePage";

export function Home() {
    return (
        <main className="flex flex-col h-screen flex-1 overflowhidden max-w-[1440px] fixed w-full mx-auto left-0 right-0">
            <Header />
            <AuthGuard>
                <div className="">
                    <SideBar />
                    <div className="">
                        <div className="scroll absolute top-[65px] w-full lg:left-[258px] lg:w-[75%] xl:w-[82%] h-screen bg-[#F5F5F5] p-4 font-sans overflow-y-auto">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </AuthGuard>
        </main>
    );
}

export function Landing() {
    return (
        <main className="max-w-[1440px] mx-auto h-screen">
            <GuestGuard>
                <Outlet />
            </GuestGuard>
        </main>
    );
}

import Header from "../components/Header";
import SideBar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
// import HomePage from "../page/HomePage";

export function Home() {
  return (
    <main className="flex flex-col h-screen max-w-[1380px] mx-auto">
      <Header />
      <div className="flex flex-row">
        <SideBar />
        <div className="flex-1 flex-col bg-neutral-500/30 lg:ml-[252px] mt-[72px]">
          <Outlet />
        </div>
      </div>
    </main>
  );
}

export function Landing() {
  return (
    <main className="bg-neutral-200/30 max-w-[1380px] mx-auto">
      <Outlet />
    </main>
  );
}

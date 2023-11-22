import SideBar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
// import HomePage from "../page/HomePage";

export function Home() {
  return (
    <main className="flex h-screen">
      <SideBar />
      <div className="flex h-screen absolute left-[18%] flex-1 flex-col bg-neutral-200/30">
        <Outlet />
      </div>
    </main>
  );
}

export function Landing() {
  return (
    <main className="h-screen">
      <Outlet />
    </main>
  );
}

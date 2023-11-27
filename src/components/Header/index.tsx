import React, { useState } from "react";
import { GoBell } from "react-icons/go";
import SideBar from "../Sidebar";

export default function Header() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="flex flex-col flex-1 overflow-hidden w-full">
        <header className="bg-white p-5 w-ull shadow-md">
          <div className="flex items-center justify-end">
            <div className="flex mr-auto">
              <button
                onClick={() => setShow(!show)}
                className=" lg:hidden font-bold text-2xl"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 5L20 5"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 12L20 12"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 19L20 19"
                    stroke="#141B34"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex order-last">
              <button>
                <GoBell className="text-xl " />
              </button>
            </div>
          </div>
        </header>
      </div>

      {show && <SideBar show={show} />}
    </>
  );
}

import React from "react";
import { GoBell } from "react-icons/go";
import FlagOne from "../../asset/flagpack.svg";

export default function Header() {
  const flag = [
    { id: 0, value: "English", label: "ENG", flag: FlagOne },
    { id: 1, value: "Yoruba", label: "YOR", flag: FlagOne },
    { id: 2, value: "Hausa", label: "HAU", flag: FlagOne },
    { id: 0, value: "Igbo", label: "IGB", flag: FlagOne },
  ];
  return (
    <header className="bg-white px-3 py-5 fixed left-0 top-0 w-full">
      <div className="flex justify-end items-center">
        <GoBell className="text-xl " />
        <div className="ml-3">
          <select className="bg-[#F5F5F5] rounded-xl px-3 py-1 outline-none border-none">
            {flag.map((item: any) => (
              <option key={item.id} value={item.value}>
                {/* {item.flag} */}
                {item.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}

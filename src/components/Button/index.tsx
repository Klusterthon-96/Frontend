/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { FaArrowRight } from "react-icons/fa6";

export default function Button({ onClick, title, backgroundColor }: any) {
    return (
        <button style={{ backgroundColor }} className="px-3 py-2 flex items-center text-white bg-black rounded-[32px]" onClick={onClick}>
            {title} <FaArrowRight className="ml-3" />
        </button>
    );
}

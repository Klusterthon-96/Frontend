import React from "react";
import { Link } from "react-router-dom";

export default function ReferPage() {
    return (
        <div className="grid place-items-center text-center h-[calc(100vh-10%)]">
            <div>
                <h1 className="text-[5vw]">Oops!!!</h1>
                <p className="text-grey-300 text-2xl my-5">Nothing here yet, still under construction</p>

                <div className="flex justify-center">
                    <Link to={"/dashboard"} className="bg-[#006400] min-h-[48px] capitalize px-6 py-2 rounded-[32px] text-white">
                        Go back
                    </Link>
                </div>
            </div>
        </div>
    );
}

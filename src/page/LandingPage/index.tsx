import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div>
      <header className="absolute top-0 w-full p-2">
        <div className="flex ml-auto items-center justify-between w-3/5">
          <h2 className="">Agro Assistance</h2>
          <div className="">
            <Button title={"Get Started"} />
          </div>
        </div>
      </header>

      <div className="absolute top-[70px] left-0 right-0">
        {" "}
        <div className="grid place-items-center w-[90%] h-full mx-auto absolute top-[70px] left-0 right-0">
          <div className="flex flex-row px-5 gap-5 justify-between items-center w-full">
            <div className="font-sans w-[634px]">
              <h1 className="font-normal text-3xl">
                Precision Agriculture: Enhance Crop Yields through Intelligent
                Planting and Harvest Predictions.
              </h1>

              <p className="mt-3">
                Empower your fields with advanced technology for precise
                planting and harvesting, maximizing efficiency and yield
                outcomes in every season.
              </p>
              <div className="mt-5 items-center">
                <Link
                  className="px-6 py-2 flex items-center text-white w-[150px] justify-center bg-[#006400] rounded-[32px]"
                  to={"/auth/login"}
                >
                  Get Started
                </Link>
                {/* <Button title={"Get Started"} /> */}
              </div>
            </div>
            <div className="border rounded-[32px] w-1/2 bg-[#D2D2D2] p-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

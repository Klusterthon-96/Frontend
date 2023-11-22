import React from "react";
import Button from "../../components/Button";

export default function LandingPage() {
  return (
    <div>
      <div className="">
        <h2 className="">Agro Assistance</h2>
      </div>
      <div className="flex flex-col justify-between items-center">
        <div className="font-sans w-1/2">
          <h1 className="font-normal text-3xl">
            Precision Agriculture: Enhance Crop Yields through Intelligent
            Planting and Harvest Predictions.
          </h1>
          <p className="">
            Empower your fields with advanced technology for precise planting
            and harvesting, maximizing efficiency and yield outcomes in every
            season.
          </p>
          <div className="mt-3">
            <Button title={"Get Started"} />
          </div>
        </div>
        <div className="w-1/2"></div>
      </div>
    </div>
  );
}

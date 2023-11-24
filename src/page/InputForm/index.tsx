import { Select } from "../../components/input";
import { cropType } from "./shared";

export default function InputForm() {
  return (
    <div className="lg:h-full p-4 lg:p-5 font-sans">
      <div className="rounded-xl bg-white p-3 h-[102px] flex flex-col lg:flex-row lg:justify-between lg:items-center">
        <div className=" text-start">
          <h1 className="text-2xl font-normal">Information</h1>
          <p className="text-sm text-[#9E9E9E] mt-5">
            Enter details of the crop below.
          </p>
        </div>
        <div className="hidden lg:flex justify-center items-center my-8">
          <button className="bg-[#006400] min-h-[48px] capitalize px-6 py-2 rounded-[32px] text-white">
            enter details
          </button>
        </div>
      </div>

      <div className=" max-w-lg">
        <div className="mt-5">
          <Select label={"Crop"} arr={cropType} option={"Select crop"} />
        </div>
        <div className="mt-5">
          <Select
            label={"Temperature Level"}
            arr={cropType}
            option={"Select Temperature"}
          />
        </div>
        <div className="mt-5">
          <Select
            label={"Humidity"}
            arr={cropType}
            option={"Select Humidity"}
          />
        </div>
        <div className="mt-5">
          <Select
            label={"PH Level"}
            arr={cropType}
            option={"Select PH level"}
          />
        </div>
        <div className="mt-5">
          <Select
            label={"Water Availability"}
            arr={cropType}
            option={"Water Availability?"}
          />
        </div>
        <div className="mt-5">
          <Select label={"Country"} arr={cropType} option={"Select country"} />
        </div>
        <div className="mt-5 mb-[30px]">
          <Select label={"Season"} arr={cropType} option={"Select Season"} />
        </div>

        <div className="flex lg:hidden justify-center items-center my-8">
          <button className="bg-[#006400] min-h-[48px] capitalize px-6 py-2 rounded-[32px] w-full text-white">
            enter crop details
          </button>
        </div>
      </div>
    </div>
  );
}

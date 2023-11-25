import Select from "react-select";
// import { Select } from "../../components/input";
import { cropType } from "./shared";

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "transparent",
    color: "black",
    outline: "none",
    borderRadius: "32px !important",
    innerHeight: "56px",
  }),
  // option: (provided: any, state: any) => ({
  //   ...provided,
  //   fontWeight: state.isSelected ? "bold" : "normal",
  //   color: "black",
  //   backgroundColor: state.data.color,
  // }),
  // singleValue: (provided: any, state: any) => ({
  //   ...provided,
  //   color: state.data.color,
  // }),
  placeholder: (provided: any) => ({
    ...provided,
    color: "gray",
  }),
  input: (provided: any) => ({
    ...provided,
    borderRadius: "32px",
    outerHeight: 56,
  }),
};

export default function InputForm() {
  return (
    <>
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
      <div className=" max-w-lg mb-40">
        <div className="mt-5">
          <label htmlFor="Crop">
            Crop
            <Select
              options={cropType}
              styles={selectStyles}
              placeholder={"Select crop"}
            />
          </label>
        </div>
        <div className="mt-5">
          <label htmlFor="">Temperature Level</label>
          <Select
            placeholder={"Select Temperature"}
            // label={""}
            options={cropType}
            // styles={selectStyles}
          />
        </div>
        <div className="mt-5">
          <label htmlFor=""></label>
          <Select
            // label={"Humidity"}
            options={cropType}
            // styles={selectStyles}
            //  option={"Select Humidity"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor=""></label>
          <Select
            // label={"PH Level"}
            options={cropType}
            // styles={selectStyles}
            //  option={"Select PH level"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor=""></label>
          <Select
            // label={"Water Availability"}
            options={cropType}
            // styles={selectStyles}
            //  option={"Water Availability?"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor=""></label>
          <Select
            // label={"Country"}
            options={cropType}
            // styles={selectStyles}
            //  option={"Select country"}
          />
        </div>
        <div className="mt-5 mb-[30px]">
          <Select
            // label={"Season"}
            options={cropType}
            // styles={selectStyles}
            //  option={"Select Season"}
          />
        </div>

        <div className="flex lg:hidden justify-center items-center my-8">
          <button className="bg-[#006400] min-h-[48px] capitalize px-6 py-2 rounded-[32px] w-full text-white">
            enter crop details
          </button>
        </div>
      </div>
    </>
    // </div>
  );
}

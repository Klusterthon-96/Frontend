import Select from "react-select";
// import { Select } from "../../components/input";
import { cropType } from "./shared";

const selectStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "white",
    color: "black",
    outline: "none",
    borderRadius: "32px !important",
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
      <div className=" max-w-lg">
        <div className="mt-5">
          <label htmlFor="Crop">
            Crop
            <Select
              className="react-select-container"
              classNamePrefix="react-select"
              options={cropType}
              styles={selectStyles}
              placeholder={"Select crop"}
            />
          </label>
        </div>
        <div className="mt-5">
          <label htmlFor="">Temperature Level</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            placeholder={"Select Temperature"}
            options={cropType}
            styles={selectStyles}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Humidity</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cropType}
            styles={selectStyles}
            placeholder={"Select Humidity"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">PH Level</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cropType}
            styles={selectStyles}
            placeholder={"Select PH level"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Water Availability</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cropType}
            styles={selectStyles}
            placeholder={"Water Availability?"}
          />
        </div>
        <div className="mt-5">
          <label htmlFor="">Country</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cropType}
            styles={selectStyles}
            placeholder={"Select Country"}
          />
        </div>
        <div className="mt-5 mb-[30px]">
          <label htmlFor="">Season</label>
          <Select
            className="react-select-container"
            classNamePrefix="react-select"
            options={cropType}
            styles={selectStyles}
            placeholder={"Select Season"}
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

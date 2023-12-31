/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Select from "react-select";
import { countries, cropType, humidityType, pHType, temperatureType, waterType } from "./shared";
import { FaSpinner } from "react-icons/fa6";
import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";
import { useSocket } from "../../socket";

const selectStyles = {
    control: (styles: any) => ({
        ...styles,
        backgroundColor: "white",
        color: "black",
        outline: "none",
        borderRadius: "32px !important"
    }),
    placeholder: (provided: any) => ({
        ...provided,
        color: "gray"
    }),
    input: (provided: any) => ({
        ...provided,
        borderRadius: "32px",
        outerHeight: 56
    })
};

export default function InputForm() {
    const socket = useSocket();
    const { user } = useAuth();

    const [isLoadingButton, setIsLoadingButton] = useState(false);

    const [formData, setFormData] = useState({
        label: "",
        temperature: "",
        humidity: "",
        ph: "",
        water_availability: "",
        country: ""
    });

    const handleChange = (selectedOption: any, { name }: { name: string }) => {
        setFormData({
            ...formData,
            [name]: selectedOption.value
        });
    };

    const token = user?.data.accessToken;

    useEffect(() => {
        const initSession = async () => {
            await axios
                .post(
                    `${process.env.REACT_APP_BACKEND_URL}/session/`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )

                .catch((error) => console.error("error", error));
        };

        initSession();
    }, [token]);

    useEffect(() => {
        if (!socket.connected) {
            socket.on("connect", () => {
                console.log("Socket connected");
            });
        }
    }, [token]);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsLoadingButton(true);

        try {
            await axios
                .post(
                    `${process.env.REACT_APP_BACKEND_URL}/session`,
                    {},
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                )
                .then(async () => {
                    const response = await axios.put(`${process.env.REACT_APP_BACKEND_URL}/session/`, formData, {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    });

                    setIsLoadingButton(false);

                    await socket.emit("session", response.data.data);
                    Swal.fire({
                        icon: "success",
                        title: `Your harvest season is: ${response.data.data.result}`,
                        padding: "3em",
                        color: "#006400",
                        backdrop: `rgba(0,100,0,0.5)`
                    });

                    resetForm();
                });
        } catch (error: any) {
            console.error(error);

            Swal.fire({
                icon: "error",
                title: `Your harvest season is: ${error.response.data.message}`,
                padding: "3em",
                color: "#006400",
                backdrop: `rgba(0,100,0,0.5)`
            });

            setIsLoadingButton(false);
        }
    };

    const resetForm = () => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            label: "",
            temperature: "",
            humidity: "",
            ph: "",
            water_availability: "",
            country: ""
        }));
    };

    // Check if any required field is not selected
    const isDisabled = Object.values(formData).some((value) => !value);
    return (
        <>
            <div className="rounded-xl bg-white p-3 h-[102px] flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <div className=" text-start">
                    <h1 className="text-2xl font-normal">Information</h1>
                    <p className="text-sm text-[#9E9E9E] mt-5">Enter details of the crop below.</p>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    {isLoadingButton ? (
                        <button className="bg-[darkgrey] flex h-14 items-center justify-center min-h-[48px] capitalize px-6 py-2 rounded-[32px] text-white cursor-not-allowed ">
                            <FaSpinner className="text-xl animate-spin mr-2" /> generate result
                        </button>
                    ) : (
                        <button onClick={handleSubmit} disabled={isDisabled} className="bg-[#006600] min-h-[48px] disabled:bg-[darkgrey] capitalize px-6 py-2 rounded-[32px] text-white">
                            generate result
                        </button>
                    )}
                </div>
            </div>

            <div className="mb-[100px] max-w-lg">
                <form onSubmit={handleSubmit}>
                    <div className="mt-5">
                        <label htmlFor="Crop">
                            Crop
                            <Select
                                required={true}
                                className="react-select-container"
                                classNamePrefix="react-select"
                                name="label"
                                onChange={(selectedOption) => handleChange(selectedOption, { name: "label" })}
                                options={cropType}
                                styles={selectStyles}
                                placeholder={"Select crop"}
                            />
                        </label>
                    </div>
                    <div className="mt-5">
                        <label htmlFor="Temperature Level">Temperature Level</label>
                        <Select
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required={true}
                            name="temperature"
                            onChange={(selectedOption) => handleChange(selectedOption, { name: "temperature" })}
                            placeholder={"Select Temperature"}
                            options={temperatureType}
                            styles={selectStyles}
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="Humidity">Humidity</label>
                        <Select
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required={true}
                            name="humidity"
                            onChange={(selectedOption) => handleChange(selectedOption, { name: "humidity" })}
                            options={humidityType}
                            styles={selectStyles}
                            placeholder={"Select Humidity"}
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="PH Level">PH Level</label>
                        <Select
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required={true}
                            name="ph"
                            onChange={(selectedOption) => handleChange(selectedOption, { name: "ph" })}
                            options={pHType}
                            styles={selectStyles}
                            placeholder={"Select PH level"}
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="Water Availability">Water Availability</label>
                        <Select
                            className="react-select-container"
                            classNamePrefix="react-select"
                            required={true}
                            name="water_availability"
                            onChange={(selectedOption) => handleChange(selectedOption, { name: "water_availability" })}
                            options={waterType}
                            styles={selectStyles}
                            placeholder={"Water Availability?"}
                        />
                    </div>
                    <div className="mt-5">
                        <label htmlFor="Country">Country</label>
                        <Select
                            className="react-select-container"
                            classNamePrefix="react-select"
                            menuPlacement="top"
                            required={true}
                            name="country"
                            onChange={(selectedOption) => handleChange(selectedOption, { name: "country" })}
                            options={countries}
                            styles={selectStyles}
                            placeholder={"Select Country"}
                        />
                    </div>

                    <div className="flex lg:hidden justify-center mb-[130px] items-center mt-8">
                        {isLoadingButton ? (
                            <button className="bg-[darkgrey] min-h-[48px] capitalize px-6 py-2 rounded-[32px] text-white cursor-not-allowed ">
                                <FaSpinner className="text-xl animate-spin mr-2" /> enter details
                            </button>
                        ) : (
                            <button type="submit" disabled={isDisabled} className="bg-[#006400] w-full disabled:bg-[darkgrey] min-h-[48px] capitalize px-6 py-2 rounded-[32px] text-white">
                                generate result
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </>
        // </div>
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { useAuth } from "../../Context/authContext";
import { FaArrowRight } from "react-icons/fa";
import Swal from "sweetalert2";
import axios from "axios";
import pendingIcon from "../../asset/pendingConfirmation.svg";

function PendingEmailVerification() {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const { user } = useAuth();
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setButtonDisabled(true);
        }, 60000);

        return () => clearTimeout(timeoutId);
    }, []);
    const token = user?.data?.accessToken;
    const resendEmailVerification = async () => {
        try {
            const res = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/auth/email`, {
                withCredentials: true,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (res.status === 200) {
                await Swal.fire({
                    icon: "success",
                    text: `${res.data.message}`
                });
                setButtonDisabled(true);
                setTimeout(() => {
                    setButtonDisabled(false);
                }, 60000);
            }
        } catch (error: any) {
            await Swal.fire({
                icon: "error",
                text: `${error.response.data.message}`
            });
            if (isButtonDisabled) return;

            setButtonDisabled(true);
        }
    };

    return (
        <>
            <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
                <div className=" text-center">
                    <h2 className="text-[28px] text-center font-[600]">Email Confirmation</h2>
                    <div className=" w-full flex justify-center items-center">
                        <img className="" src={pendingIcon} alt="icon" />
                    </div>
                    <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">
                        We&apos;ve sent a confirmation email to your inbox. If you haven&apos;t received it, please click the button below.
                    </p>
                    <div className="flex justify-center items-center">
                        <button
                            title={"Resend Confirmation Email"}
                            className={
                                isButtonDisabled
                                    ? "px-3 py-2 flex items-center text-white bg-[#006400] bg-opacity-50 cursor-not-allowed rounded-[32px]"
                                    : "px-3 py-2 flex items-center text-white bg-[#006400] rounded-[32px]"
                            }
                            onClick={resendEmailVerification}
                            disabled={isButtonDisabled}
                        >
                            Resend Confirmation Email
                            <FaArrowRight className="ml-3" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PendingEmailVerification;

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import Button from "../../components/Button"; // Import your Button component
import axios from "axios";
import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";

function PendingEmailVerification() {
    const [backgroundColor] = useState("#006400");
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const { user } = useAuth();
    const token = user?.data.accessToken;

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
            setButtonDisabled(true);
            console.error("Error sending email verification:", error);
        }
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setButtonDisabled(false);
        }, 60000);

        return () => clearTimeout(timeoutId);
    }, [isButtonDisabled]);

    return (
        <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
            <div className="text-center">
                <h2 className="text-[28px] text-center font-[600]">Email Confirmation</h2>
                <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">
                    We&aposve sent a confirmation email to your inbox. If you haven&apost received it, please click the button below.
                </p>
                <div className="flex justify-center items-center">
                    <Button backgroundColor={backgroundColor} title={"Resend Confirmation Email"} onClick={resendEmailVerification} disabled={isButtonDisabled} />
                </div>
            </div>
        </div>
    );
}

export default PendingEmailVerification;

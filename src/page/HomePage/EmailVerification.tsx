/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import emailConfirm from "../../asset/Confirmed-cuate 1.svg";
import { useAuth } from "../../Context/authContext";
import React, { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios
import Swal from "sweetalert2";
function EmailVerification() {
    const { user, setUser } = useAuth();
    const { id, token: urlToken } = useParams();
    const [apiError, setApiError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const simulateApiCall = async () => {
            try {
                await axios.put(
                    `${process.env.REACT_APP_BACKEND_URL}/auth/email`,
                    {
                        verifyToken: urlToken,
                        userId: id
                    },
                    {
                        withCredentials: true,
                        headers: {
                            Authorization: `Bearer ${user.data.accessToken}`
                        }
                    }
                );

                setIsLoading(false);
                navigate("/auth/login");
            } catch (error: any) {
                if (error.response.data.message === "Invalid or expired email verification token") {
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "error",
                        confirmButtonText: "Back"
                    }).then(() => {
                        setIsLoading(false);
                        setApiError(error.response.data.message);
                        navigate("/auth/login");
                    });
                } else {
                    Swal.fire({
                        title: error.response.data.message,
                        icon: "error",
                        confirmButtonText: "Back"
                    }).then(() => {
                        setIsLoading(false);
                        setApiError(error.response.data.message);
                        navigate("/auth/login");
                    });
                }
            }
        };

        simulateApiCall();
    }, [urlToken, user.data.accessToken, setUser, navigate]);

    return (
        <>
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-white overflow-hidden h-screen w-full outline-none font-sans">
                <div className="pointer-events-none relative flex m-2 min-h-screen w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out md:my-7 md:mx-auto md:h-auto">
                    <div className="pointer-events-auto relative bg-clip-padding lg:w-[400px] p-4 mx-auto bg-white rounded-lg text-center">
                        <div className="flex items-center justify-end mb-8">
                            <button
                                type="button"
                                className="box-content rounded-none p-1 border-none opacity-50 text-xl "
                                aria-label="Close"
                                // onClick={() => setOpen(false)}
                            >
                                <AiOutlineClose size={26} color="#000" />
                            </button>
                        </div>
                        {isLoading ? (
                            <p>Loading...</p>
                        ) : apiError ? (
                            <div>
                                <h2 className="text-[28px] font-semibold">Error</h2>
                                <p>{apiError}</p>

                                <Link to="/auth/pending-email-verification" className="mt-10 bg-green-500 hover:bg-green-700 text-white font-bold my-10 py-2 px-4 rounded">
                                    Back
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <h2 className="text-[28px] font-semibold">Email has been Verified</h2>
                                <div className="flex justify-center">
                                    <img className="" src={emailConfirm} alt="icon" />
                                </div>
                                <Link to="/dashboard" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Go to Dashboard
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EmailVerification;

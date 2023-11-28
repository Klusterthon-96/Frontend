// PendingEmailVerification.js
import  { useState, useEffect } from "react";
import Button from "../../components/Button";
import axios from "axios";

import { useAuth } from "../../Context/authContext";
import Swal from "sweetalert2";

function PendingEmailVerification() {
  const { user } = useAuth();

  const token = user?.data.accessToken;
  const resendEmailVerification = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/auth/email`,
        {
          withCredentials: true,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Assuming a successful response from the server
      if (res.status === 200) {
        await Swal.fire({
          icon: "success",
          text: `${res.data.message}`,
        });
        setButtonDisabled(true);

        // Enable the button after 60 seconds
        setTimeout(() => {
          setButtonDisabled(false);
        }, 60000);
      }
    } catch (error: any) {
      await Swal.fire({
        icon: "error",
        text: `${error.response.data.message}`,
      });
      console.error("Error sending email verification:", error);
    }
  };

  // State to manage button disabled state
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  // Effect to reset button state after a certain duration
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setButtonDisabled(false);
    }, 60000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [isButtonDisabled]);

  return (
    <>
      {/* Reset Password Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div className=" text-center">
          <h2 className="text-[28px] text-center font-[600]">Verify Email</h2>
          <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">
            The password must be different from before.
          </p>

          {/* Use the Button component with the onClick and disabled props */}
          <Button
            title={"Resend Email Verification"}
            onClick={resendEmailVerification}
            disabled={isButtonDisabled}
          />
        </div>
      </div>
    </>
  );
}

export default PendingEmailVerification;

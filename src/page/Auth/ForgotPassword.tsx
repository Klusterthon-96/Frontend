import React, { useState } from "react";
import { Link } from "react-router-dom";
import forgotPasswordIcon from "../../asset/Sent Message-bro 1.png";
import { TextInput } from "../../components/input";
import emailConfirm from "../../asset/Confirmed-cuate 1.svg";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";
import Swal from "sweetalert2";

function ForgotPassword() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const url = `https://backend-8fbc.onrender.com/api/v1/auth/request-password-reset?email=${email}`;

  const handleContinue = async () => {
    try {
      await axios
        .get(url)
        .then((res) => {
          console.log(res);
          setOpen(true);
        })
        .catch((e) => {
          console.log(e.response.status);
          Swal.fire({
            icon: "error",
            text: `${e.response.data.message}`,
          });
        });
    } catch (error) {
      // Handle other errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      {/* header */}
      <header className="items-center py-4 px-6 shadow-md ">
        <nav className="flex items-center select-none lg:w-3/5 justify-between ml-auto">
          <div className=" font-Lacq text-2xl">
            <h1 className="capitalize">Agro Assistance</h1>
          </div>

          <ul className="ml-2 flex items-center text-black">
            <li>
              <Link to="/auth/login" className="hover:text-white py-2 px-6 border border-[#006400] text-black hover:bg-[#006400] rounded-[32px] ">
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Forgot password Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div>
          <h2 className="text-[28px] text-center  font-[600] ">Forget Password</h2>
          <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">Enter email to reset password</p>
          <div className="flex justify-center">
            <img className="w-[50%]" src={forgotPasswordIcon} alt="icon" />
          </div>
          <div className="">
            <label htmlFor="Email">
              Enter your email
              <TextInput placeholder={"you@email.com"} value={email} onChange={(e: any) => setEmail(e.target.value)} />
            </label>

            <button onClick={handleContinue} className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5 text-white">
              Continue
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/90 overflow-hidden h-screen w-full outline-none font-sans">
          <div className="pointer-events-none relative flex m-2 min-h-screen w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out md:my-7 md:mx-auto md:h-auto">
            <div className="pointer-events-auto relative bg-clip-padding lg:w-[400px] p-4 mx-auto bg-white rounded-lg text-center">
              <div className="flex items-center justify-end mb-8">
                <button type="button" className="box-content rounded-none p-1 border-none opacity-50 text-xl " aria-label="Close" onClick={() => setOpen(false)}>
                  <AiOutlineClose size={26} color="#000" />
                </button>
              </div>
              <div className="">
                <h2 className="text-[28px] font-semibold">Email has been sent</h2>
                <p className="text-xl my-5">Your Password Reset Request is in Motion Check your email for confirm</p>
                <div className="flex justify-center">
                  <img className="" src={emailConfirm} alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;

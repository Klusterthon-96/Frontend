// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
import ImageOne from "../../asset/Frame 1618868309.png";

export default function Register() {
  // const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <div className="lg:h-screen overflow-hidden">
      <div className="font-sans flex flex-col-reverse md:flex-row justify-between items-center">
        <div className="lg:w-1/2 mx-auto flex justify-center items-center">
          <div className="p-4 lg:p-10 my-5 sm:mb-0">
            <div className="">
              <h2 className="font-normal text-3xl ">Create Account</h2>
              <p className=" text-xl">
                Its’s easy just take a minute and provide the details
              </p>
            </div>

            <div className="">
              <form action="">
                <div className="mt-5">
                  <TextInput label={"Email Address"} />
                </div>
                <div className="mt-5">
                  <PasswordInput label={"Password"} />
                </div>
                <div className="justify-center flex text-white items-center mt-5">
                  {/* {isLoadingButton ? ( */}
                  {/* <button
                    type="button"
                    disabled
                    className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full mt-5"
                  >
                    <FaSpinner className="text-xl animate-spin mr-2" /> Register
                  </button> */}
                  {/* ) : ( */}
                  <button
                    type="button"
                    // onClick={handleLogin}
                    className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                  >
                    Register
                  </button>
                  {/* )} */}
                </div>

                <span className="flex items-center uppercase justify-center my-3">
                  or
                </span>
              </form>{" "}
              <Link to="/auth/login" className="mt-3 text-sm text-right">
                {`Already have an account?`}{" "}
                <span className="font-bold">Sign In</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="border rounded-[32px] bg-[#D2D2D2]">
          <img src={ImageOne} alt="" className="lg:h-screen lg:max-w-full" />
        </div>
      </div>
    </div>
  );
}

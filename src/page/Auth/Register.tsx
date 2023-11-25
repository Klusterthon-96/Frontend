// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
import ImageOne from "../../asset/Frame 1618868309.png";

export default function Register() {
  // const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:place-items-center lg:h-screen">
      <div className="order-last lg:order-1 mx-auo flex justify-center items-center">
        <div className="p-5 my-5">
          <div className="">
            <h2 className="font-normal text-3xl ">Create Account</h2>
            <p className=" text-xl">
              Its’s easy just take a minute and provide the details
            </p>
          </div>

          <div className="">
            <form action="">
              <div className="mt-5">
                <TextInput label={"Full Name"} placeholder={"John Doe"} />
              </div>

              <div className="mt-5">
                <TextInput
                  label={"Email Address"}
                  placeholder={"you@email.com"}
                />
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
                  className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5"
                >
                  Register
                </button>
                {/* )} */}
              </div>
            </form>
            <Link to="/auth/login" className="mt-3 text-sm text-right">
              {`Already have an account?`}{" "}
              <span className="font-bold">Sign In</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="order-1 bg-[#D2D2D2]">
        <img src={ImageOne} alt="" className="w-full h-auto" />
      </div>
    </div>
  );
}
// font-sans flex flex-col-reverse lg:grid place-items-center lg:grid-cols-2 justify-between items-center lg:h-screen

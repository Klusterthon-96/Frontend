// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
import ImageOne from "../../asset/Frame 1618868308.png";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  // const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:place-items-center lg:h-screen">
      <div className="order-last lg:order-1 mx-auto flex justify-center items-center">
        <div className="p-2 sm:p-4 my-5">
          <div className="">
            <h2 className="font-normal text-3xl ">Welcome back</h2>
            <p className=" text-xl">
              Its’s easy just take a minute and provide the details
            </p>
          </div>

          <div className="">
            <form action="">
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
                      <FaSpinner className="text-xl animate-spin mr-2" /> Sign
                      In
                    </button> */}
                {/* ) : ( */}
                <button
                  type="button"
                  // onClick={handleLogin}
                  className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                >
                  Sign In
                </button>
                {/* )} */}
              </div>

              <span className="flex items-center uppercase justify-center my-3">
                or
              </span>

              <button
                type="button"
                // onClick={handleLogin}
                className="border border-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full flex justify-center mb-5 items-center"
              >
                <FcGoogle className="mr-3 text-xl" /> Continue with Google
              </button>
            </form>
            <div className="flex justify-between text-sm">
              {" "}
              <Link to="/auth/register" className="mt-3 text-right">
                {`Don't have an account?`}{" "}
                <span className="font-bold">Sign up</span>
              </Link>
              <Link to="/auth/register" className="mt-3 text-right">
                <span className="font-bold">Forget Password?</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="order-1 bg[#D2D2D2]">
        <img src={ImageOne} alt="" className="h-auto w-full" />
      </div>
    </div>
  );
}

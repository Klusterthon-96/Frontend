// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
// import ImageOne from "../../asset/Frame 1618868309.png";

export default function Register() {
  // const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <>
      <div className="grid place-items-center h-[inherit] gap-5 lg:grid-cols-2">
        <div className="p-4">
          <div className="text-center lg:text-start">
            <h2 className="font-normal text-3xl xl:text-[44px]">
              Create Account
            </h2>
            <p className="mt-2 text-sm lg:text-base xl:text-xl">
              Its’s easy just take a minute and provide the details
            </p>
          </div>

          {/* FORM */}
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
              <button
                type="button"
                // onClick={handleLogin}
                className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5"
              >
                Register
              </button>
            </div>
          </form>

          <Link to="/auth/login" className="mt-3 text-sm text-right">
            {`Already have an account?`}{" "}
            <span className="font-bold">Sign In</span>
          </Link>
        </div>

        {/* IMAGE */}
        <div
          className="hidden lg:flex bg-cover bg-center lg:bg-RegWallpaper w-full h-screen"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
}
// font-sans flex flex-col-reverse lg:grid place-items-center lg:grid-cols-2 justify-between items-center lg:h-screen

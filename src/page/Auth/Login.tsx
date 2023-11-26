// import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
// import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  // const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <>
      <div className="grid place-items-center h-[inherit] gap-5 lg:grid-cols-2">
        {/* MOBILE VIEW */}
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none z-[-1] bg-cover bg-center bg-wallpaper w-full h-screen lg:hidden"></div>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden lg:hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="flex justify-center items-center h-screen">
            <div className="p-4 md:w-3/5 mx-auto">
              <div className="text-center lg:text-start text-white lg:text-black">
                <h2 className="font-semibold text-3xl xl:text-[44px] ">
                  Welcome back
                </h2>
                <p className="mt-2 text-sm lg:text-base xl:text-xl">
                  Its’s easy just take a minute and provide the details
                </p>
              </div>

              {/* FORM */}
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
                  <button
                    type="button"
                    // onClick={handleLogin}
                    className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                  >
                    Sign In
                  </button>
                </div>

                {/* <span className="flex items-center uppercase justify-center my-3">
                  or
                </span> */}

                {/* <button
                  type="button"
                  // onClick={handleLogin}
                  className="border border-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full flex justify-center mb-5 items-center"
                >
                  <FcGoogle className="mr-3 text-xl" /> Continue with Google
                </button> */}
              </form>

              <div className="flex flex-col items-center justify-center text-sm text-white lg:text-black">
                <Link to="/auth/register" className="mt-3 text-right">
                  {`Don't have an account?`}{" "}
                  <span className="font-bold">Sign up</span>
                </Link>
                <Link to="/auth/forgot-password" className="mt-3 text-right">
                  <span className="font-bold">Forget Password?</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="p-4 hidden lg:block">
          <div className="text-center lg:text-start text-white lg:text-black">
            <h2 className="font-semibold text-3xl xl:text-[44px] ">
              Welcome back
            </h2>
            <p className="mt-2 text-sm lg:text-base xl:text-xl">
              Its’s easy just take a minute and provide the details
            </p>
          </div>

          {/* FORM */}
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
              <button
                type="button"
                // onClick={handleLogin}
                className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
              >
                Sign In
              </button>
            </div>
          </form>

          <div className="flex flex-col items-center justify-center text-sm text-white lg:text-black">
            <Link to="/auth/register" className="mt-3 text-right">
              {`Don't have an account?`}{" "}
              <span className="font-bold">Sign up</span>
            </Link>
            <Link to="/auth/forgot-password" className="mt-3 text-right">
              <span className="font-bold">Forget Password?</span>
            </Link>
          </div>
        </div>
        <div
          className="hidden lg:flex bg-cover bg-center lg:bg-wallpaper w-full h-screen"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";

export default function LoginPage() {
  const [isLoadingButton, setIsLoadingButton] = useState(false);

  return (
    <div className="grid place-items-center w-[90%] h-screen mx-auto">
      <div className="font-sans flex justify-between p-5 w-full">
        <div className="p-5">
          <div className="">
            <h2 className="font-normal text-3xl ">Welcome back</h2>
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
                {isLoadingButton ? (
                  <button
                    type="button"
                    disabled
                    className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full mt-5"
                  >
                    <FaSpinner className="text-xl animate-spin mr-2" /> Sign In
                  </button>
                ) : (
                  <button
                    type="button"
                    // onClick={handleLogin}
                    className="bg-black min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                  >
                    Sign In
                  </button>
                )}
              </div>

              <span className="flex items-center justify-center my-3">or</span>

              <button
                type="button"
                // onClick={handleLogin}
                className="border min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mb-5"
              >
                Continue with Google
              </button>
            </form>{" "}
            {/* <Link href="/auth/register" className="mt-3 text-right"> */}
            {`Don't have an account?`}{" "}
            <span className="font-bold">Sign up</span>
            {/* </Link> */}
          </div>
        </div>
        <div className="p-5 border rounded-[32px] w-1/2 bg-[#D2D2D2]"></div>
      </div>
    </div>
  );
}

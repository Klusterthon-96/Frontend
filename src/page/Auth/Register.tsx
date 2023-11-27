import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";

export default function Register() {
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setIsLoadingButton(true);

    try {

    } catch (error) {
console.error(error)
    }
  };

  return (
    <>
      <div className="grid place-items-center h-[inherit] gap-5 lg:grid-cols-2">
        {/* MOBILE VIEW */}
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none z-[-1] bg-cover bg-center bg-RegWallpaper w-full h-screen lg:hidden"></div>
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden lg:hidden"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
        >
          <div className="flex justify-center items-center h-screen">
            <div className="p-4 md:w-3/5 mx-auto">
              <div className="text-center lg:text-start text-white lg:text-black">
                <h2 className="font-semibold text-3xl xl:text-[44px] ">
                  Create Account
                </h2>
                <p className="mt-2 text-sm lg:text-base xl:text-xl">
                  Its’s easy just take a minute and provide the details
                </p>
              </div>

              {/* FORM */}
              <form action="">
                <div className="mt-5">
                  <TextInput
                    label={"Full Name"}
                    value={name}
                    onChange={(e: any) => setName(e.target.value)}
                    placeholder={"John Doe"}
                  />
                </div>

                <div className="mt-5">
                  <TextInput
                    label={"Email Address"}
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                    placeholder={"you@email.com"}
                  />
                </div>

                <div className="mt-5">
                  <PasswordInput
                    label={"Password"}
                    value={password}
                    onChange={(e: any) => setPassword(e.target.value)}
                  />
                </div>
                <div className="justify-center flex text-white items-center mt-5">
                  {isLoadingButton ? (
                    <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                      <FaSpinner className="text-xl animate-spin mr-2" />{" "}
                      Register
                    </button>
                  ) : (
                    <button
                      type="button"
                      // onClick={handleLogin}
                      className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5"
                    >
                      Register
                    </button>
                  )}
                </div>
              </form>

              <div className="flex flex-col items-center justify-center text-sm text-white lg:text-black">
                <Link to="/auth/login" className="mt-3 text-sm text-right">
                  {`Already have an account?`}{" "}
                  <span className="font-bold">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="p-4 hidden lg:block">
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
              <TextInput
                label={"Full Name"}
                value={name}
                onChange={(e: any) => setName(e.target.value)}
                placeholder={"John Doe"}
              />
            </div>

            <div className="mt-5">
              <TextInput
                label={"Email Address"}
                value={email}
                onChange={(e: any) => setEmail(e.target.value)}
                placeholder={"you@email.com"}
              />
            </div>

            <div className="mt-5">
              <PasswordInput
                label={"Password"}
                value={password}
                onChange={(e: any) => setPassword(e.target.value)}
              />
            </div>
            <div className="justify-center flex text-white items-center mt-5">
              {isLoadingButton ? (
                <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                  <FaSpinner className="text-xl animate-spin mr-2" /> Register
                </button>
              ) : (
                <button
                  type="button"
                  // onClick={handleLogin}
                  className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5"
                >
                  Register
                </button>
              )}
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

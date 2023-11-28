import { useState } from "react";
import { Link } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import PasswordInput, { TextInput } from "../../components/input";
import { useAuth } from "../../Context/authContext";
import { useAuth } from "../Context/authContext"

export default function Register() {
  const { register } = useAuth();
const { user } = useAuth();



  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    return emailRegex.test(email);
  };

  const isStrongPassword = (password: string) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

    return passwordRegex.test(password);
  };

  const handleChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setIsLoadingButton(false);
    setError("");
  };

  const handleRegister = async (event: any) => {
    event.preventDefault();

    setIsLoadingButton(true);

    if (!isValidEmail(formData.email)) {
      setError("Email is Invalid");
      return;
    }

    if (!isStrongPassword(formData.password) || formData.password.length < 8) {
      setError("Password must contain 8 characters, one uppercase letter, one lowercase letter, one number and one special character");
      return;
    }

    try {
      await register(formData.name, formData.email, formData.password);

  //    navigate("/auth/login", { replace: true });
      if(user && !user.data.isVerified){
       navigate("/auth/pending-email-verification"); 
      }
    
    
    } catch (error) {
      console.error(error);
      setIsLoadingButton(false);
    } finally {
      setIsLoadingButton(false);
    }
  };

  return (
    <>
      <div className="grid place-items-center h-[inherit] gap-5 lg:grid-cols-2">
        {/* MOBILE VIEW */}
        <div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none z-[-1] bg-cover bg-center bg-RegWallpaper w-full h-screen lg:hidden"></div>
        <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-[inherit] overflow-hidden lg:hidden" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
          <div className="flex justify-center items-center h-screen">
            <div className="p-4 md:w-3/5 mx-auto">
              <div className="text-center lg:text-start text-white lg:text-black">
                <h2 className="font-semibold text-3xl xl:text-[44px] ">Create Account</h2>
                <p className="mt-2 text-sm lg:text-base xl:text-xl">Its’s easy just take a minute and provide the details</p>
              </div>

              {/* FORM */}
              <form onSubmit={handleRegister}>
                <div className="mt-5">
                  <TextInput name={"name"} label={"Full Name"} value={formData.name} onChange={handleChange} placeholder={"John Doe"} />
                </div>

                <div className="mt-5">
                  <TextInput name={"email"} label={"Email Address"} value={formData.email} onChange={handleChange} placeholder={"you@email.com"} />
                </div>

                <div className="mt-5">
                  <PasswordInput name={"password"} label={"Password"} value={formData.password} onChange={handleChange} />
                </div>
                <div className="justify-center flex text-white items-center mt-5">
                  {isLoadingButton ? (
                    <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                      <FaSpinner className="text-xl animate-spin mr-2" /> Register
                    </button>
                  ) : (
                    <button type="submit" className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5">
                      Register
                    </button>
                  )}
                </div>
                <p className="text-[red] w-3/5 mt-3 text-sm">{error && error}</p>
              </form>

              <div className="flex flex-col items-center justify-center text-sm text-white lg:text-black">
                <Link to="/auth/login" className="mt-3 text-sm text-right">
                  {`Already have an account?`} <span className="font-bold">Sign In</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <div className="p-4 hidden lg:block">
          <div className="text-center lg:text-start">
            <h2 className="font-normal text-3xl xl:text-[44px]">Create Account</h2>
            <p className="mt-2 text-sm lg:text-base xl:text-xl">Its’s easy just take a minute and provide the details</p>
          </div>

          {/* FORM */}
          <form onSubmit={handleRegister}>
            <div className="mt-5">
              <TextInput name={"name"} label={"Full Name"} value={formData.name} onChange={handleChange} placeholder={"John Doe"} />
            </div>

            <div className="mt-5">
              <TextInput name={"email"} label={"Email Address"} value={formData.email} onChange={handleChange} placeholder={"you@email.com"} />
            </div>

            <div className="mt-5">
              <PasswordInput name={"password"} label={"Password"} value={formData.password} onChange={handleChange} />
            </div>
            <div className="justify-center flex text-white items-center mt-5">
              {isLoadingButton ? (
                <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                  <FaSpinner className="text-xl animate-spin mr-2" /> Register
                </button>
              ) : (
                <button type="submit" className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full my-5">
                  Register
                </button>
              )}
            </div>
            <p className="text-[red] mt-3 text-sm w-3/5">{error && error}</p>
          </form>

          <Link to="/auth/login" className="mt-3 text-sm text-right">
            {`Already have an account?`} <span className="font-bold">Sign In</span>
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

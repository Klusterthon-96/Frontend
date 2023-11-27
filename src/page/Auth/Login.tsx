import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";
import Swal from "sweetalert2";
import PasswordInput, { TextInput } from "../../components/input";
import { useAuth } from "../../Context/authContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [isLoadingButton, setIsLoadingButton] = useState(false);

  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email: string) => {
    const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;

    return emailRegex.test(email);
  };

  const isStrongPassword = (password: string) => {
    const passwordRegex =
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

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

  const handleLogin = async (e: any) => {
    e.preventDefault();
    setIsLoadingButton(true);

    if (!isValidEmail(formData.email)) {
      setError("Email is Invalid");
      return;
    }

    if (!isStrongPassword(formData.password) || formData.password.length < 8) {
      setError(
        "Password must contain 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
      );
      return;
    }
    try {
      await login(formData.email, formData.password);

      Swal.fire({
        icon: "success",
        text: `Sign in successfully!`,
      });

      return navigate("/dashboard");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoadingButton(false);
    }
  };

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
                    name={"email"}
                    label={"Email Address"}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={"you@email.com"}
                  />
                </div>
                <div className="mt-5">
                  <PasswordInput
                    name={"password"}
                    label={"Password"}
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="justify-center flex text-white items-center mt-5">
                  {isLoadingButton ? (
                    <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                      <FaSpinner className="text-xl animate-spin mr-2" /> Sign
                      In
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleLogin}
                      className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                    >
                      Sign In
                    </button>
                  )}
                </div>
                <p className="text-[red] w-3/5 mt-3 text-sm">
                  {error && error}
                </p>
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
                name={"email"}
                label={"Email Address"}
                value={formData.email}
                onChange={handleChange}
                placeholder={"you@email.com"}
              />
            </div>
            <div className="mt-5">
              <PasswordInput
                name={"password"}
                label={"Password"}
                value={formData.password}
                onChange={handleChange}
              />
            </div>

            <div className="justify-center flex text-white items-center mt-5">
              {isLoadingButton ? (
                <button className="flex min-h-[auto] h-14 items-center justify-center  font-bold cursor-not-allowed hover:opacity-75 bg-[darkgrey] px-6 py-2 rounded-[32px] w-full my-5">
                  <FaSpinner className="text-xl animate-spin mr-2" /> Sign In
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleLogin}
                  className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5"
                >
                  Sign In
                </button>
              )}
            </div>
            <p className="text-[red] w-3/5 mt-3 text-sm">{error && error}</p>
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

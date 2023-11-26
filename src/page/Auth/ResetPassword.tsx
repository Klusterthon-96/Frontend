import { Link } from "react-router-dom";
import PasswordInput from "../../components/input";

function ResetPassword() {
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
              <Link
                to="/auth/login"
                className="hover:text-white py-2 px-6 border border-[#006400] text-black hover:bg-[#006400] rounded-[32px] "
              >
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Reset Password Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div className="">
          <h2 className="text-[28px] text-center font-[600]">Reset Password</h2>
          <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">
            The password must be different from before.
          </p>
          <form>
            <div className="mt-5">
              <label htmlFor="new-password">
                New Password
                <PasswordInput />
              </label>
            </div>

            <div className="mt-5">
              <label htmlFor="confirm password">
                Confirm Password
                <PasswordInput />
              </label>
            </div>
          </form>

          <button className="bg-[#006400] min-h-[auto] h-14 px-6 py-2 rounded-[32px] font-bold w-full mt-5 text-white">
            Continue
          </button>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;

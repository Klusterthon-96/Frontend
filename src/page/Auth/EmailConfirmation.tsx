import emailConfirm from "../../asset/Confirmed-cuate 1.png";
import { Link } from "react-router-dom";

function EmailConfirmation() {
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

      {/* Email Confirmation Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div className="">
          <h2 className="text-[28px] text-center  text-[#000] font-sans font-[600] ">
            Email has been sent
          </h2>
          <p className="text-[20px] w-[416px] text-center mt-[24px] mb-[32px] text-[#000] font-sans font-[400] ">
            Your Password Reset Request is in Motion Check your email for
            confirm
          </p>
          <div className="flex justify-center">
            <img className="w-[50%]" src={emailConfirm} alt="icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailConfirmation;

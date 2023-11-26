import { Link } from "react-router-dom";
import forgotPasswordIcon from "../../asset/Sent Message-bro 1.png";
import { TextInput } from "../../components/input";

function ForgotPassword() {
  return (
    <>
      <div className="w-full min-h-fit  bg-white  ">
        {/* header */}
        <div className=" w-full pr-[72px]  pt-[20px] items-center flex  justify-between   ">
          <h3 className="text-[28px] lg:w-[63%] lg:flex lg:justify-end text-[#000] font-sans font-normal ">Agro Assistance</h3>
          <Link to="/auth/login">
            <div className=" w-[195px] font-sans flex justify-center items-center h-[48px] rounded-[32px] border-[1px] border-[#006400] text-center text-[14px] font-[400] text-[#121212] ">Sign In</div>
          </Link>
        </div>
        {/* Forgot password Container */}
        <div className="mt-[82px] w-full  flex justify-center items-center">
          <div>
            <h2 className="text-[28px] text-center  text-[#000] font-sans font-[600] ">Forget Password</h2>
            <p className="text-[20px] text-center mt-[20px] mb-[12px] text-[#000] font-sans font-[400] ">Enter email to reset password</p>
            <div className="flex justify-center">
              <img className="w-[50%]" src={forgotPasswordIcon} alt="icon" />
            </div>
            <p className="text-[20px] text-left mt-[32px] text-[#000] font-sans font-[400] ">Enter your email</p>
            <div className="mt-5">
              <TextInput color="#000" placeholder={" you@email.com"} />
              <Link to="/auth/email-confirmation">
                <button className=" mt-[24px] font-[400] text-[14px] text-[#fff] flex items-center justify-center h-[46px] w-[416px] rounded-[32px] bg-[#006400] ">Continue</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

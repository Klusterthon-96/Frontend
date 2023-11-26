import { Link } from "react-router-dom";
import PasswordInput from "../../components/input";

function ResetPassword() {
  return (
    <>
      <div className="w-full min-h-fit pb-[50px] bg-white  ">
        {/* header */}
        <div className=" w-full pr-[72px] pt-[20px] items-center flex  justify-between   ">
          <h3 className="text-[28px] w-[63%] flex justify-end text-[#000] font-sans font-normal ">Agro Assistance</h3>
          <Link to="/auth/login">
            <div className=" w-[195px] font-sans flex justify-center items-center h-[48px] rounded-[32px] border-[1px] border-[#006400] text-center text-[14px] font-[400] text-[#121212] ">Sign In</div>
          </Link>
        </div>
        {/* Reset Password Container */}
        <div className="mt-[82px] w-full  flex justify-center items-center">
          <div className="">
            <h2 className="text-[28px] text-center  text-[#000] font-sans font-[600] ">Reset Password</h2>
            <p className="text-[20px] w-[400px] text-center mt-[24px] mb-[32px] text-[#000] font-sans font-[400] ">The password must be different from before.</p>
            <PasswordInput label={"New Password"} />
            <div className="mt-[24px]">
              <PasswordInput label={"Confirm Password"} />
            </div>
            <Link to="/dashboard">
              <button className=" mt-[24px] font-[400] text-[14px] text-[#fff] flex items-center justify-center h-[46px] w-[416px] rounded-[32px] bg-[#006400] ">Continue</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResetPassword;

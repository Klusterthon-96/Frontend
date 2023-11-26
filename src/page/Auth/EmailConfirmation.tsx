import emailConfirm from "../../asset/Confirmed-cuate 1.png";
import { Link } from "react-router-dom";

function EmailConfirmation() {
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
        {/* Email Confirmation Container */}
        <div className="mt-[82px] w-full  flex justify-center items-center">
          <div className="">
            <h2 className="text-[28px] text-center  text-[#000] font-sans font-[600] ">Email has been sent</h2>
            <p className="text-[20px] w-[416px] text-center mt-[24px] mb-[32px] text-[#000] font-sans font-[400] ">Your Password Reset Request is in Motion Check your email for confirm</p>
            <div className="flex justify-center">
              <img className="w-[50%]" src={emailConfirm} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailConfirmation;

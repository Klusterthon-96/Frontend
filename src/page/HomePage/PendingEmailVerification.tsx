import { useState } from "react";
import Button from "../../components/Button";

function PendingEmailVerification() {
  const [backgroundColor, setBackgroundColor] = useState<string>("#006400"); // Initial color
  console.log(setBackgroundColor);
  return (
    <>
      {/* Reset Password Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div className=" text-center">
          <h2 className="text-[28px] text-center font-[600]">Email Confirmation</h2>
          <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">We've sent a confirmation email to your inbox. If you haven't received it, please click the button below.</p>
          <div className="flex justify-center items-center">
            <Button backgroundColor={backgroundColor} title={"Resend Confirmation Email"} />
          </div>
          {/* <button className="text-center"> </button> */}
        </div>
      </div>
    </>
  );
}
export default PendingEmailVerification;

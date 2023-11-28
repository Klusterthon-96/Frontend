import Button from "../../components/Button";

function PendingEmailVerification() {
  return (
    <>
      {/* Reset Password Container */}
      <div className="font-sans px-5 pb-5 grid place-items-center h-[90vh] lg:max-w-[450px] mx-auto">
        <div className=" text-center">
          <h2 className="text-[28px] text-center font-[600]">Reset Password</h2>
          <p className="text-[20px] text-center mt-[20px] mb-[12px] font-[400]">The password must be different from before.</p>

          <Button title={"Resend Email Verification"} />
          {/* <button className="text-center"> </button> */}
        </div>
      </div>
    </>
  );
}
export default PendingEmailVerification;

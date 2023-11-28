import { AiOutlineClose } from "react-icons/ai";

import emailConfirm from "../../asset/Confirmed-cuate 1.svg";

function EmailVerification() {
  return (
    <>
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-white overflow-hidden h-screen w-full outline-none font-sans">
        <div className="pointer-events-none relative flex m-2 min-h-screen w-auto translate-y-[-50px] items-center transition-all duration-300 ease-in-out md:my-7 md:mx-auto md:h-auto">
          <div className="pointer-events-auto relative bg-clip-padding lg:w-[400px] p-4 mx-auto bg-white rounded-lg text-center">
            <div className="flex items-center justify-end mb-8">
              <button
                type="button"
                className="box-content rounded-none p-1 border-none opacity-50 text-xl "
                aria-label="Close"
                // onClick={() => setOpen(false)}
              >
                <AiOutlineClose size={26} color="#000" />
              </button>
            </div>
            <div className="">
              <h2 className="text-[28px] font-semibold">Email has been Verified</h2>
              {/* <p className="text-xl my-5">Email has </p> */}
              <div className="flex justify-center">
                <img className="" src={emailConfirm} alt="icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmailVerification;

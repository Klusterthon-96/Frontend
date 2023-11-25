import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <>
      <div className="w-full h-[100vh] bg-white  ">
        {/* header */}
        <div>
          <h3 className="text-[28px] text-[#000] font-sans font-normal ">Agro Assistance</h3>
          <Link to="/auth/login">
            <div></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;

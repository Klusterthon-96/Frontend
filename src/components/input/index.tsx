import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export function TextInput({ value, onChange, label }: any) {
  return (
    <label htmlFor="Email">
      {label}
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="min-h-[auto] mt-3 h-14 rounded-[32px] border bg-transparent py-2 px-6 outline-none transition-all duration-200 ease-linear text-black text-lg d bg-[#D2D2D2] w-full"
        placeholder="your@email.com"
      />
    </label>
  );
}

export default function PasswordInput({ value, onChange, label }: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label htmlFor="password" className="mb-5">
      {label}{" "}
      <div className="mb-4 relative flex justify-center items-center">
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={onChange}
          className="min-h-[auto] h-14 mt-3 rounded-[32px] shadow-md border bg-transparent py-2 px-6 outline-none transition-all duration-200 text-black text-lg ease-linear bg-[#D2D2D2] w-full"
          placeholder="********"
        />
        {showPassword === false ? (
          <div
            className="absolute right-3 mt-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <AiOutlineEyeInvisible className="text-2xl text[rgb(99_115_129)] hover:bg-[rgba(99_115_129_0.08)]" />
          </div>
        ) : (
          <div
            className="absolute right-3 mt-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <AiOutlineEye className="text-2xl text[rgb(99_115_129)]  hover:bg-[rgba(99_115_129_0.08)] " />
          </div>
        )}
      </div>
    </label>
  );
}

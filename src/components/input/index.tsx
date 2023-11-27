import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export function TextInput({ value, onChange, label, placeholder, name }: any) {
  return (
    <label htmlFor={name} className="block text-white lg:text-black">
      {label}
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="block mt-1.5 h-14 rounded-[32px] border py-2 px-6 outline-none placeholder:text-[#666666] transition-all duration-200 ease-linear text-black text-lg bg-[#f5f5f5] w-full"
        placeholder={placeholder}
      />
    </label>
  );
}

export function Select({ arr, option, label }: any) {
  return (
    <label htmlFor="">
      {label}
      <select className="min-h-[auto] mt-1.5 h-14 rounded-[32px] border py-2 px-6 outline-none transition-all duration-200 ease-linear text-black text-lg d bg-[#f5f5f5] w-full">
        <option value="">{option}</option>
        {arr.map((item: any) => {
          return (
            <option key={item.key} value={item.value}>
              {item.label}
            </option>
          );
        })}
      </select>
    </label>
  );
}

export default function PasswordInput({ value, onChange, label, name }: any) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <label htmlFor={name} className="text-white lg:text-black">
      {label}
      <div className="mb-4 relative flex justify-center items-center">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          className="min-h-[auto] h-14 mt-3 rounded-[32px] shadow-md border py-2 px-6 outline-none transition-all duration-200 text-black placeholder:text-[#666666] text-lg ease-linear bg-[#F5F5F5] w-full"
          placeholder="********"
        />
        {showPassword === false ? (
          <div
            className="absolute right-3 mt-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <AiOutlineEyeInvisible className="text-2xl text-[rgb(99_115_129)] hover:bg-[rgba(99_115_129_0.08)]" />
          </div>
        ) : (
          <div
            className="absolute right-3 mt-3 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <AiOutlineEye className="text-2xl text-[rgb(99_115_129)]  hover:bg-[rgba(99_115_129_0.08)] " />
          </div>
        )}
      </div>
    </label>
  );
}

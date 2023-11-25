import { FaArrowRight } from "react-icons/fa6";

export default function Button({ onClick, title }: any) {
  return (
    <button
      className="px-3 py-2 flex items-center text-white bg-black rounded-[32px]"
      onClick={onClick}
    >
      {title} <FaArrowRight className="ml-3" />
    </button>
  );
}
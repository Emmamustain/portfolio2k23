import { ClassNameValue, twMerge } from "tailwind-merge";
import { ReactElement } from "react";
interface AnimButtonProps {
  text: string;
  icon: ReactElement;
  className?: string;
}

export default function AnimButton({ text, icon, className }: AnimButtonProps) {
  return (
    <div
      className={`w-[37px] h-[37px] bg-white duration-300 relative group overflow-hidden flex items-center rounded-full hover:w-[100px] ${className}`}
    >
      <div className="h-[37px] w-[37px] rounded-full duration-300 group-hover:scale-75 text-center bg-black text-white flex justify-center items-center">
        {icon}
      </div>
      <div className="opacity-0 group-hover:opacity-100 duration-500 absolute left-[40px] hover:text-black text-[11px]">
        {text}
      </div>
    </div>
  );
}

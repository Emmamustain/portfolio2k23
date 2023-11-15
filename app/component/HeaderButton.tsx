"use client";
import { twMerge } from "tailwind-merge";

interface HeaderButtonProps {
  text: string;
  targetId: string;
}

export default function HeaderButton({
  text = "placeholder",
  targetId,
}: HeaderButtonProps) {
  const handleClick = () => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 16, // Adjust this value as needed
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className={twMerge(
        "hover:text-black hover:border-b-[1px] border-black duration-700 pt-[5px]"
      )}
    >
      <button
        onClick={handleClick}
        className="flex text-[13px] font-maisonneueLight"
      >
        {text}
      </button>
    </div>
  );
}

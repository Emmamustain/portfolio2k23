"use client";
import { useState, useEffect } from "react";
import { twMerge } from "tailwind-merge";

export default function Loading() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const simulateLoading = () => {
      if (progress < 100) {
        setTimeout(() => {
          setProgress(progress + 1);
        }, 30); // Adjust the timeout for the desired speed
      } else {
        setTimeout(() => {
          setVisible(false);
        }, 1000); // Hide the loading screen after 1 second
      }
    };

    if (visible) {
      simulateLoading();
    }
  }, [visible, progress]);

  setTimeout(() => {
    setVisible(false);
  }, 1000);

  return (
    <div
      className={twMerge(
        "w-full absolute bg-primary z-10 top-0 left-0 h-screen flex flex-col justify-center items-center",
        !visible && "-top-[100%] duration-1000"
      )}
    >
      <div className="animate-ping-slow text-[13px] absolute top-[calc(50%-20px)]">
        ⭐️
      </div>
      <div className="flex justify-center items-center ">
        <h1 className="font-ivar text-[60px] pl-4">Amina BS</h1>
        <p className="text-sm pb-8 pl-2 ">©</p>
      </div>
      <p className="font-maisonneue text-[13px]">FULL STACK DEVELOPER</p>
      {visible && (
        <p className="text-gray-600 text-[13px] font-maisonneue">{progress}%</p>
      )}
    </div>
  );
}

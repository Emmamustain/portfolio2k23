"use client";
import AnimButton from "./AnimButton";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
export default function Footer() {
  return (
    <div className="flex justify-between items-center px-6">
      <div className="font-maisonneueLight text-[12px]">
        <p>2023©</p>
        <p>DEV BY AMINA BENELHADJSAID</p>
      </div>
      <div className="flex gap-2 ">
        <a href="mailto:benelhadjsaidamina@gmail.com">
          <AnimButton
            text="benelhadjsaidamina@gmail.com"
            icon={<Mail size={10} />}
            className="hover:w-[220px] "
          />
        </a>
        <a href="https://www.linkedin.com/in/amina-benelhadjsaid-258162285">
          <AnimButton
            text="Amina Benelhadjsaid"
            icon={<Linkedin size={10} />}
            className="hover:w-[160px] "
          />
        </a>
        <a href="https://github.com/Emmamustain">
          <AnimButton
            text="Emmamustain"
            icon={<Github size={10} />}
            className="hover:w-[120px] "
          />
        </a>
      </div>
      <div className="flex text-[13px] font-maisonneueLight">
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          BACK TO TOP
        </button>
        <ArrowUp size={10} />
      </div>
    </div>
  );
}

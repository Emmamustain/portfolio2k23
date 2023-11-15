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
        <AnimButton text="Mail" icon={<Mail size={10} />} />
        <AnimButton text="LinkedIn" icon={<Linkedin size={10} />} />
        <AnimButton text="Github" icon={<Github size={10} />} />
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

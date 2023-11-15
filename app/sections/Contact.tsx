"use client";
import { useRef } from "react";
import Footer from "../component/Footer";
import { useScroll, useTransform, motion } from "framer-motion";

export default function ContactSection() {
  const contactRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: contactRef });
  const y = useTransform(scrollYProgress, [0, 1], ["-300vh", "0%"]);

  return (
    <div className="overflow-hidden">
      <motion.section
        id="section3"
        style={{ y }}
        className="h-screen bg-primary w-full "
      >
        <div className="h-[100px] w-full"></div>
        {/* "LET'S TALK" */}
        <div className="w-full h-[calc(100vh-100px)]  flex flex-col">
          <div className=" flex flex-col w-full h-[75vh]  justify-center items-center">
            <p className="font-maisonneueLight text-[13px]">
              Ready for your next project ?
            </p>
            <div>
              <a
                href="mailto:benelhadjsaidamina@gmail.com"
                className="font-gallient text-[100px] md:text-[200px] relative group duration-300"
              >
                Let&apos;s Talk
                <div className="absolute w-full h-0.5 bg-black bottom-0 left-0 transition-transform transform origin-left scale-x-0 group-hover:scale-x-100 duration-500 "></div>
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </motion.section>
    </div>
  );
}

import AnimButton from "./component/AnimButton";
import Header from "./component/Header";
import { Mail, Linkedin, Github, ArrowUp } from "lucide-react";
import Loading from "./component/Loading";
import Footer from "./component/Footer";
import ContactSection from "./sections/Contact";

export default function Home() {
  return (
    <main className="flex overflow-hidden bg-primary relative flex-col text-black">
      <Loading />
      <Header />
      <div className="h-[100px] w-full"></div>
      {/* first section */}

      <section className="h-[calc(100vh-100px)] relative">
        <div className="w-full h-[calc(100vh-200px)] relative flex justify-center items-center ">
          <div className="flex flex-col h-full -mt-8 justify-center items-center ">
            <p className="text-sm text-gray-500 font-ivar">( 2023© )</p>
            <p className="text-[250px] font-ivar text-black leading-[220px] ">
              Amina
            </p>
            <p className="font-maisonneueLight text-sm text-gray-700 w-[550px] text-center">
              IS A
              <span className="border-[1px] px-2 mx-1 rounded-lg border-gray-600">
                FULL STACK DEVELOPER
              </span>
              WITH STRONG SKILLS IN
              <span className="border-[1px] px-2 mx-1 rounded-lg border-gray-600">
                UI & UX DESIGN
              </span>
              AND FOCUS ON PERFORMANCE, USER EXPERIENCE, BEAUTIFUL DESIGNS AND
              LEARNING NEW SKILLS
            </p>

            <div className="flex gap-2 mt-5">
              <AnimButton
                text="benelhadjsaidamina@gmail.com"
                icon={<Mail size={10} />}
                className="hover:w-[220px] "
              />
              <AnimButton
                text="Amina Benelhadjsaid"
                icon={<Linkedin size={10} />}
                className="hover:w-[160px] "
              />
              <AnimButton
                text="Emmamustain"
                icon={<Github size={10} />}
                className="hover:w-[120px] "
              />
            </div>
          </div>
        </div>
      </section>
      {/* second section */}
      <section id="section1" className="h-screen relative bg-eggshell w-full">
        <div className="absolute top-0 w-full left-0 h-[200px] bg-gradient-to-b from-primary to-eggshell">
          {/* Title */}
          <div className="flex flex-col items-center">
            <p className="font-ivar mb-12 text-[60px]">Selected Works</p>
            {/* Actual Work */}
            <div className=" h-fit w-full flex justify-around ">
              <div className="w-[48%] h-[80vh] bg-purple-200">01</div>
              <div className="w-[48%] h-[80vh] bg-pink-200">02</div>
            </div>
          </div>
        </div>
      </section>
      {/* Third section */}
      <section className="h-screen relative bg-eggshell w-full pt-16">
        <div className="absolute bottom-0 w-full left-0 h-[200px] bg-gradient-to-b from-eggshell to-diamond"></div>
        <div className=" h-fit w-full flex justify-around">
          <div className="w-[48%] h-[80vh] bg-red-200">03</div>
          <div className="w-[48%] h-[80vh] bg-yellow-200">04</div>
        </div>
      </section>
      {/* forth section */}
      <section
        id="section2"
        className="h-screen relative bg-diamond w-full flex flex-col justify-center items-center"
      >
        <div className="absolute bottom-0 w-full left-0 h-[90px] bg-gradient-to-b from-diamond to-primary"></div>
        <div className="flex flex-col mb-30 items-center justify-center w-[70%]">
          <p className="font-ivar text-[60px] ">About Me</p>
          <p className="text-sm text-center tracking-[1.48px] text-[20px] mt-8 ">
            As a motivated and ambitious student, I hold a Bachelor&apos;s
            degree in Computer Systems and have successfully completed the first
            year of my Master&apos;s degree program this year. I am a versatile
            Full Stack Developer with a keen eye for UI & UX design. With a
            solid foundation in programming and a knack for creating engaging
            user experiences, I am deeply passionate about the design and
            development of cutting-edge intelligent systems. By leveraging
            exceptional communication skills, meticulous attention to detail,
            and strong problem-solving abilities, I am committed to ensuring a
            seamless and enjoyable dining experience for patrons. I am now
            eagerly seeking new opportunities to further enhance and consolidate
            my expertise in the realm of computer science.
          </p>
        </div>
      </section>
      {/* Last section */}

      <ContactSection />
    </main>
  );
}

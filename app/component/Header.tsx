import { Mail } from "lucide-react";
import HeaderButton from "./HeaderButton";
export default function Header() {
  return (
    <header className="h-[100px] w-full fixed z-10 flex justify-between items-center px-6">
      {/* name */}
      <div className="">
        <h1 className="text-[13px] font-maisonneue text-black">
          AMINA BENELHADJ-SAID
        </h1>
        <p className="text-[13px] text-gray-500 font-maisonneueLight">
          Algeria
        </p>
      </div>
      {/* right part of header */}
      <div className="flex gap-4 left-10">
        <div className="flex gap-4 hover:text-gray-400 ">
          <HeaderButton text="WORK" targetId="section1" />
          <HeaderButton text="ABOUT ME" targetId="section2" />
          <HeaderButton text="ARCHIEVE" targetId="section3" />
        </div>
        <div>
          <div className="w-[30px] h-[30px] bg-white duration-300 relative group overflow-hidden flex items-center rounded-full hover:w-[250px]">
            <div className="h-[30px] w-[30px] rounded-full duration-300 group-hover:scale-75 text-center bg-black text-white flex justify-center items-center">
              <Mail size={10} />
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-500 absolute left-[40px] hover:text-black text-[11px]">
              BENELHADJSAIDAMINA@GMAIL.COM
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

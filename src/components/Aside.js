import React, { useState } from "react";
import { BsBarChartFill, BsChevronDown } from "react-icons/bs";
import { BiUser, BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";
import PowerOff from "../../public/powerOff.png";
import PowerOn from "../../public/powerOn.png";
import usa from "../../public/usaFlag.png";
import sweden from "../../public/swedenFlag.png";
import ghana from "../../public/ghanaFlag.png";
import nigeria from "../../public/nigeriaFlag.png";
import panama from "../../public/panamaFlag.png";
import crown from "../../public/crown.svg";

export default function Aside({ powerOn, setPowerOn, setCountry }) {
  const [activeMenu, setActiveMenu] = useState(false);

  return (
    <main className="fixed top-0 left-0 w-72 h-full overflow-hidden max-screen:static max-screen:w-auto">
      <aside
        className={`scrollbar font-axiforma absolute  top-0 left-0 w-72 overflow-auto h-full max-screen:h-max xl:w-72 xl:translate-x-0 transition-{transform,width} duration-500 linear z-10 bg-[#1B192B]  ${
          activeMenu ? "translate-x-0 w-72" : "-translate-x-full"
        } pt-8 `}
      >
        <div className="mb-4 pt-12 text-2xl px-6 items-center text-[#526484] grid justify-center gap-4">
          {/* href={"/overview"} */}
          <div>
            {powerOn ? (
              <Image
                onClick={() => setPowerOn(!powerOn)}
                src={PowerOn}
                alt="powerOff"
                className="my-auto w-3/4 mx-auto"
              />
            ) : (
              <Image
                onClick={() => setPowerOn(!powerOn)}
                src={PowerOff}
                alt="powerOff"
                className="my-auto w-3/4 mx-auto"
              />
            )}
          </div>
          <div className="font-medium text-xs text-[#A3A3A3] text-center grid gap-1">
            <p>Recommended Server</p>
            <h3 className="text-3xl font-bold text-white">United States</h3>
            <p>104.223.181.147</p>
          </div>
        </div>
        <div className="mb-4 w-[90%] mx-auto border rounded-md border-[#3D3948] grid grid-cols-[10%,90%]">
          <BiSearchAlt2 className="text-[#3D3948] w-full m-auto" />
          <input
            className="placeholder:text-[#3D3948] text-xs py-2 bg-inherit outline-none text-white"
            placeholder="Search for Country"
          />
        </div>
        <div className="text-white px-4 font-medium mb-4 grid gap-y-6">
          <h2 className="text-sm">Free Locations (2)</h2>
          <div className="flex justify-between items-center text-sm pl-2">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setCountry("United States of America")}
            >
              <div>
                <Image src={usa} alt="usaFlag" />
              </div>
              <div>
                <h2 className="">United States</h2>
                <p className="text-[10px] font-light">3 IP Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <BsBarChartFill />
              </div>
              <div>
                <BsChevronDown className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center text-sm pl-2">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setCountry("Sweden")}
            >
              <div>
                <Image src={sweden} alt="swedenFlag" />
              </div>
              <div>
                <h2 className="">Sweden</h2>
                <p className="text-[10px] font-light">3 IP Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <BsBarChartFill />
              </div>
              <div>
                <BsChevronDown className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-[#999999] font-medium text-[13px]">Pro</p>
            <Image src={crown} alt="crown" className="w-3" />
          </div>
          <div className="flex justify-between items-center text-sm pl-2">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setCountry("Ghana")}
            >
              <div>
                <Image src={ghana} alt="ghanaFlag" />
              </div>
              <div>
                <h2 className="">Ghana</h2>
                <p className="text-[10px] font-light">3 IP Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src={crown} alt="crown" className="w-5" />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm pl-2">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setCountry("Nigeria")}
            >
              <div>
                <Image src={nigeria} alt="nigeriaFlag" />
              </div>
              <div>
                <h2 className="">Nigeria</h2>
                <p className="text-[10px] font-light">3 IP Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src={crown} alt="crown" className="w-5" />
            </div>
          </div>
          <div className="flex justify-between items-center text-sm pl-2">
            <div
              className="flex items-center gap-4 cursor-pointer"
              onClick={() => setCountry("Panama")}
            >
              <div>
                <Image src={panama} alt="panamaFlag" />
              </div>
              <div>
                <h2 className="">Panama</h2>
                <p className="text-[10px] font-light">3 IP Locations</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Image src={crown} alt="crown" className="w-5" />
            </div>
          </div>
        </div>
      </aside>
    </main>
  );
}

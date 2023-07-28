import React, { useState } from "react";
import Link from "next/link";
import { BsBarChartFill, BsChevronDown } from "react-icons/bs";
import { BiUser, BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import luraLogo from "../public/LURa.svg";
import PowerOff from "../public/powerOff.png";
import PowerOn from "../public/powerOn.png";

import usa from "../public/usaFlag.png";
import sweden from "../public/swedenFlag.png";
import ghana from "../public/ghanaFlag.png";
import nigeria from "../public/nigeriaFlag.png";
import panama from "../public/panamaFlag.png";
import crown from "../public/crown.svg";
import AccountInfo from "@/components/AccountInfo";
import Language from "@/components/Language";
import ConnectionLog from "@/components/ConnectionLog";
import ConnectionSettings from "@/components/ConnectionSettings";
import VpnProtocol from "@/components/VpnProtocol";
import NotificationSettings from "@/components/NotificationSettings";
import Issues from "@/components/Issues";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Aside from "@/components/Aside";

const Layout = ({ children, powerOn, setPowerOn, setCountry }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleShowProfile = () => {
    if (showProfile) setShowProfile(false);
  };

  return (
    <main
      className="flex relative font-axiforma   min-h-screen"
      onClick={toggleShowProfile}
    >
      {activeMenu && (
        <div
          className="fixed z-20 inset-0 bg-[#10192466] transition duration-200s"
          onClick={() => {
            setActiveMenu(false);
          }}
        ></div>
      )}

      <div>
        <Aside
          powerOn={powerOn}
          setPowerOn={setPowerOn}
          setCountry={setCountry}
        />
      </div>
      <div className="ml-0 duration-300 linear w-full h-full min-h-screen  bg-black object-cover bg-cover">
        {/* <Navbar /> */}
        <div className="xl:ml-72 sm:px-8 py-8 h-full bg-black pt-16 relative min-h-screen ">
          <div>{children}</div>
        </div>
      </div>
    </main>
  );
};

export default Layout;

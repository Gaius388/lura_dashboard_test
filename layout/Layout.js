import React, { useState } from "react";
import Link from "next/link";
import { BsBarChartFill, BsChevronDown } from "react-icons/bs";
import { BiUser, BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";
import { useRouter } from "next/router";
import luraLogo from "../public/LURa.svg";
import powerOff from "../public/powerOff.svg";
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

const Layout = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [account, setAccount] = useState(true);
  const [language, setLanguage] = useState(false);
  const [connection, setConnection] = useState(false);
  const [connectSettings, setConnectSettings] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState(false);
  const [vpnProtocol, setVpnProtocol] = useState(false);
  const [issues, setIssues] = useState(false);

  const toggleShowProfile = () => {
    if (showProfile) setShowProfile(false);
  };
  const router = useRouter();

  return (
    <main className="flex relative font-axiforma" onClick={toggleShowProfile}>
      {account &&
        <AccountInfo account={account} setAccount={setAccount} /> }
      {language ? (
        <Language language={language} setLanguage={setLanguage} />
      ) : null}
      {connection ? (
        <ConnectionLog connection={connection} setConnection={setConnection} />
      ) : null}
      {vpnProtocol ? (
        <VpnProtocol
          vpnProtocol={vpnProtocol}
          setVpnProtocol={setVpnProtocol}
        />
      ) : null}
      {connectSettings ? (
        <ConnectionSettings
          connectSettings={connectSettings}
          setConnectSettings={setConnectSettings}
        />
      ) : null}
      {notificationSettings ? (
        <NotificationSettings
          notificationSettings={notificationSettings}
          setNotificationSettings={setNotificationSettings}
        />
      ) : null}
      {issues && <Issues issues={issues} setIssues={setIssues} />}
      {activeMenu && (
        <div
          className="fixed z-20 inset-0 bg-[#10192466] transition duration-200s"
          onClick={() => {
            setActiveMenu(false);
          }}
        ></div>
      )}

      <div
        className={`scrollbar font-axiforma fixed min-h-screen top-0 left-0 w-72 overflow-auto h-full xl:w-72 xl:translate-x-0 transition-{transform,width} duration-500 linear z-20 bg-[#1B192B]  ${
          activeMenu ? "translate-x-0 w-72" : "-translate-x-full"
        } pt-8`}
      >
        <div className="mb-4 pt-12 text-2xl px-6 items-center text-[#526484] grid justify-center gap-4">
          <Link href={"/overview"}>
            <Image
              src={powerOff}
              alt="powerOff"
              className="my-auto w-3/4 mx-auto"
            />
          </Link>
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
        <div className="text-white px-4 font-medium mb-4 grid gap-y-4">
          <h2 className="text-sm">Free Locations (2)</h2>
          <div className="flex justify-between items-center text-sm pl-2">
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
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
            <div className="flex items-center gap-4">
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
      </div>
      <div className="ml-0 duration-300 linear w-full">
        <div className="h-16 w-full fixed z-40 bg-[#1B192A] text-[#BDBDBD] flex items-center shadow-md">
          <div className="flex w-full justify-between items-center pr-8">
            <div className="flex gap-4 items-center pl-8">
              <Image src={luraLogo} alt="luraLogo" className="w-[5em]" />
            </div>
            <div className="flex items-center gap-x-6 list-none text-xs font-medium">
              <li className="cursor-pointer">Account Information</li>
              <li className="cursor-pointer">Language</li>
              <li className="cursor-pointer">Connection Log</li>
              <li className="cursor-pointer">Connection Settings</li>
              <li className="cursor-pointer">VPN Protocol</li>
              <li className="cursor-pointer">Notification Settings</li>
              <li className="cursor-pointer">Report an issue</li>
            </div>
            <div className="flex items-center gap-6 cursor-pointer relative">
              <div className="flex items-center gap-2">
                <BiUser className="" />
                <div className="font-medium hidden sm:grid">
                  <div className="flex items-center gap-1">
                    <h3 className="text-sm">Best Omotayo</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:ml-72 sm:px-8 py-8 min-h-screen bg-black pt-16 relative">
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;

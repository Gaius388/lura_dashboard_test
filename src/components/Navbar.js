import Image from "next/image";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import luraLogo from "../../public/LURa.svg";
import AccountInfo from "./AccountInfo";
import Language from "./Language";
import ConnectionLog from "./ConnectionLog";
import VpnProtocol from "./VpnProtocol";
import ConnectionSettings from "./ConnectionSettings";
import NotificationSettings from "./NotificationSettings";
import Issues from "./Issues";
import Subscription from "./Subscription";
import CardDetails from "./CardDetails";
import AddCard from "./AddCard";

export default function Navbar({ modal, setModal }) {
  // const [account, setAccount] = useState(false);
  // const [language, setLanguage] = useState(false);
  // const [connection, setConnection] = useState(false);
  // const [subscription, setSubscription] = useState(false);
  // const [cardDetails, setCardDetails] = useState(false);
  const [addCard, setAddCard] = useState(false);
  const [connectSettings, setConnectSettings] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState(false);
  const [vpnProtocol, setVpnProtocol] = useState(false);
  const [issues, setIssues] = useState(false);
  const [active, setActive] = useState("");

  return (
    <nav
      className={`h-16  w-full fixed z-40 top-0 inset-0    bg-[#1B192A] text-[#BDBDBD] md:flex items-center shadow-md overflow-hidden 
       max-screen:w-[1440px] max-screen:mx-auto
      sm:hidden hidden pointer-events-none `}
    >
      <div className="flex w-full justify-between gap-8 items-center pr-8 ">
        <div className="flex gap-4 items-center pl-8">
          <Image src={luraLogo} alt="luraLogo" className="w-[5em]" />
        </div>
        <div className="flex items-center gap-x-6 list-none text-xs font-medium">
          <button
            className={`${
              modal.account |
              modal.subscription |
              modal.cardDetails |
              modal.addCard
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ account: !modal.account, language: false });
            }}
          >
            Account Information
          </button>
          <button
            className={`${
              modal.language === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              console.log("yes");
              setModal({ language: !modal.language, account: false });
            }}
          >
            Language
          </button>
          <button
            className={`${
              modal.connection === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ connection: true });
            }}
          >
            Connection Log
          </button>
          <button
            className={`${
              modal.connectSettings === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ connectSettings: true });
            }}
          >
            Connection Settings
          </button>
          <button
            className={`${
              modal.vpnProtocol === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ vpnProtocol: true });
            }}
          >
            VPN Protocol
          </button>
          <button
            className={`${
              modal.notificationSettings === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ notificationSettings: true });
            }}
          >
            Notification Settings
          </button>
          <button
            className={`${
              modal.issues === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto"
                : "cursor-pointer pointer-events-auto"
            }`}
            onClick={() => {
              setModal({ issues: true });
            }}
          >
            Report an issue
          </button>
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
    </nav>
  );
}

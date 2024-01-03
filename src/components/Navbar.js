"use client";
import Image from "next/image";
import React, { useState } from "react";
import { BiUser } from "react-icons/bi";
import luraLogo from "../../public/LURa.svg";

export default function Navbar({ modal, setModal }) {
  return (
    <nav
      className={`h-16  w-full fixed z-50 top-0 inset-0    bg-[#1B192A] text-[#BDBDBD] md:flex items-center shadow-md overflow-hidden 
       max-screen:w-[1440px] max-screen:mx-auto
      sm:hidden hidden pointer-events-none left-0  `}
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
              setModal({
                account: !modal.account,
                language: false,
                connection: false,
                connectSettings: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
                vpnProtocol: false,
              });
            }}
          >
            Account Information
          </button>
          <button
            className={`${
              modal.language === true
                ? "text-[#AB55EF] cursor-pointer pointer-events-auto focus-visible:outline-none  "
                : "cursor-pointer pointer-events-auto focus-visible:outline-none  "
            }`}
            onClick={() => {
              setModal({
                language: !modal.language,
                account: false,
                connection: false,
                connectSettings: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
                vpnProtocol: false,
              });
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
              setModal({
                connection: !modal.connection,
                account: false,
                language: false,
                connectSettings: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
                vpnProtocol: false,
              });
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
              setModal({
                connectSettings: !modal.connectSettings,
                account: false,
                language: false,
                connection: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
                vpnProtocol: false,
              });
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
              setModal({
                vpnProtocol: !modal.vpnProtocol,
                account: false,
                language: false,
                connection: false,
                connectSettings: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
              });
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
              setModal({
                notificationSettings: !modal.notificationSettings,
                account: false,
                language: false,
                connection: false,
                connectSettings: false,
                issues: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                vpnProtocol: false,
              });
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
              setModal({
                issues: !modal.issues,
                account: false,
                language: false,
                connection: false,
                connectSettings: false,
                subscription: false,
                cardDetails: false,
                addCard: false,
                notificationSettings: false,
                vpnProtocol: false,
              });
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

"use client";
import Aside from "@/components/Aside";
import Navbar from "@/components/Navbar";
import AccountInfo from "@/components/AccountInfo";
import Language from "@/components/Language";
import ConnectionLog from "@/components/ConnectionLog";
import ConnectionSettings from "@/components/ConnectionSettings";
import VpnProtocol from "@/components/VpnProtocol";
import NotificationSettings from "@/components/NotificationSettings";
import Issues from "@/components/Issues";
import Void from "@/components/Void";
import AddCard from "@/components/AddCard";
import CardDetails from "@/components/CardDetails";
import Subscription from "@/components/Subscription";
import { useState } from "react";

const LayoutDemo = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleShowProfile = () => {
    if (showProfile) setShowProfile(false);
  };

  const [modal, setModal] = useState({
    demo: true,
    account: false,
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
        <Aside />
      </div>
      <div className="ml-0 duration-300 linear w-full h-full min-h-screen  bg-black object-cover bg-cover">
        <Navbar modal={modal} setModal={setModal} />
        <div className="xl:ml-72 sm:px-8 py-8 h-full bg-black pt-16 relative min-h-screen ">
          <div>{children}</div>
          <div>
            {modal.demo && (
              <div className="hidden">
                <Void
                  modal={modal}
                  notificationSettings={modal.demo}
                  setModal={setModal}
                />
              </div>
            )}
            {modal.account && (
              <AccountInfo
                account={modal.account}
                modal={modal}
                setModal={setModal}
              />
            )}
            {modal.language ? (
              <Language
                modal={modal}
                language={modal.language}
                setModal={setModal}
              />
            ) : null}
            {modal.connection && (
              <ConnectionLog
                modal={modal}
                connection={modal.connection}
                setModal={setModal}
              />
            )}
            {modal.addCard && (
              <AddCard
                addCard={modal.addCard}
                modal={modal}
                setModal={setModal}
              />
            )}
            {modal.cardDetails && (
              <CardDetails
                cardDetails={modal.cardDetails}
                modal={modal}
                setModal={setModal}
              />
            )}
            {modal.subscription && (
              <Subscription
                subscription={modal.subscription}
                modal={modal}
                setModal={setModal}
              />
            )}
            {modal.vpnProtocol && (
              <VpnProtocol
                vpnProtocol={modal.vpnProtocol}
                modal={modal}
                setModal={setModal}
              />
            )}
            {modal.connectSettings && (
              <ConnectionSettings
                connectSettings={modal.connectSettings}
                setModal={setModal}
                modal={modal}
              />
            )}
            {modal.notificationSettings && (
              <NotificationSettings
                modal={modal}
                notificationSettings={modal.notificationSettings}
                setModal={setModal}
              />
            )}
            {modal.issues && (
              <Issues modal={modal} issues={modal.issues} setModal={setModal} />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default LayoutDemo;

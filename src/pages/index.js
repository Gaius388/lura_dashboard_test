import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../layout/Layout";
// import Image from "next/image";
import map from "../../public/Map.png";
import mapTwo from "../../public/Map.svg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AccountInfo from "@/components/AccountInfo";
import Language from "@/components/Language";
import { useState } from "react";
import Issues from "@/components/Issues";
import NotificationSettings from "@/components/NotificationSettings";
import ConnectionSettings from "@/components/ConnectionSettings";
import VpnProtocol from "@/components/VpnProtocol";
import Subscription from "@/components/Subscription";
import CardDetails from "@/components/CardDetails";
import AddCard from "@/components/AddCard";
import ConnectionLog from "@/components/ConnectionLog";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [powerOn, setPowerOn] = useState(true);

  const [modal, setModal] = useState({
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
    <main className="w-full relative">
      <div className="">
        <Navbar setModal={setModal} modal={modal} />
      </div>
      <section className="h-max relative">
        <Layout powerOn={powerOn} setPowerOn={setPowerOn}>
          <div className="relative text-white grid  bg-black font-axiforma ">
            <div className="p-5 px-8">
              {powerOn ? (
                <Image src={mapTwo} priority alt="map" />
              ) : (
                <Image src={map} alt="map" />
              )}
            </div>
            <Footer />
          </div>
        </Layout>
        {modal.account ? (
          <AccountInfo
            account={modal.account}
            modal={modal}
            setModal={setModal}
          />
        ) : null}
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
          <AddCard addCard={modal.addCard} modal={modal} setModal={setModal} />
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
      </section>
    </main>
  );
}

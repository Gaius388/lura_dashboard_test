import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../layout/Layout";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AccountInfo from "@/components/AccountInfo";
import Language from "@/components/Language";
import { useEffect, useState } from "react";
import Issues from "@/components/Issues";
import NotificationSettings from "@/components/NotificationSettings";
import ConnectionSettings from "@/components/ConnectionSettings";
import VpnProtocol from "@/components/VpnProtocol";
import Subscription from "@/components/Subscription";
import CardDetails from "@/components/CardDetails";
import AddCard from "@/components/AddCard";
import ConnectionLog from "@/components/ConnectionLog";
import dynamic from "next/dynamic";
import Void from "@/components/Void";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [powerOn, setPowerOn] = useState(false);
  const [load, setLoad] = useState(true);
  const [country, setCountry] = useState("United States of America");
  const MyMap = dynamic(() => import("../components/MyMap"), {
    ssr: false,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    <main className="w-full relative">
      <section className="h-max ">
        <Navbar modal={modal} setModal={setModal} />
        <Layout
          powerOn={powerOn}
          setCountry={setCountry}
          setPowerOn={setPowerOn}
        >
          <div className=" text-white grid  bg-black font-axiforma ">
            <div className="md:px-0 px-2 h-[500px]">
              {load && (
                <div className="h-full pt-30">
                  <Loading />
                </div>
              )}
              <MyMap country={country} power={powerOn} setLoad={setLoad} />
            </div>
            <Footer powerOn={powerOn} setPowerOn={setPowerOn} />
          </div>
        </Layout>
        {/*this voids helps to make the modal function properly */}
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

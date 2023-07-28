import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import "@/styles/MyMap.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Navbar /> */}
      {/* <Navbar modal={modal} setModal={setModal} /> */}
      <Component {...pageProps} />;
      <ToastContainer />
    </>
  );
}

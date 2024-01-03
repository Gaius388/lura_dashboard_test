"use client";
import { useStore } from "@/store";
// import MyMap from "./MyMap";
import Footer from "./Footer";
import Loading from "./Loading";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function Body() {
  const [load, setLoad] = useState(true);
  const country = useStore((state) => state.country);

  const MyMap = dynamic(() => import("../components/MyMap"), {
    ssr: false,
  });

  return (
    <div className=" text-white grid  bg-black font-axiforma ">
      <div className="md:px-0 px-2 h-[500px]">
        {load && (
          <div className="h-full pt-30">
            <Loading />
          </div>
        )}
        <MyMap setLoad={setLoad} />
      </div>
      <Footer />
    </div>
  );
}

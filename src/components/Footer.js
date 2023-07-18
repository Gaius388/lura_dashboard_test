import Image from "next/image";
import React from "react";
import timerIcon from "../../public/timer_icon.svg";
import adsBlocker from "../../public/ads_icon.svg";
import downloadIcon from "../../public/download_icon.svg";
import uploadIcon from "../../public/upload_icon.svg";
import receivedMask from "../../public/received_mask.svg";
import receivedWave from "../../public/received_wave.svg";
import sentMask from "../../public/sent_mask.svg";
import sentWave from "../../public/sent_wave.svg";

export default function Footer({ powerOn, setPowerOn }) {
  return (
    <div className="md:grid grid-cols-3 gap-6 md:self-end flex flex-col p-4">
      <div className=" rounded-md   bg-gradient-to-t from-black to-gray-800 shadow-right-purple h-48">
        <div className="flex items-center gap-4 px-4 py-4 h-1/2">
          <Image src={timerIcon} alt="timer_icon" />
          <div>
            <p className="uppercase bg-gradient-to-r bg-clip-text from-[#0094FF] to-[#00AFAF] text-xs text-transparent font-bold">
              time running
            </p>
            <p className="text-lg font-bold">
              {powerOn ? "3 Days 14 Hrs 32 Mins " : "-------"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4 px-4 py-4 border-t border-gray-700 h-1/2">
          <Image src={adsBlocker} alt="adsBlocker" />
          <div>
            <p className="uppercase bg-gradient-to-r bg-clip-text from-[#BB6BD9] to-[#F27A54] text-xs text-transparent font-bold">
              ads blocked
            </p>
            <p className="text-lg font-bold">{powerOn ? "5,671" : "-------"}</p>
          </div>
        </div>
      </div>

      <div className=" rounded-md  shadow-top bg-gradient-to-t from-black to-gray-800 h-48 ">
        <div className="flex items-center gap-4 px-4 py-4 h-1/2">
          <Image src={downloadIcon} alt="download_icon" />
          <div>
            <p className="uppercase text-[#59B8FC] font-bold text-xs">
              data received
            </p>
            <p className="text-lg font-bold">
              {powerOn ? "37.72 GB" : "-------"}
            </p>
          </div>
        </div>
        <div className="relative overflow-y-hidden h-1/2">
          <Image src={receivedWave} alt="received_wave" className="w-full" />
          <Image
            src={receivedMask}
            alt="received_mask"
            className="absolute top-0"
          />
        </div>
      </div>

      <div className="rounded-md  shadow-left bg-gradient-to-t from-black to-gray-800 h-48">
        <div className="flex items-center gap-4 px-4 py-4 h-1/2">
          <Image src={uploadIcon} alt="upload_icon" />
          <div>
            <p className="uppercase text-[#EF8C55] text-xs">Data sent</p>
            <p className="text-lg font-bold">
              {powerOn ? "37.72 GB" : "-------"}
            </p>
          </div>
        </div>
        <div className="relative overflow-y-hidden h-1/2">
          <Image src={sentWave} alt="sent_wave" className="w-full" />
          <Image src={sentMask} alt="sent_mask" className="absolute top-0" />
        </div>
      </div>
    </div>
  );
}

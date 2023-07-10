import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../layout/Layout";
import timerIcon from "../../public/timer_icon.svg";
import adsBlocker from "../../public/ads_icon.svg";
import downloadIcon from "../../public/download_icon.svg";
import uploadIcon from "../../public/upload_icon.svg";
import receivedMask from "../../public/received_mask.svg";
import receivedWave from "../../public/received_wave.svg";
import sentMask from "../../public/sent_mask.svg";
import sentWave from "../../public/sent_wave.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <div className="relative text-white grid min-h-screen bg-black font-axiforma">
        <div className="grid grid-cols-3 gap-4 self-end">
          <div className="border rounded-md">
            <div className="flex items-center gap-4 px-4 py-4">
              <Image src={timerIcon} alt="timer_icon" />
              <div>
                <p className="uppercase text-[#0094FF] text-xs">time running</p>
                <p className="text-lg font-bold">3 Days 14 Hrs 32 Mins</p>
              </div>
            </div>
            <div className="flex items-center gap-4 px-4 py-4 border-t">
              <Image src={adsBlocker} alt="adsBlocker" />
              <div>
                <p className="uppercase text-[#BB6BD9] text-xs">ads blocked</p>
                <p className="text-lg font-bold">5671</p>
              </div>
            </div>
          </div>

          <div className="border rounded-md">
            <div className="flex items-center gap-4 px-4 py-4">
              <Image src={downloadIcon} alt="download_icon" />
              <div>
                <p className="uppercase text-[#0094FF] text-xs">
                  data received
                </p>
                <p className="text-lg font-bold">37.72 GB</p>
              </div>
            </div>
            <div className="relative overflow-y-hidden">
              <Image src={receivedWave} alt="received_wave" />
              <Image
                src={receivedMask}
                alt="received_mask"
                className="absolute top-0"
              />
            </div>
          </div>

          <div className="border rounded-md">
            <div className="flex items-center gap-4 px-4 py-4">
              <Image src={uploadIcon} alt="upload_icon" />
              <div>
                <p className="uppercase text-[#0094FF] text-xs">time sent</p>
                <p className="text-lg font-bold">37.72 GB</p>
              </div>
            </div>
            <div className="relative overflow-y-hidden">
              <Image src={sentWave} alt="sent_wave" />
              <Image
                src={sentMask}
                alt="sent_mask"
                className="absolute top-0"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

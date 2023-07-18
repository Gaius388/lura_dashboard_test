import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { GrFormClose } from "react-icons/gr";
import { IoCloseOutline } from "react-icons/io5";
import React from "react";
import { BsArrowLeftShort, BsCheck } from "react-icons/bs";
import Navbar from "./Navbar";

const Subscription = ({ subscription, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <main className="relative">
      <Transition.Root show={subscription} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ subscription: false })}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-[rgba(0,0,0,0.51)] backdrop-blur blur-md transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 top-12 z-30 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 font-axiforma">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="h-full min-h-screen relative md:w-5/6 w-10/12 ">
                  <Navbar setModal={setModal} modal={modal} />

                  <section className="relative transform overflow-hidden rounded-xl text-left shadow-xl transition-all w-full sm:my-8 mt-10  ">
                    <section className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col w-full p-14 gap-6">
                      <header className="flex justify-between text-center gap-6 w-full">
                        <div
                          className="text-[#BDBDBD] text-base w-1/4 flex items-center justify-center gap-1 cursor-pointer"
                          onClick={() => {
                            setModal({ account: true, subscription: false });
                          }}
                        >
                          <BsArrowLeftShort className="text-xl" />
                          <p> Account Information</p>
                        </div>
                        <p className="text-[#4F5665] w-1/4">3-Days Trial</p>
                        <p className="text-[#4F5665] w-1/4">
                          Monthly Subscription
                        </p>
                        <p className="text-[#4F5665] w-1/4">
                          Yearly Subscription
                        </p>
                      </header>
                      <div className="flex justify-between text-center gap-6 w-full">
                        <p className="text-[#BDBDBD] text-base w-1/4"></p>
                        <p className="text-xl w-1/4">Free</p>
                        <p className="text-xl w-1/4">$7.99</p>
                        <p className="text-xl w-1/4">59.99</p>
                      </div>
                      <article className="">
                        <div className="flex justify-between text-center gap-6 w-full border-b border-gray-400 p-5 pt-0">
                          <p className="text-[#BDBDBD] text-left text-base w-1/4">
                            Unlimited Bandwidth
                          </p>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                        <div className="flex justify-between text-center gap-6 w-full border-b border-gray-400 p-5">
                          <p className="text-[#BDBDBD] text-base text-left w-1/4">
                            Encrypted Connection
                          </p>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                        <div className="flex justify-between text-center gap-6 w-full border-b border-gray-400 p-5">
                          <p className="text-[#BDBDBD] text-left text-base w-1/4">
                            Traffic Logs
                          </p>
                          <div className="flex  justify-center items-center w-1/4">
                            <IoCloseOutline className="border text-gray-400 border-[#EB1818] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                        <div className="flex justify-between text-center gap-6 w-full border-b border-gray-400 p-5">
                          <p className="text-[#BDBDBD] text-left text-base w-1/4">
                            Works on All Devices
                          </p>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                        <div className="flex justify-between text-center gap-6 w-full border-b border-gray-400 p-5">
                          <p className="text-[#BDBDBD] text-left text-base w-1/4">
                            Connect Anywhere
                          </p>

                          <div className="flex  justify-center items-center w-1/4">
                            <IoCloseOutline className="border text-gray-400 border-[#EB1818] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                        <div className="flex justify-between text-center gap-6 w-full  p-5">
                          <p className="text-[#BDBDBD] text-left text-base w-1/4">
                            Access to All Features
                          </p>
                          <div className="flex  justify-center items-center w-1/4">
                            <IoCloseOutline className="border text-gray-400 border-[#EB1818] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                          <div className="flex  justify-center items-center w-1/4">
                            <BsCheck className="border text-gray-400 border-[#5D18EB] p-1 rounded-full text-2xl " />
                          </div>
                        </div>
                      </article>
                      <div className="flex justify-between text-center  w-full gap-6  p-5">
                        <p className="text-[#BDBDBD] text-base w-1/4"></p>

                        <div className="flex items-center justify-center w-1/4">
                          <button
                            className="flex bg-[#5D18EB] justify-center
                        rounded-md items-center md:px-6 md:p-3   p-2  w-fit"
                          >
                            Buy Now
                          </button>
                        </div>
                        <div className="flex items-center justify-center w-1/4">
                          <button
                            className="flex bg-[#5D18EB] justify-center
                        rounded-md items-center md:px-6 md:p-3   p-2  w-fit"
                          >
                            Buy Now
                          </button>
                        </div>
                        <div className="flex items-center justify-center w-1/4">
                          <button
                            className="flex bg-[#5D18EB] justify-center
                        rounded-md md:px-6 md:p-3  items-center p-2  w-fit"
                          >
                            Buy Now
                          </button>
                        </div>
                      </div>
                    </section>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </main>
  );
};

export default Subscription;

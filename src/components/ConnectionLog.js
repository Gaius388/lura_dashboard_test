"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition, Disclosure } from "@headlessui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import React from "react";
import Navbar from "./Navbar";

const logs = [
  {
    month: "August",
    dateLogs: [
      { date: "August 28 2023" },
      { date: "August 27 2023" },
      { date: "August 26 2023" },
    ],
  },
  {
    month: "July",
    dateLogs: [
      { date: "July 28 2023" },
      { date: "July 27 2023" },
      { date: "July 26 2023" },
    ],
  },
];

const ConnectionLog = ({ connection, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <main className="relative">
      <Transition.Root show={connection} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ connection: false })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-4/6 md:w-2/6 xl:w-[30rem] ">
                  <Navbar setModal={setModal} modal={modal} />
                  <section className="relative transform overflow-hidden  text-left shadow-xl transition-all mt-10 w-full mx-auto sm:my-8 sm:w-full ">
                    <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <h3 className="text-2xl font-medium">Connection Log</h3>
                      </div>
                      <div
                        className="mt-3 grid gap-5 px-4 pb-4 text-white font-medium list-none"
                        onSubmit={handleSubmit}
                      >
                        {logs.map((item, index) => {
                          return (
                            <div className="text-sm" key={index}>
                              <h3 className="text-[#BD67F2] text-lg font-bold">
                                {item.month}
                              </h3>
                              {item.dateLogs.map((log, index) => {
                                return (
                                  <Disclosure key={index}>
                                    {({ open }) => (
                                      <div className="border border-b-[#535353] border-transparent pb-2">
                                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg bg-inherit py-2 text-left text-sm font-medium text-white">
                                          <div className="grid gap-1.5">
                                            <h2>{log.date}</h2>
                                            {open ? null : (
                                              <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                                <p>Location:</p>
                                                <span>Netherlands</span>
                                              </div>
                                            )}
                                          </div>
                                          <AiOutlineInfoCircle className="text-2xl text-white" />
                                        </Disclosure.Button>
                                        <Disclosure.Panel className="pt-4 pb-2 text-sm text-white">
                                          <div className="grid grid-cols-2 justify-between gap-4">
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                Date:
                                              </p>
                                              <span>August 28</span>
                                            </div>
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                IP:
                                              </p>
                                              <span>104.223.181.147</span>
                                            </div>
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                Location:
                                              </p>
                                              <span>Netherlands</span>
                                            </div>
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                Download speed:
                                              </p>
                                              <span>41 Mb/s</span>
                                            </div>
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                Duration:
                                              </p>
                                              <span>32 minutes</span>
                                            </div>
                                            <div className="flex gap-2 text-xs text-[#E2E4E2]">
                                              <p className="text-[#A7AEA8]">
                                                Upload speed:
                                              </p>
                                              <span>33 Mb/s</span>
                                            </div>
                                          </div>
                                        </Disclosure.Panel>
                                      </div>
                                    )}
                                  </Disclosure>
                                );
                              })}
                            </div>
                          );
                        })}
                      </div>
                    </div>
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

export default ConnectionLog;

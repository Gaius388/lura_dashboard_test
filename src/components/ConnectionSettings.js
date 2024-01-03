"use client";
import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import ToggleState from "./ToggleState";
import { CgArrowTopRight } from "react-icons/cg";
import Navbar from "./Navbar";

const ConnectionSettings = ({ connectSettings, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <main className="relative">
      <Transition.Root show={connectSettings} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ connectSettings: false })}
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
                  <section className="relative transform overflow-hidden  text-left shadow-xl transition-all w-full mx-auto sm:my-8 mt-10 sm:w-full ">
                    <div className="bg-[#1B192B] rounded-lg text-white flex flex-col">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <h3 className="text-2xl font-medium">
                          Connection Settings
                        </h3>
                      </div>
                      <div
                        className="mt-3 grid gap-5 px-4 pb-4 text-white font-medium list-none"
                        onSubmit={handleSubmit}
                      >
                        <div className="pt-4 grid grid-cols-[1.5fr,1fr] items-center justify-between border border-b-[#535353] border-transparent pb-3">
                          <div className="grid gap-1.5">
                            <h3 className="font-medium text-sm">
                              Malware Protection
                            </h3>
                            <p className="text-xs font-light">
                              Block potentially harmful sites known to house
                              viruses and malware.
                            </p>
                          </div>
                          <div className="justify-self-end">
                            <ToggleState />
                          </div>
                        </div>
                        <div className="pt-3 grid grid-cols-[1.5fr,1fr] items-center justify-between border border-b-[#535353] border-transparent pb-3">
                          <div className="grid gap-1.5">
                            <h3 className="font-medium text-sm">
                              Phishing Protection
                            </h3>
                            <p className="text-xs font-light">
                              Protect your data from cyber attacks sent via
                              email.
                            </p>
                          </div>
                          <div className="justify-self-end">
                            <ToggleState />
                          </div>
                        </div>
                        <div className="pt-3 grid grid-cols-[1.5fr,1fr] items-center justify-between border border-b-[#535353] border-transparent pb-3">
                          <div className="grid gap-1.5">
                            <h3 className="font-medium text-sm">
                              Data breach scanner
                            </h3>
                            <p className="text-xs font-light">
                              Automatically scan for leaked data and potential
                              threats.
                            </p>
                          </div>
                          <div className="justify-self-end">
                            <ToggleState />
                          </div>
                        </div>
                        <div className="pt-3 grid grid-cols-[1.5fr,1fr] items-start justify-between border border-b-[#535353] border-transparent pb-3">
                          <div className="grid gap-1.5">
                            <h3 className="font-medium text-sm">Kill Switch</h3>
                            <p className="text-xs font-light">
                              Enable ‘always on’ and block connections with VPN
                              automatically.
                            </p>
                          </div>
                          <div className="flex gap-1 items-center text-sm font-bold justify-self-end">
                            <CgArrowTopRight className="cursor-pointer text-xl" />
                            <p>Device Settings</p>
                          </div>
                        </div>
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

export default ConnectionSettings;

"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import Navbar from "./Navbar";

const VpnProtocol = ({ vpnProtocol, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <main className="relative">
      <Transition.Root show={vpnProtocol} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          // onClose={() => console.log(true)}
          onClose={() => setModal({ vpnProtocol: false })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-4/6 md:w-2/6 xl:w-[30rem]">
                  <Navbar setModal={setModal} modal={modal} />

                  <section className="relative transform overflow-hidden  text-left shadow-xl transition-all w-full mx-auto sm:my-8 mt-10 sm:w-full ">
                    <div className="bg-[#1B192B] rounded-lg text-white flex flex-col">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <h3 className="text-2xl font-medium">VPN Protocol</h3>
                      </div>
                      <form
                        className="mt-3 grid gap-5 px-6 pb-4 text-white font-medium list-none"
                        onSubmit={handleSubmit}
                      >
                        <fieldset>
                          <div className="mt-6 space-y-4">
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-everything"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>Auto</h3>
                                <p className="text-xs font-light">
                                  Rapid connection with ultra security.
                                </p>
                              </label>
                              <input
                                id="push-english"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-email"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>Open VPN UDP/TCP</h3>
                                <p className="text-xs font-light">
                                  Perfect for gaming and streaming.
                                </p>
                              </label>
                              <input
                                id="push-german"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>IKEv2</h3>
                                <p className="text-xs font-light">
                                  Safe and stable protocol
                                </p>
                              </label>
                              <input
                                id="push-french"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>L2TP/IPsec</h3>
                                <p className="text-xs font-light">
                                  Safely transfer your data
                                </p>
                              </label>
                              <input
                                id="push-japanese"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>PPTP</h3>
                                <p className="text-xs font-light">
                                  Create a virtual private network with
                                  point-to-point tunneling.
                                </p>
                              </label>
                              <input
                                id="push-spanish"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="grid grid-cols-[2fr,1fr] items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                <h3>WireGuard®</h3>
                                <p className="text-xs font-light">
                                  Connect quickly, save power and secure your
                                  data with advanced cryptography.
                                </p>
                              </label>
                              <input
                                id="push-italian"
                                name="push-notifications"
                                type="radio"
                                className="justify-self-end h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                          </div>
                        </fieldset>
                      </form>
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

export default VpnProtocol;

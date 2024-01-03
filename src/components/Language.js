"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import React from "react";
import Navbar from "./Navbar";

const Language = ({ language, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <main className="relative">
      <Transition.Root show={language} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ language: !modal.language })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-4/6 md:w-2/6 xl:w-[30rem] sm:w-4/6">
                  <Navbar setModal={setModal} modal={modal} />
                  <section className="relative transform overflow-hidden  text-left shadow-xl transition-all w-full  sm:my-8 mt-10 sm:w-full  mx-auto">
                    <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <h3 className="text-2xl font-medium">Language</h3>
                      </div>
                      <form
                        className="mt-3 grid gap-5 px-6 pb-4 text-white font-medium list-none"
                        onSubmit={handleSubmit}
                      >
                        <fieldset>
                          <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-everything"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                English
                              </label>
                              <input
                                id="push-english"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-email"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                German
                              </label>
                              <input
                                id="push-german"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                French
                              </label>
                              <input
                                id="push-french"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                Spanish
                              </label>
                              <input
                                id="push-spanish"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                Japanese
                              </label>
                              <input
                                id="push-japanese"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                Italian
                              </label>
                              <input
                                id="push-italian"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                Arabic
                              </label>
                              <input
                                id="push-arabic"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                              />
                            </div>
                            <div className="flex items-center justify-between gap-x-3 border border-b-[#535353] border-transparent pb-4">
                              <label
                                htmlFor="push-nothing"
                                className="block text-sm font-medium leading-6 text-white"
                              >
                                Russian
                              </label>
                              <input
                                id="push-russian"
                                name="push-notifications"
                                type="radio"
                                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
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

export default Language;

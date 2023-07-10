import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FiMail, FiBook } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import React from "react";

const AccountInfo = ({ account, setAccount }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <Transition.Root show={account} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-20"
        initialFocus={cancelButtonRef}
        onClose={setAccount}
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
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.31)] backdrop-blur transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 sm:my-8 sm:w-full sm:max-w-md">
                <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col">
                  <div className="h-28 px-4 border border-transparent border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                    <h3 className="text-2xl font-medium">
                      Account Information
                    </h3>
                  </div>
                  <form
                    className="mt-3 grid gap-4 px-4 pb-4 text-white font-medium"
                    onSubmit={handleSubmit}
                  >
                    <section className="grid sm:grid-cols-2 gap-4">
                      <div className="text-sm grid gap-2 relative">
                        <label className="text-xs">First Name</label>
                        <div className="mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)]">
                          <BiUser className="w-full m-auto" />
                          <input
                            className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full"
                            placeholder="Tsebi"
                          />
                        </div>
                      </div>
                      <div className="text-sm grid gap-2 relative">
                        <label className="text-xs">Last Name</label>
                        <div className="mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[#262833]">
                          <BiUser className="w-full m-auto" />
                          <input
                            className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full"
                            placeholder="Best"
                          />
                        </div>
                      </div>
                    </section>
                    <div className="text-sm grid gap-2 relative">
                      <label className="text-xs">Email Address</label>
                      <div className="mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)]">
                        <FiMail className="w-full m-auto" />
                        <input
                          className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full"
                          placeholder="Best"
                        />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs border border-transparent border-b-[#535353] pb-3">
                      <div className="flex gap-4 items-center">
                        <FiBook className="text-sm" />
                        <p>Subscription Plans</p>
                      </div>
                      <BsChevronRight className="text-sm" />
                    </div>
                    <div className="flex items-center justify-between mt-4 text-xs border border-transparent border-b-[#535353] pb-3">
                      <div className="flex gap-4 items-center">
                        <FiBook className="text-sm" />
                        <p>Card Details</p>
                      </div>
                      <BsChevronRight className="text-sm" />
                    </div>
                    <button className="bg-[rgba(83,83,83,1)] text-[16px] text-[#A7AEA8] py-2 my-3 rounded-2xl">
                      Update Details
                    </button>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default AccountInfo;

import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import ToggleState from "./ToggleState";
import { FiMail, FiBook } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Issues = ({ issues, setIssues }) => {
  const cancelButtonRef = useRef(null);
  const handleSubmit = () => {
    return console.log("lol");
  };
  return (
    <Transition.Root show={issues} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-30"
        initialFocus={cancelButtonRef}
        onClose={setIssues}
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-3xl bg-white text-left transition-all w-5/6 sm:my-8 sm:w-full sm:max-w-md">
                <div className="bg-[#1B192B] rounded-3xl text-white flex flex-col">
                  <div className="h-28 px-4 flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-3xl">
                    <h3 className="text-2xl font-medium">Report an Issue</h3>
                  </div>
                  <div
                    className="mt-3 grid gap-5 px-4 py-4 text-white font-medium list-none"
                    onSubmit={handleSubmit}
                  >
                    <div className="text-sm grid gap-2 relative">
                      <label className="text-xs">Email Address</label>
                      <div className="w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)]">
                        <FiMail className="w-full m-auto" />
                        <input
                          className="placeholder:text-white placeholder:pt-3 border-transparent rounded-lg text-xs pl-2 outline-none py-2.5 bg-inherit w-full"
                          placeholder="bestomotayo@gmail.com"
                        />
                      </div>
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label className="text-xs">Query Category</label>
                      <select className="bg-[#262833] rounded-lg py-2 pl-2 text-xs outline-none">
                        <option>Select</option>
                      </select>
                    </div>
                    <div className="text-sm grid gap-2 relative">
                      <label className="text-xs">Message</label>
                      <textarea
                        placeholder="Enter message"
                        className=" h-20 rounded-lg bg-[#262833] p-2"
                      ></textarea>
                    </div>
                    <button
                      className="text-white bg-[#5D18EB] rounded-lg text-sm py-2.5"
                      onClick={() =>
                        toast.success("Hello, Toastify!", {
                          className: "bg-red-500 text-white",
                        })
                      }
                    >
                      Send
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default Issues;

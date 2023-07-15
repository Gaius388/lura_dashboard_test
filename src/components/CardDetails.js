import React from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { BsArrowLeftShort, BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import cardLogo from "../../public/logos_mastercard.png";
import { BiCreditCardAlt } from "react-icons/bi";
import AddCard from "./AddCard";
import Navbar from "./Navbar";

const CardDetails = ({ cardDetails, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const [active, setActive] = useState(false);

  return (
    <main className="relative">
      <Transition.Root show={cardDetails} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ cardDetails: false })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-4/6 md:w-2/6 ">
                  <Navbar setModal={setModal} modal={modal} />

                  <section className="mt-10 relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all w-full sm:my-8 sm:w-full mx-auto">
                    <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col text-sm ">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <div
                          className=" font-medium flex items-center justify-center text-base gap-1 cursor-pointer"
                          onClick={() => {
                            setModal({ account: true, cardDetails: false });
                          }}
                        >
                          <BsArrowLeftShort className="text-xl" />
                          <p> Account Information</p>
                        </div>
                      </div>
                      <section>
                        <article className=" flex gap-2 flex-col p-5">
                          <div className="flex justify-between items-center ">
                            <div className="flex gap-1 justify-center items-center">
                              <Image src={cardLogo} alt="logo" />
                              <p>Mastercard</p>
                            </div>
                            <div className="relative">
                              <BsThreeDotsVertical
                                className=""
                                onClick={() => setActive(!active)}
                              />
                              {active && (
                                <p
                                  className="text-red-500 absolute
                              -bottom-10
                              right-5 bg-gray-800 rounded-md p-2 px-4 w-max cursor-pointer"
                                  onClick={() => setActive(!active)}
                                >
                                  delete card
                                </p>
                              )}
                            </div>
                          </div>
                          <p className="border-b border-gray-600 pb-5">
                            •••• •••• 2515 3234 | 01/24
                          </p>
                        </article>
                        <article className="flex justify-between items-center p-5">
                          <div className="flex gap-1 items-center justify-center">
                            <BiCreditCardAlt />
                            <p>•••• •34 | MM/YY</p>
                          </div>
                          <div
                            className="border-none outline-none cursor-pointer"
                            onClick={() => {
                              setModal({ addCard: true, cardDetails: false });
                            }}
                          >
                            Add Card
                          </div>
                        </article>
                        <h1 className="text-xl font-bold p-5">
                          Subscription History
                        </h1>
                        {[1, 2, 3].map((_, i) => {
                          return (
                            <div key={i} className="flex flex-col gap-2 p-5 ">
                              <div className="flex justify-between items-center ">
                                <p>11/03/2023</p>
                                <p>N10,000</p>
                              </div>
                              <p>Billing Period : 28/10/2022 -28/11/2022</p>
                              <div
                                className={`border-b border-gray-600 pb-5 ${
                                  i === [1, 2, 3].length - 1 && "border-b-0"
                                }`}
                              >
                                <p>•••• •••• •••• 3138</p>
                              </div>
                            </div>
                          );
                        })}
                      </section>
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

export default CardDetails;

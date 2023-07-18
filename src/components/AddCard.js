import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import React from "react";
import {
  BsArrowLeftShort,
  BsChevronRight,
  BsThreeDotsVertical,
} from "react-icons/bs";
import Image from "next/image";
import cardLogo from "../../public/logos_mastercard.png";
import { BiCreditCardAlt, BiLockAlt, BiUser } from "react-icons/bi";
import { FiBook, FiMail } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import Navbar from "./Navbar";
import { cardDetailsSchema } from "../../schema";
import { useFormik } from "formik";

const AddCard = ({ addCard, setModal, modal }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    cvv: "",
    exp: "",
    cardNumber: "",
  });

  const handleDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const cancelButtonRef = useRef(null);
  const onSubmit = async (values, actions) => {
    actions.resetForm();
    setData({
      firstName: "",
      lastName: "",
      cvv: "",
      exp: "",
      cardNumber: "",
    });
    setModal({ cardDetails: true, addCard: false });
  };
  const {
    values,
    handleBlur,
    isSubmitting,
    touched,
    handleChange,
    handleSubmit,
    errors,
  } = useFormik({
    initialValues: {
      cvv: data.cvv,
      cardNumber: data.cardNumber,
      exp: data.exp,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    validationSchema: cardDetailsSchema,
    onSubmit,
  });
  return (
    <main className="relative">
      <Transition.Root show={addCard} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ addCard: false })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-4/6 md:w-2/6 sm:w-3/6">
                  <Navbar setModal={setModal} modal={modal} />

                  <section className="mt-10 relative transform overflow-hidden rounded-lg  text-left shadow-xl transition-all  sm:my-8 sm:w-full w-full">
                    <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col text-sm ">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
                        <div
                          className=" font-medium flex items-center justify-center text-base gap-1 cursor-pointer"
                          onClick={() => {
                            setModal({ cardDetails: true, addCard: false });
                          }}
                        >
                          <BsArrowLeftShort className="text-xl" />
                          <p>Card Details</p>
                        </div>
                      </div>
                      <section>
                        <form
                          className="mt-3 grid gap-4 px-4 pb-4 text-white font-medium"
                          onSubmit={handleSubmit}
                        >
                          <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="text-sm grid gap-2 relative">
                              <label className="text-xs">First Name</label>
                              <div
                                className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] items-center gap-2 border border-[#A7AEA8]${
                                  touched.firstName &&
                                  "border border-purple-500"
                                } ${
                                  touched.firstName &&
                                  errors.firstName &&
                                  "border border-red-500"
                                }`}
                              >
                                <BiUser className="w-full m-auto" />
                                <input
                                  type="text"
                                  name="firstName"
                                  value={values.firstName}
                                  onBlur={handleBlur}
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleDataChange(e);
                                  }}
                                  className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full outline-none"
                                  placeholder="Tsebi"
                                />
                              </div>
                            </div>
                            <div className="text-sm grid gap-2 relative">
                              <label className="text-xs">Last Name</label>
                              <div
                                className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] items-center gap-2 border border-[#A7AEA8]${
                                  touched.lastName && "border border-purple-500"
                                } ${
                                  touched.lastName &&
                                  errors.lastName &&
                                  "border border-red-500"
                                }`}
                              >
                                <BiUser className="w-full m-auto" />
                                <input
                                  type="text"
                                  name="lastName"
                                  value={values.lastName}
                                  onBlur={handleBlur}
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleDataChange(e);
                                  }}
                                  className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit outline-none w-full"
                                  placeholder="Best"
                                />
                              </div>
                            </div>
                          </section>
                          <div className="text-sm grid gap-2 relative">
                            <label className="text-xs">Card Number</label>
                            <div
                              className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] items-center gap-2 border border-[#A7AEA8]${
                                touched.cardNumber && "border border-purple-500"
                              } ${
                                touched.cardNumber &&
                                errors.cardNumber &&
                                "border border-red-500"
                              }`}
                            >
                              {/* <FiMail className="w-full m-auto" /> */}
                              <Image
                                src={cardLogo}
                                alt="logo"
                                className="flex self-center"
                              />
                              <input
                                // type="text"
                                name="cardNumber"
                                value={values.cardNumber}
                                onBlur={handleBlur}
                                onChange={(e) => {
                                  handleChange(e);
                                  handleDataChange(e);
                                }}
                                className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full border-none  outline-none"
                                placeholder="5199 2200 3456 8271 3234"
                              />
                            </div>
                          </div>
                          <section className="grid md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="text-sm grid gap-2 relative">
                              <label className="text-xs">Expiration Date</label>
                              <div
                                className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] items-center gap-2 border border-[#A7AEA8]${
                                  touched.exp && "border border-purple-500"
                                } ${
                                  touched.exp &&
                                  errors.exp &&
                                  "border border-red-500"
                                }`}
                              >
                                <AiOutlineCalendar className="w-full m-auto" />
                                <input
                                  name="exp"
                                  value={values.exp}
                                  onBlur={handleBlur}
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleDataChange(e);
                                  }}
                                  className="placeholder:text-white outline-none border-transparent text-xs py-2.5 bg-inherit w-full"
                                  placeholder="1/24"
                                />
                              </div>
                            </div>
                            <div className="text-sm grid gap-2 relative">
                              <label className="text-xs">CVV</label>
                              <div
                                className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] items-center gap-2 border border-[#A7AEA8]${
                                  touched.cvv && "border border-purple-500"
                                } ${
                                  touched.cvv &&
                                  errors.cvv &&
                                  "border border-red-500"
                                }`}
                              >
                                <BiLockAlt className="w-full m-auto" />
                                <input
                                  name="cvv"
                                  value={values.cvv}
                                  onBlur={handleBlur}
                                  onChange={(e) => {
                                    handleChange(e);
                                    handleDataChange(e);
                                  }}
                                  className="placeholder:text-white border-transparent text-xs py-2.5 bg-inherit w-full outline-none"
                                  placeholder="•••"
                                />
                              </div>
                            </div>
                          </section>
                          <button
                            type="submit"
                            className="bg-[#5D18EB] text-[16px] rounded-md  p-4"
                          >
                            ADD CARD
                          </button>
                        </form>
                        <footer className="flex justify-center items-center pb-4">
                          <p className="text-center text-xs w-3/5">
                            By continuing, you agree to the{" "}
                            <span className="underline">
                              Terms and Conditions & Privacy and Policy
                            </span>{" "}
                            applicable to Lura VPN.
                          </p>
                        </footer>
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

export default AddCard;

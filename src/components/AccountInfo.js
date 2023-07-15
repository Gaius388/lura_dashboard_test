import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronRight } from "react-icons/bs";
import { FiMail, FiBook } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import React from "react";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Subscription from "./Subscription";
import CardDetails from "./CardDetails";
import { accInfoSchema } from "../../schema";
import { useFormik } from "formik";

const AccountInfo = ({ account, setModal, modal }) => {
  const [data, setData] = useState({ firstName: "", lastName: "", email: "" });

  const handleDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const router = useRouter();

  const cancelButtonRef = useRef(null);
  const onSubmit = async (values, actions) => {
    actions.resetForm();
    setData({ firstName: "", lastName: "", email: "" });
    setModal({ account: false });
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
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
    },
    validationSchema: accInfoSchema,
    onSubmit,
  });

  return (
    <main className="relative">
      <Transition.Root show={account} as={Fragment} className="w-max">
        <Dialog
          as="div"
          className="relative z-20"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ account: false })}
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
            <div
              className="fixed inset-0 bg-[rgba(0,0,0,0.51)] backdrop-blur blur-md z-30 transition-opacity w-full cursor-pointer"
              onClick={() => setModal({ account: false })}
            />
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
                  {/* <div className="fixed top-0 mx-auto inset-0  "> */}
                  <Navbar setModal={setModal} modal={modal} />
                  {/* </div> */}
                  {/* max-screen:static max-screen:w-auto */}
                  <section className="relative transform overflow-hidden   text-left shadow-xl transition-all w-full sm:my-8 sm:w-full mt-10 sm:max-w-md mx-auto">
                    <div className="bg-[#1B192B] rounded-lg capitalize text-white flex flex-col">
                      <div className="h-28 px-4  border-b-[#8094ae] flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-lg">
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
                            <div
                              className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)]${
                                touched.firstName && "border border-purple-500"
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
                                className="placeholder:text-white outline-none border-transparent text-xs py-2.5 bg-inherit w-full"
                                placeholder="Tsebi"
                              />
                            </div>
                          </div>
                          <div className="text-sm grid gap-2 relative">
                            <label className="text-xs">Last Name</label>
                            <div
                              className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[#262833] )]${
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
                                className="placeholder:text-white outline-none border-transparent text-xs py-2.5 bg-inherit w-full"
                                placeholder="Best"
                              />
                            </div>
                          </div>
                        </section>
                        <div className="text-sm grid gap-2 relative">
                          <label className="text-xs">Email Address</label>
                          <div
                            className={`mb-4 w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)] )]${
                              touched.email && "border border-purple-500"
                            } ${
                              touched.email &&
                              errors.email &&
                              "border border-red-500"
                            }`}
                          >
                            <FiMail className="w-full m-auto" />
                            <input
                              type="email"
                              name="email"
                              value={values.email}
                              onBlur={handleBlur}
                              onChange={(e) => {
                                handleChange(e);
                                handleDataChange(e);
                              }}
                              className="placeholder:text-white outline-none border-transparent text-xs py-2.5 bg-inherit w-full"
                              placeholder="Best"
                            />
                          </div>
                        </div>
                        <div
                          className="flex items-center justify-between text-xs border border-transparent border-b-[#535353] pb-3 cursor-pointer"
                          onClick={() => {
                            setModal({ account: false, subscription: true });
                          }}
                        >
                          <div className="flex gap-4 items-center">
                            <FiBook className="text-sm" />
                            <p>Subscription Plans</p>
                          </div>
                          <BsChevronRight className="text-sm" />
                        </div>
                        <div
                          className="flex items-center justify-between mt-4 text-xs border border-transparent border-b-[#535353] pb-3 cursor-pointer"
                          onClick={() => {
                            setModal({ account: false, cardDetails: true });
                          }}
                        >
                          <div className="flex gap-4 items-center">
                            <FiBook className="text-sm" />
                            <p>Card Details</p>
                          </div>
                          <BsChevronRight className="text-sm" />
                        </div>
                        <button
                          type="submit"
                          className="bg-[rgba(83,83,83,1)] text-[16px] text-[#A7AEA8] py-2 my-3 rounded-2xl"
                        >
                          Update Details
                        </button>
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

export default AccountInfo;

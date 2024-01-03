"use client";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import React from "react";
import ToggleState from "./ToggleState";
import { FiMail, FiBook } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { CgArrowTopRight } from "react-icons/cg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./Navbar";
import { useFormik } from "formik";
import { issuesSchema } from "../../schema";

const Issues = ({ issues, setModal, modal }) => {
  const cancelButtonRef = useRef(null);
  const [data, setData] = useState({ query: "", message: "", email: "" });

  const handleDataChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  const onSubmit = async (values, actions) => {
    toast.success(
      "Report sent successfully. You will receive a response shortly",
      {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );
    actions.resetForm();
    setData({ query: "", message: "", email: "" });
    setModal({ issues: false });
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
      query: data.query,
      message: data.message,
    },
    validationSchema: issuesSchema,
    onSubmit,
  });

  return (
    <main className="relative">
      <Transition.Root show={issues} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-30"
          initialFocus={cancelButtonRef}
          onClose={() => setModal({ issues: false })}
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
                <Dialog.Panel className="h-full min-h-screen relative w-5/6 md:w-2/6 xl:w-[32rem]">
                  <Navbar setModal={setModal} modal={modal} />

                  <section className="relative transform overflow-hidden   text-left transition-all w-full mx-auto sm:my-8 sm:w-full mt-10 ">
                    <div className="bg-[#1B192B] rounded-xl text-white flex flex-col">
                      <div className="h-28 px-4 flex justify-between items-center bg-backDrop bg-no-repeat bg-cover rounded-t-xl">
                        <h3 className="text-2xl font-medium">
                          Report an Issue
                        </h3>
                      </div>
                      <form
                        className="mt-3 grid gap-5 px-4 py-4 text-white font-medium list-none"
                        onSubmit={handleSubmit}
                      >
                        <div className="text-sm grid gap-2 relative ">
                          <label className="text-xs">Email Address</label>
                          <div
                            className={`w-full mx-auto rounded-md grid grid-cols-[10%,90%] border border-[rgba(38,40,51,1)]${
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
                              className="placeholder:text-white placeholder:pt-3 border-transparent rounded-lg text-xs pl-2 outline-none py-2.5 bg-inherit w-full"
                              placeholder="bestomotayo@gmail.com"
                            />
                          </div>
                        </div>
                        <div className="text-sm grid gap-2 relative">
                          <label className="text-xs">Query Category</label>
                          <select
                            name="query"
                            value={values.query}
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              handleDataChange(e);
                            }}
                            className={`bg-[#262833] rounded-lg py-2 pl-2 text-xs outline-none ${
                              touched.query && "border border-purple-500"
                            } ${
                              touched.query &&
                              errors.query &&
                              "border border-red-500"
                            }`}
                          >
                            <option>Select</option>
                            <option>Select</option>
                          </select>
                        </div>
                        <div className="text-sm grid gap-2 relative">
                          <label className="text-xs">Message</label>
                          <textarea
                            name="message"
                            value={values.message}
                            onBlur={handleBlur}
                            onChange={(e) => {
                              handleChange(e);
                              handleDataChange(e);
                            }}
                            placeholder="Enter message"
                            className={` h-20 rounded-lg bg-[#262833] p-2 ${
                              touched.message && "border border-purple-500"
                            } ${
                              touched.message &&
                              errors.message &&
                              "border border-red-500"
                            }`}
                          ></textarea>
                        </div>
                        <button
                          type="submit"
                          className="text-white bg-[#5D18EB] rounded-lg text-sm py-2.5"
                        >
                          Send
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

export default Issues;

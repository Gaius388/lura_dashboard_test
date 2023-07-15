import React, { useState, useContext, useReducer, useEffect } from "react";

const initialState = {
  accInfoForm: {
    firstName: "",
    lastName: "",
    email: "",
    subscription: "",
    card: "",
  },
  cardDetailForm: {
    firstName: "",
    lastName: "",
    cardNumber: "",
    expDate: "",
    cvv: "",
  },
  language: "",
};

const FormContext = React.createContext();

export const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  return useContext(FormContext);
};

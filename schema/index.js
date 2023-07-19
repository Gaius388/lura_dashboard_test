import * as yup from "yup";

export const accInfoSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("please enter a valid email").required("Required"),
});
export const cardDetailsSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  cardNumber: yup
    .number()
    .min(999999999999999)
    .max(9999999999999999)
    .required("required"),
  cvv: yup.number().min(99).max(999).required("required"),
  exp: yup.string().required("required"),
});
export const issuesSchema = yup.object().shape({
  message: yup.string().required("required"),
  query: yup.string().required("required"),
  email: yup.string().email("please enter a valid email").required("Required"),
});

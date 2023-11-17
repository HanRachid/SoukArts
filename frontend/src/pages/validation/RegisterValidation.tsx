import * as Yup from "yup";

export const RegisterSchema = Yup.object({
    username: Yup.string()
      .min(5, "Username must be at least 5 characters long")
      .matches(/^\S*$/, "Username cannot contain spaces")
      .required("Username is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address. Please enter a valid email address."
      )
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]+$/,
        "Password must contain at least one uppercase letter, one numeric character, and one symbol"
      )
      .required("Password is required"),
  });
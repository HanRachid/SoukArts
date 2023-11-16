import logo from "../assets/login/logo1.png";
import login_side_image from "../assets/login/login_image_side.png";
import logo_gogole from "../assets/login/google-svgrepo-com.svg";
import logo_apple from "../assets/login/apple-color-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { registerUser } from "../api/auth";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";


export default function Register() {
  const RegisterSchema = Yup.object({
    username: Yup.string()
      .matches(/^[a-zA-Z][a-zA-Z0-9_-]{3,15}$/, "Invalid username. It must start with a letter and only contain letters, numbers, hyphens, or underscores.")
      .required("This field is required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email address. Please enter a valid email address."
      )
      .email("Invalid email address")
      .required("This field is required"),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
        "Invalid password. It must contain at least one uppercase letter, one lowercase letter, one digit, and have a minimum length of 8 characters."
      )
      .required("This field is required"),
  });

  return (
    <section className="w-screen h-screen flex items-center justify-between overflow-hidden">
      <div className="w-1/2 h-full px-32">
        <div className="h-44 w-full flex-col flex items-center justify-center">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <h2 className="text-3xl mt-2 font-primary">Get started now!</h2>
        </div>
        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validationSchema={RegisterSchema}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            registerUser(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting, errors, touched }) => (
            <Form className="space-y-6 w-full">
              <div className="w-full flex items-start justify-center flex-col">
                <label className="pb-1.5 font-secondary">Username</label>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.username &&
                    touched.username
                      ? "border-red-500"
                      : ""
                  }`}
                  type="text"
                  placeholder="Enter your username"
                  name="username"
                />
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-full flex items-start justify-center flex-col">
                <label className="pb-1.5 font-secondary">Email address</label>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.email &&
                    touched.email
                      ? "border-red-500"
                      : ""
                  }`}
                  type="email"
                  placeholder="Enter your email"
                  name="email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="w-full flex items-start justify-center flex-col">
                <div className="flex justify-between items-center w-full">
                  <label className="pb-1.5 font-secondary">Password</label>
                </div>
                <Field
                  className={`w-full py-2 px-3 focus:outline-colorBlack border-2 rounded-bl-xl rounded-tr-xl bg-gray-50 ${
                    errors.password &&
                    touched.password
                      ? "border-red-500"
                      : ""
                  }`}
                  type="password"
                  placeholder="Enter your password"
                  name="password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="">
                <input
                  type="checkbox"
                  name="checkbox"

                
                />
                <label className="pl-4 font-secondary">
                  I agree to the{" "}
                  <span>
                    {" "}
                    <Link className="underline" to="/">
                      terms & policy
                    </Link>
                  </span>
                </label>
              </div>

              <div className="w-full flex items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-colorGold py-2.5 rounded-bl-xl rounded-tr-xl text-gray-50 font-semibold font-secondary hover:scale-[1.02] transition-all duration-30"
                >
                  Sign In
                </button>
              </div>

              <div className="flex items-center justify-center">
                <div className="w-full h-0.5 bg-gray-300"></div>

                <p className="px-4  ">Or</p>
                <div className="w-full h-0.5 bg-gray-300"></div>
              </div>
            </Form>
          )}
        </Formik>
        <div className="w-full pt-10">
          <div className="flex items-center gap-10 justify-center">
            <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100">
              <div className="flex items-center justify-evenly">
                <img className="w-7" src={logo_gogole} alt="logo_google" />
                <p className="font-secondary">Sign in with Google</p>
              </div>
            </button>
            <button className="w-full py-2  border-black border-2 rounded-bl-xl rounded-tr-xl font-medium text-lg bg-white/50 hover:scale-[1.02] transition-all duration-100">
              <div className="flex items-center justify-evenly">
                <img className="w-7" src={logo_apple} alt="logo_google" />
                <p className="font-secondary">Sign in with Apple</p>
              </div>
            </button>
          </div>
          <p className="text-center text-lg mt-6">
            Don’t have an account?{" "}
            <Link
              to="/login"
              className="text-[#0C2A92] hover:text-[#3553bd] scale-[1.02] transition-all duration-100 hover:bg-opacity-90"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 h-full rounded-l-3xl overflow-hidden">
        <img
          className="w-full h-full"
          src={login_side_image}
          alt="side_image"
        />
      </div>
    </section>
  );
}

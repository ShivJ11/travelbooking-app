import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"; // Import yupResolver
import * as yup from "yup";
import "./Register.css";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  phoneCode: yup.string().required("Phone code is required"),
  phone: yup
    .string()
    .matches(/^[0-9]+$/, "Phone must be numeric")
    .required("Phone is required"),
});

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema), // Use yupResolver
  });

  const onSubmit = (data) => {
    // Here, you can access the form data in the `data` object with validations applied
    console.log("Form Data:", data);
    // You can send the data to an API using axios or fetch here
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="reg-container">
          <h1>Register to ThomasCook</h1>

          <label htmlFor="username">
            <b>Username</b>
          </label>
          <input
            type="text"
            name="username"
            placeholder={
              errors.username ? "Please enter a username" : "Enter Username"
            }
            {...register("username")}
            className={errors.username ? "error" : ""}
          />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder={
              errors.email ? "Please enter a valid email" : "Enter Email"
            }
            name="email"
            {...register("email")}
            className={errors.email ? "error" : ""}
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder={
              errors.password
                ? "Please enter a valid password"
                : "Enter Password"
            }
            name="password"
            {...register("password")}
            className={errors.password ? "error" : ""}
          />

          <label htmlFor="phoneCode">
            <b>Phone Number</b>
          </label>
          <br />
          <select
            name="phoneCode"
            {...register("phoneCode")}
            className={errors.phoneCode ? "error" : ""}
          >
            <option value="">Code</option>
            <option value="+1">+1 (United States)</option>
            <option value="+44">+44 (United Kingdom)</option>
            <option value="+91">+91 (India)</option>
            <option value="+86">+86 (China)</option>
            <option value="+81">+81 (Japan)</option>
            {/* Add more valid phone codes as needed */}
          </select>

          <input
            type="text"
            name="phone"
            placeholder={
              errors.phone ? "Please enter a valid phone number" : "Enter Phone Number"
            }
            {...register("phone")}
            className={errors.phone ? "error" : ""}
          />

          <p>
            By creating an account you agree to our{" "}
            <a href="#" style={{ color: "dodgerblue" }}>
              Terms & Privacy
            </a>
            .
          </p>

          <div className="clearfix">
            <button type="submit" className="btn">
              Sign Up
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;

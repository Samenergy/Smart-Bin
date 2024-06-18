import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;

    try {
      const response = await axios.post(
        "https://smart-bin-backend-production.up.railway.app/api/login",
        {
          email,
          password,
        }
      );

      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", response.data.userType);

      const userType = response.data.userType;

      if (userType === "service") {
        navigate("/dashboard");
      } else if (userType === "household") {
        navigate("/home");
      } else if (userType === "admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.error("Error logging in:", error.response.data);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 bg-gray-50 p-4 md:p-8 rounded-l-3xl md:rounded-l-none md:rounded-l-3xl shadow-lg"
    >
      <a href="/">
        <p className="text-2xl md:text-3xl text-center font-bold">
          Smart <span className="font-light">Bin</span>{" "}
          <span className="text-[#37af65] text-5xl md:text-7xl -ml-1">.</span>{" "}
        </p>
      </a>
      <h1 className="text-2xl md:text-3xl my-4 md:my-6 text-center">
        Welcome Back
      </h1>
      <h2 className="text-lg md:text-xl font-light my-4 md:my-6 text-center">
        Login with email
      </h2>

      <label className="block mb-4">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="mt-1 block w-full md:w-3/4 rounded-md border-gray-300 shadow-sm py-2 px-2"
          placeholder="Email"
          required
        />
      </label>

      <label className="block mb-4">
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full md:w-3/4 rounded-md my-4 border-gray-300 shadow-sm py-2 px-2"
          placeholder="Password"
          required
        />
      </label>
      <a
        href="/"
        className="underline block mb-4 text-center hover:text-[#37af65]"
      >
        Forgot Password
      </a>

      <button
        type="submit"
        className="w-full md:w-3/4 bg-[#37af65] text-white py-2 rounded-lg hover:bg-[#59a173]"
      >
        Login
      </button>
      <div className="flex flex-col md:flex-row gap-2 mt-4 md:mt-5 md:ml-0 md:ml-16">
        <p className="text-center md:text-left">Don't have an account yet?</p>
        <a
          href="/signup"
          className="underline block mb-4 text-center md:text-left hover:text-[#37af65]"
        >
          Signup
        </a>
      </div>
    </form>
  );
};

export default LoginForm;

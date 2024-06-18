import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HouseholdUserSignup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    street: "",
    phonenumber: "",
    district: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/signup/household", formData);
      alert("Account registered successfully!");
      setFormData({
        username: "",
        email: "",
        password: "",
        street: "",
        phonenumber: "",
        district: "",
      });
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Failed to register household user");
    }
  };

  return (
    <div className="w-full lg:w-1/2 bg-[#fff] p-6 lg:p-8 rounded-t-3xl lg:rounded-r-3xl lg:rounded-l-none shadow-2xl flex flex-col items-center">
      <h2 className="text-3xl lg:text-5xl font-bold mb-6">Create account</h2>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex flex-col lg:flex-row gap-5 mb-4">
          <div className="w-full">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mb-4">
          <div className="w-full">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="street" className="block text-sm font-medium text-gray-700">
              House number
            </label>
            <input
              type="text"
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mb-4">
          <div className="w-full">
            <label htmlFor="phonenumber" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
          <div className="w-full">
            <label htmlFor="district" className="block text-sm font-medium text-gray-700">
              District
            </label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              required
              className="mt-1 w-full rounded-md bg-[#eee] shadow-sm pl-2 py-2"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full lg:w-3/4 bg-[#37af65] text-white py-2 rounded-lg hover:bg-[#3b684c] mb-5"
        >
          Sign Up
        </button>
        {/* <p>
          Sign up as a Company? <a href="/SignupCompany" className="text-blue-500">Signup</a>
        </p> */}
      </form>
    </div>
  );
};

export default HouseholdUserSignup;

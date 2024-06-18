import React from "react";
import { LuCalendarCheck2 } from "react-icons/lu";
import projectImage from "../../assets/project-3.jpg";
import projectImages from "../../assets/project-1.jpg";
import projectimg from "../../assets/service-2.jpg";
import { FaDumpster } from "react-icons/fa6";
import { MdRecycling } from "react-icons/md";

export default function Features() {
  return (
    <section className="text-gray-900 bg-[#f5fef9] body-font">
      <div className="container px-5 py-24 mx-auto">
        <h1 className="text-[#37af65] text-center text-2xl font-bold">
          We offer{" "}
        </h1>
        <h1 className="sm:text-3xl lg:text-5xl font-bold title-font text-center text-blue mb-20">
          A wide range of waste <br className="hidden lg:block" /> disposal services
        </h1>
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-10">
          <a href="" className="flex-1 max-w-sm mx-auto lg:mx-0">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="px-5">
                <img
                  src={projectImage}
                  alt="Waste Collection"
                  className="object-cover rounded-b-full w-full"
                />
              </div>
              <div className="p-6 relative">
                <LuCalendarCheck2 className="bg-[#f5fef9] absolute shadow-2xl text-[#37af65] text-7xl inset-x-0 mx-auto -mt-16 rounded-3xl p-2" />
                <div className="mt-16">
                  <h1 className="text-2xl font-bold mt-2 mb-2 text-center">
                    Waste Collection Schedule
                  </h1>
                  <p className="text-gray-700 text-center">
                    The Waste Collection Schedule feature allows household users
                    to schedule waste pickups conveniently and receive timely
                    notifications, ensuring consistent and efficient waste
                    management.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="flex-1 max-w-sm mx-auto lg:mx-0">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="px-5">
                <img
                  src={projectImages}
                  alt="Recycling Tracker"
                  className="object-cover rounded-b-full w-full"
                />
              </div>
              <div className="p-6 relative">
                <MdRecycling className="bg-[#f5fef9] absolute shadow-2xl text-[#37af65] text-7xl inset-x-0 mx-auto -mt-16 rounded-3xl p-2" />
                <div className="mt-16">
                  <h1 className="text-2xl font-bold mt-2 mb-2 text-center">
                    Recycling Tracker
                  </h1>
                  <p className="text-gray-700 text-center">
                    The Recycling Tracker helps users monitor their recycling
                    efforts and view their environmental impact, providing
                    insights into their habits and encouraging sustainable
                    practices.
                  </p>
                </div>
              </div>
            </div>
          </a>
          <a href="" className="flex-1 max-w-sm mx-auto lg:mx-0">
            <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
              <div className="px-5">
                <img
                  src={projectimg}
                  alt="Waste Collection Services Management"
                  className="object-cover rounded-b-full w-full"
                />
              </div>
              <div className="p-6 relative">
                <FaDumpster className="bg-[#f5fef9] absolute shadow-2xl text-[#37af65] text-7xl inset-x-0 mx-auto -mt-16 rounded-3xl p-2" />
                <div className="mt-16">
                  <h1 className="text-2xl font-bold mt-2 mb-2 text-center">
                    Waste Collection Services Management
                  </h1>
                  <p className="text-gray-700 text-center">
                    This enables service providers to manage routes, schedules,
                    and track performance, optimizing operations and improving
                    service quality.
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

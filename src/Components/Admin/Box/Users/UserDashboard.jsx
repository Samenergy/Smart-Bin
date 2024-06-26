import React, { useState, useEffect } from "react";
import axios from "axios";

const UserDashboard = () => {
  const [householdCount, setHouseholdCount] = useState(0);
  const [serviceCount, setServiceCount] = useState(0);
  const [error, setError] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userType = localStorage.getItem("userType");

    if (!token || !userType) {
      setError("User not authenticated. Please log in.");
      return;
    }

    const fetchUsers = async () => {
      try {
        const response = await axios.get(
          "https://smart-bin-backend-production.up.railway.app/api/admin/users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const { householdUsers, services } = response.data;

        setHouseholdCount(householdUsers.length);
        setServiceCount(services.length);

        if (userType === "admin") {
          setIsAdmin(true);
        }
      } catch (err) {
        if (err.response && err.response.status === 401) {
          setError("Unauthorized. Please log in.");
        } else {
          setError("An error occurred while fetching users.");
        }
      }
    };

    fetchUsers();
  }, []);

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

  return (
    <div className="p-6">
      <div className=" flex gap-5 bg-white  rounded-lg ">
        <p className="text-lg mb-4">
          Number of Users:{" "}
          <span className="font-semibold">{householdCount}</span>
        </p>
        <p className="text-lg mb-4">
          Number of Companies :{" "}
          <span className="font-semibold">{serviceCount}</span>
        </p>
      </div>
    </div>
  );
};

export default UserDashboard;

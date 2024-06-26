import React, { useEffect, useState } from "react";
import axios from "axios";

const ServiceAreas = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          throw new Error("User not authenticated");
        }

        const response = await axios.get(
          `https://smart-bin-backend-production.up.railway.app/api/service/areas`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user profile:", error);
        setError("Error fetching user profile. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>No District available</div>;
  }

  return (
    <div className=" bg-[#fff] p-8  mt-6">
      <p className="text-3xl font-bold ">Service Location: {user.district}</p>
    </div>
  );
};

export default ServiceAreas;

import React from "react";

const people = [
  {
    name: "Samuel Dushime",
    role: "Back-end Developer",
    imageUrl: "",
  },
  {
    name: "Serge Kamanzi",
    role: "Database Developer",
    imageUrl: "",
  },
  {
    name: "Betty Mukankunsi",
    role: "Front-end Developer",
    imageUrl: "",
  },
  {
    name: "Jules Gatete",
    role: "Deployment and DevOps Engineer",
    imageUrl: "",
  },
  {
    name: "Diane Ingabire",
    role: "Quality Assurance",
    imageUrl: "",
  },
];

const Team = () => {
  return (
    <div className="bg-white py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Meet our Team
        </h2>
        <p className="mt-6 text-lg leading-8 text-gray-600 text-center">
          Together, our diverse and skilled team is dedicated to delivering a
          high-quality and user-friendly smart waste management solution.
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {people.map((person) => (
            <li
              key={person.name}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <img
                    className="h-16 w-16 rounded-full"
                    src={person.imageUrl}
                    alt={person.name}
                  />
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {person.name}
                    </h3>
                    <p className="text-sm leading-5 text-[#37af65]">
                      {person.role}
                    </p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Team;

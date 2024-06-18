import React from "react";
import projectImage from "../../assets/chooseus-1.png";

const features = [
  {
    name: "Reliable Service",
    description:
      "We guarantee prompt waste collection and recycling services to keep your environment clean and organized.",
  },
  {
    name: "Environmentally Friendly",
    description:
      "Our eco-friendly practices prioritize waste reduction and sustainability, ensuring a greener future for generations to come.",
  },
  {
    name: "Customer Satisfaction",
    description:
      "We prioritize your needs and ensure quick responses to inquiries, aiming for your complete satisfaction with our service.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#fff] py-12 px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center lg:gap-10">
      <div className="flex-shrink-0 mb-10 lg:mb-0 lg:w-1/2">
        <img src={projectImage} alt="Why Choose Us" className="w-full h-auto" />
      </div>
      <div className="flex-grow text-center lg:text-left lg:w-1/2">
        <h1 className="text-[#37af65] text-2xl font-bold">Why choose us</h1>
        <h1 className="sm:text-3xl lg:text-5xl font-bold title-font text-blue mb-10 lg:mb-20">
          Why choose Smart <span className="font-normal">Bin</span>{" "}
          <span className="text-[#37af65] text-5xl -ml-2">.</span>
        </h1>
        <div className="max-w-2xl mx-auto lg:mx-0 mt-10 lg:mt-20">
          <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-x-8 lg:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-10 lg:pl-16">
                <dt className="text-2xl font-bold leading-7 text-gray-900">
                  <div className="absolute left-0 top-2 flex h-5 w-5 items-center justify-center rounded-lg bg-[#37af65]"></div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-lg leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

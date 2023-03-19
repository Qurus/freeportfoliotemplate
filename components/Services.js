import React from "react"
import {
  FaDollyFlatbed,
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
} from "react-icons/fa"

const Services = () => {
  const servicesData = [
    {
      title: "Web Design",
      icon: <FaPaintBrush className="w-8 h-8 mx-auto mb-8 text-green-500" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Web Development",
      icon: <FaLaptopCode className="w-8 h-8 mx-auto mb-8 text-green-500" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      title: "Mobile Apps",
      icon: <FaMobileAlt className="w-8 h-8 mx-auto mb-8 text-green-500" />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ]


  return (
    <section id="services">
      <div className="leading-normal font-light">
        <div className="border rounded-full inline-flex items-center px-3 py-1">
          <FaDollyFlatbed className="mr-3" /> Services
        </div>
        <h2 className="text-5xl text-center my-10">
          My <span className="text-green-500">Specializations</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-5">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="p-6 border rounded-xl hover:border-green-500"
            >
              <div className="flex justify-between">
                <h3 className="text-xl font-normal mb-4">{service.title}</h3>
                {service.icon}
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

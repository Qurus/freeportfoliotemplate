import React from "react"
import { FaFilePdf } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeInOut = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
}

const Resume = () => {
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
})
  const timelineData = [
    {
      date: "2020 - Present",
      title: "Front-end Developer",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt mi vitae velit imperdiet condimentum.",
    },
    {
      date: "2018 - 2020",
      title: "Web Designer",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt mi vitae velit imperdiet condimentum.",
    },
    {
      date: "2016 - 2018",
      title: "Graphic Designer",
      company: "Company Name",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt mi vitae velit imperdiet condimentum.",
    },
  ]

  return (
    <section id="resume">
      <motion.div
        ref={ref}
        variants={fadeInOut}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="leading-normal font-light">
          <div className="border rounded-full inline-flex items-center px-3 py-1">
            <FaFilePdf className="mr-3" /> Resume
          </div>
          <h2 className="text-5xl text-center">
            Education & <span className="text-green-500">Experience</span>
          </h2>
          <div className="relative">
            <div className="border-l-2 border-green-500 h-full absolute left-8"></div>
            {timelineData.map((item, index) => (
              <div key={index} className={`relative mt-8 sm:mt-16`}>
                <div className="border rounded-xl p-6 ml-20">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-500 mb-4">{item.company}</p>
                  <p>{item.description}</p>
                </div>
                <div className="text-center w-16 h-16 rounded-full bg-green-500 absolute top-0 left-0 -mt-4 flex items-center justify-center">
                  <span className="text-white text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Resume

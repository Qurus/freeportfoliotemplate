import React, { useState } from "react"
import { FaCubes } from "react-icons/fa"


const Portfolio = () => {
  const portfolioData = [
    {
      title: "Project 1",
      image:
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
      technologies: ["React", "Tailwind CSS"],
    },
    {
      title: "Project 2",
      image:
        "https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
      technologies: ["Next.js", "TypeScript"],
    },
    {
      title: "Project 3",
      image:
        "https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
      technologies: ["Node.js", "Express", "MongoDB"],
    },
    {
      title: "Project 4",
      image:
        "https://images.unsplash.com/photo-1579547079119-eff4751efb7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTl8fHdlYiUyMGRlc2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
      technologies: ["Python", "Django", "PostgreSQL"],
    },
  ]

  const [selectedImage, setSelectedImage] = useState(null)

  const handleClick = (image) => {
    setSelectedImage(image)
    document.getElementById("modal-toggle").click()
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.getElementById("modal-toggle").click()
  }


  return (
    <section id="portfolio">
      <div className="leading-normal font-light">
        <div className="border rounded-full inline-flex items-center px-3 py-1 ">
          <FaCubes className="mr-3" /> Portfolio
        </div>
        <h2 className="text-5xl text-center mb-10">
          Featured <span className="text-green-500">Projects</span>
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {portfolioData.map((project, index) => {
            const isFullWidth = index === 0 || index >= 3
            const gridColumn = isFullWidth
              ? "col-span-1 lg:col-span-2"
              : "col-span-1"
            const hoverEffect =
              "hover:opacity-80 transition-opacity duration-300"
            return (
              <div
                key={index}
                className={`shadow-lg rounded-xl overflow-hidden ${gridColumn}`}
              >
                <div
                  className={`relative w-full h-48 overflow-hidden cursor-pointer ${hoverEffect}`}
                  onClick={() => handleClick(project.image)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-white py-1 px-2 text-xs font-semibold text-gray-800 rounded mr-2 mb-2"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      <input type="checkbox" id="modal-toggle" className="modal-toggle" />
      <label htmlFor="modal-toggle" className="modal cursor-pointer">
        <div className="modal-box relative w-auto h-auto max-w-screen-xl max-h-screen-80 m-auto">
          {selectedImage && (
            <div className="modal-img-container">
              <img
                src={selectedImage}
                alt="Selected Project"
                className="w-auto h-auto max-w-full max-h-screen-75 object-scale-down"
              />
            </div>
          )}
        </div>
      </label>
    </section>
  )
}

export default Portfolio

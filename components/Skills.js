import React from "react"
import { FaBiking } from "react-icons/fa"
const Skills = () => {
  const skills = [
    { title: "HTML5", percentage: 90 },
    { title: "CSS3", percentage: 80 },
    { title: "JavaScript", percentage: 85 },
    { title: "React", percentage: 80 },
    { title: "Next.js", percentage: 75 },
    { title: "Python", percentage: 80 },
  ]

  return (
    <section id="skills">
      <div className="leading-normal font-light">
        <div className="border rounded-full inline-flex items-center px-3 py-1 mb-10">
          <FaBiking className="mr-3" /> My Skills
        </div>
        <h2 className="text-5xl text-center mb-10">
          My <span className="text-green-500">Advantages</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="border p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
              <div className="h-2 bg-gray-200 rounded">
                <div
                  className="h-2 bg-green-500 rounded"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

import React from "react"
import { FaBiking } from "react-icons/fa"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"

const ProgressBar = ({ skill }) => {
  const { ref, inView } = useInView()
  const controls = useAnimation()

  const width = `${skill.percentage}%`

  if (inView) {
    controls.start({
      width,
      transition: { duration: 1 },
    })
  }

  return (
    <div className="border p-6 rounded-xl" ref={ref}>
      <h3 className="text-xl font-bold mb-4">{skill.title}</h3>
      <div className="h-2 bg-gray-200 rounded">
        <motion.div
          className="h-2 bg-gradient-to-r from-green-800 to-green-500 rounded"
          initial={{ width: "0%" }}
          animate={controls}
        ></motion.div>
      </div>
    </div>
  )
}

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
            <ProgressBar key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

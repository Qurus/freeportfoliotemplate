import { FaHome } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeInOut = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
}
const fadeInOutTwo = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeInOut" },
  },
}
export default function Introduce() {
const [ref, inView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
})

    return (
      <section id="introduce">
        <div className="border rounded-full inline-flex items-center px-3 py-1 mt-10">
          <FaHome className="mr-3" /> Introduce
        </div>
        <div className="card max-w-3xl mx-auto bg-base-100 mt-10">
          <div className="text-center text-7xl leading-normal font-light">
            <div>
              Say Hi from <span className="text-green-500">Ali</span>, <br />
              Web Designer and Developer
            </div>
          </div>
          <p className="text-base text-center">
            I have a passion for designing and coding elegant and
            straightforward creations, and I take pride in my work. It's just
            that simple!
          </p>
        </div>
        <div>
          <div className="flex space-x-14 my-10">
            <motion.div
              ref={ref}
              variants={fadeInOut}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div>
                <h1 className="text-6xl mb-2 text-green-500 font-light text-center">
                  20+
                </h1>
                <p>Years of Experience</p>
              </div>
            </motion.div>
            <motion.div
              ref={ref}
              variants={fadeInOutTwo}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <div>
                <h1 className="text-6xl mb-2 text-green-500 font-light text-center">
                  100+
                </h1>
                <p>Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    )
}

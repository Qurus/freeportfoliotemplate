import { FaChild } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const fadeInOut = {
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
    <section id="about">
      <motion.div
        ref={ref}
        variants={fadeInOut}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        <div className="border rounded-full inline-flex items-center px-3 py-1 mt-10">
          <FaChild className="mr-3" /> About
        </div>
        <div className="card max-w-7xl mx-auto bg-base-100 mt-10">
          <div className="text-4xl font-normal">
            <div>
              Behind every exceptional design <br /> lies an even
              <span className="text-green-500"> better story.</span>
            </div>
          </div>
          <p className="text-base mt-4">
            Having started my journey as a freelance designer almost 8 years
            ago, I've been fortunate to work remotely with several agencies,
            consult for startups, and collaborate with skilled individuals to
            develop digital products for both businesses and consumers. I
            possess a quiet confidence, a natural curiosity, and am continuously
            enhancing my abilities by tackling design challenges one at a time.
          </p>
        </div>
      </motion.div>
    </section>
  )
}

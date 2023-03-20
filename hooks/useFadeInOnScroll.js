// hooks/useFadeInOnScroll.js
import { useRef, useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

const useFadeInOnScroll = (staggerDelay = 0) => {
  const [motionProps, setMotionProps] = useState(null)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    const fadeInOut = {
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: staggerDelay,
          duration: 2,
        },
      },
      exit: { opacity: 0, y: -30 },
    }

    setMotionProps({
      initial: "hidden",
      variants: fadeInOut,
      animate: inView ? "visible" : "hidden",
      exit: "exit",
    })
  }, [inView, staggerDelay])

  return { ref, motionProps }
}

export default useFadeInOnScroll

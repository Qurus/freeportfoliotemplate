import React from "react"
import { motion } from "framer-motion"

const withMotionProps = (Component) => {
  return ({ motionProps, ...props }) => {
    return (
      <motion.div {...motionProps}>
        <Component {...props} />
      </motion.div>
    )
  }
}

export default withMotionProps

import React from "react"
import Skeleton from "react-loading-skeleton"

const Loader = () => {
  return (
    <div style={{ padding: "1rem" }}>
      <Skeleton height={30} width={200} />
      <Skeleton height={30} count={5} />
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="w-4 h-4 bg-green-500 rounded-full animate-bounce"></div>
      </div>
    </div>
  )
}

export default Loader

import React, { useState, useEffect } from "react"
import Loader from "./Loader"

const withLoader = (WrappedComponent) => {
  return (props) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false)
      }, 2000)
    }, [])

    return <>{isLoading ? <Loader /> : <WrappedComponent {...props} />}</>
  }
}

export default withLoader

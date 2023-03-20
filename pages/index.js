import Head from "next/head"
import {
  NavBar,
  Profile,
  Indroduce,
  About,
  Resume,
  Services,
  Skills,
  Portfolio,
  Testimonials,
  ContactForm,
} from "../components"
import useFadeInOnScroll from "../hooks/useFadeInOnScroll"
import withMotionProps from "../components/withMotionProps"
import withLoader from "../components/withLoader"

const Home = () => {
  const componentArray = [
    NavBar,
    Profile,
    Indroduce,
    About,
    Resume,
    Services,
    Skills,
    Portfolio,
    Testimonials,
    ContactForm,
  ]

  return (
    <div>
      <Head>
        <title>My Portfolio</title>
      </Head>
      <div id="home" className="container md:mx-auto p-2 space-y-20 pt-16">
        {componentArray.map((Component, index) => {
          const { ref, motionProps } = useFadeInOnScroll(index * 0.5)
          const MotionComponent = withMotionProps(Component)
          return (
            <div key={index} ref={ref}>
              <MotionComponent {...motionProps} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default withLoader(Home)

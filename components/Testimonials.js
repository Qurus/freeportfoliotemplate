import React, { useState } from "react"
import { FaArrowLeft, FaArrowRight, FaPoll } from "react-icons/fa"
import "./Testimonials.module.css"

const Testimonials = () => {
  const testimonialData = [
    {
      id: 1,
      name: "John Doe",
      image: "https://via.placeholder.com/100",
      quote:
        "This is an example of a testimonial. This is an example of a testimonial.",
    },
    {
      id: 2,
      name: "Jane Smith",
      image: "https://via.placeholder.com/100",
      quote:
        "This is another example of a testimonial. This is another example of a testimonial.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      image: "https://via.placeholder.com/100",
      quote:
        "This is a third example of a testimonial. This is a third example of a testimonial.",
    },
    {
      id: 4,
      name: "Bob Smith",
      image: "https://via.placeholder.com/100",
      quote:
        "This is a fourth example of a testimonial. This is a fourth example of a testimonial.",
    },
  ]

  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  const handlePrev = () => {
    if (selectedTestimonial === 0) {
      setSelectedTestimonial(testimonialData.length - 1)
    } else {
      setSelectedTestimonial(selectedTestimonial - 1)
    }
  }

  const handleNext = () => {
    if (selectedTestimonial === testimonialData.length - 1) {
      setSelectedTestimonial(0)
    } else {
      setSelectedTestimonial(selectedTestimonial + 1)
    }
  }

  return (
    <section id="testimonials">
      <div
        className="border rounded-full inline-flex items-center px-3 py-1 mt-10"
        id="introduce"
      >
        <FaPoll className="mr-3" /> Testimonials
      </div>
      <div className="max-w-6xl mx-auto relative leading-normal font-light">
        <h2 className="text-5xl text-center my-10">
          Trusted by
          <span className="text-green-500"> Hundered Clients</span>
        </h2>
        <div className="relative">
          <div className="border p-6 rounded-xl overflow-hidden">
            <div className="testimonial-container">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonialData[selectedTestimonial].image}
                    alt={testimonialData[selectedTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-base">
                    {testimonialData[selectedTestimonial].name}
                  </h3>
                </div>
              </div>
              <p className="text-xl">
                {testimonialData[selectedTestimonial].quote}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-left ml-4 mt-3">
        <button
          className="rounded-full border border-green-500 p-4 mr-5"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>
        <button
          className="rounded-full border border-green-500 p-4"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>
    </section>
  )
}

export default Testimonials

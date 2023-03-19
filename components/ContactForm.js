import { useState } from "react"
import axios from "axios"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { FaComments } from "react-icons/fa"


const ContactForm = () => {
    const [messageSent, setMessageSent] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    const handleSubmit = async (e) => {
      e.preventDefault()

      // Gather form data
      const formData = {
        name: e.target.fullname.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        subject: e.target.subject.value,
        budget: e.target.budget.value,
        message: e.target.message.value,
      }

      // Perform validation checks
      if (!formData.name) {
        toast.error("Please fill in your full name.")
        return
      }

      if (!formData.email) {
        toast.error("Please fill in your email.")
        return
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Please enter a valid email address.")
        return
      }

      if (!formData.subject) {
        toast.error("Please select a subject.")
        return
      }

      if (!formData.message) {
        toast.error("Please fill in your message.")
        return
      }

      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        toast.error("Please enter a valid email address.")
        return
      }

      try {
        await axios.post("/api/send-email", formData)
        setMessageSent(true)
        toast.success("Email sent successfully!")
      } catch (error) {
        console.error(error)
        setErrorMessage("An error occurred. Please try again later.")
        toast.error("An error occurred. Please try again later.")
      }
    }
  return (
    <section id="contact" className="bg-base-100 py-12">
      <div
        className="border rounded-full inline-flex items-center px-3 py-1 mt-10"
        id="introduce"
      >
        <FaComments className="mr-3" /> Contact
      </div>
      <div>
        <div className="text-center text-7xl leading-normal font-light">
          <div>
            Let's Work<span className="text-green-500"> Together!</span>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="fullname" className="mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1">
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-1">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
              >
                <option value="">Choose a subject</option>
                <option value="">Subject 1</option>
                <option value="">Subject 2</option>
                {/* Add more options here as needed */}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="budget" className="mb-1">
              Your Budget (optional)
            </label>
            <input
              type="text"
              id="budget"
              name="budget"
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
          >
            Send Message
          </button>
        </form>
      </div>
      <ToastContainer />
    </section>
  )
}

export default ContactForm

import { FaTwitter, FaDribbble, FaGithub, FaInstagram } from "react-icons/fa"

export default function Profile() {
  return (

      <section className="card max-w-7xl mx-auto bg-base-100 border">
        <div className="flex justify-between px-8 py-3">
          <div className="text-3xl">AliDevWizard</div>
          <div>Developer</div>
        </div>
        <div className="flex items-center justify-center py-5">
          <figure className="h-56 w-56 rounded-xl ">
            <img src="./dev.png" alt="Shoes" />
          </figure>
        </div>

        <div className="card-body text-center">
          <h2 className="text-3xl">hello@me.com</h2>
          <p className="text-xl">Based in SomeWhere in the World.</p>
          <small>All rights reserved me 2023</small>
          <div className="flex justify-center space-x-4">
            <a href="https://twitter.com/elonmusk" target="_blank">
              <FaTwitter className="text-3xl hover:text-blue-400 text-gray-600" />
            </a>
            <a href="https://dribbble.com/elonmusk" target="_blank">
              <FaDribbble className="text-3xl hover:text-pink-400 text-gray-600" />
            </a>
            <a href="https://github.com/elonmusk" target="_blank">
              <FaGithub className="text-3xl hover:text-gray-700 text-gray-600" />
            </a>
            <a href="https://instagram.com/elonmusk" target="_blank">
              <FaInstagram className="text-3xl hover:text-orange-900 text-gray-600" />
            </a>
          </div>
          <div className="card-actions justify-center mt-5">
            <button className="btn btn-primary w-full text-xl font-normal">
              Hire Me!
            </button>
          </div>
        </div>
      </section>

  )
}

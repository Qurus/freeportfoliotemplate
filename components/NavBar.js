import { useState } from "react";
import ThemeSwitcher from "./changeTheme";
import Hamburger from "../svg/Hamburger";
import ArrowRight from "../svg/ArrowRight"

export default function NavBar() {

  const handleScrollTo = (id) => {
    const yOffset = -130
    const element = document.getElementById(id)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset

    setTimeout(() => {
      window.scrollTo({ top: y, behavior: "smooth" })
    }, 100)
  }
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => setIsOpen((prev) => !prev)

  const closeDrawer = () => setIsOpen(false)

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle"
              onClick={toggleDrawer}
            >
              <Hamburger />
            </label>
          </div>
        </div>
        <div className="navbar-center">
          <a
            href="/"
            className="btn btn-ghost normal-case text-3xl text-green-400 font-light"
          >
            Ali Web Wizard
          </a>
        </div>
        <div className="navbar-end">
          <div className="hidden md:flex items-center justify-between">
            <p className="mr-2">Theme</p> <ArrowRight />
          </div>
          <ThemeSwitcher />
        </div>
      </div>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={toggleDrawer}
      />
      <div className={`drawer ${isOpen ? "active" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-title">Menu</div>
          <button className="btn btn-ghost drawer-close" onClick={toggleDrawer}>
            <svg viewBox="0 0 24 24" className="w-6 h-6">
              <path
                fill="currentColor"
                d="M19.78 4.22a.996.996 0 0 0-1.41 0L12 10.59 6.63 5.22a.996.996 0 1 0-1.41 1.41L10.59 12 5.22 17.37a.996.996 0 1 0 1.41 1.41L12 13.41l5.37 5.37a.996.996 0 1 0 1.41-1.41L13.41 12l5.37-5.37a.996.996 0 0 0 0-1.41z"
              />
            </svg>
          </button>
        </div>
        <div className="drawer-body">
          <ul className="menu">
            <li>
              <button
                onClick={() => {
                  handleScrollTo("home")
                  closeDrawer()
                }}
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("about")
                  closeDrawer()
                }}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("resume")
                  closeDrawer()
                }}
              >
                Resume
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("services")
                  closeDrawer()
                }}
              >
                Services
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("portfolio")
                  closeDrawer()
                }}
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("testimonials")
                  closeDrawer()
                }}
              >
                Testimonials
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  handleScrollTo("contact")
                  closeDrawer()
                }}
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9998;
          padding: 0 15px 0 15px;
        }
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.5);
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
          z-index: 9998;
        }
        .overlay.active {
          opacity: 1;
          visibility: visible;
        }
        .drawer {
            position: fixed;
            top: 0;
            left: 0;
            width: 320px;
            height: 100%;
            transform: translateX(-100%);
            background-color: #2c2f34;
            color: #fff;
            z-index: 9999;
            transition: transform 0.3s ease-in-out;
        }
        .drawer.active {
            transform: translateX(0%);
        }
        .drawer-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem 1rem;
            height: 5rem;
        }
        .drawer-title {
            font-size: 1rem;
            font-weight: 500;
        }
        .drawer-body {
            padding: 1rem;
        }
        .menu {
            list-style: none;
            padding: 0;
            margin: 0;
            font-size: 1.5rem;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .menu li {
          margin-bottom: 1rem;
        }
        .menu li a {
          display: block;
          padding: 0.5rem;
          border-radius: 0.25rem;
          transition: background-color 0.3s ease-in-out;
        }
        .menu li a:hover {
          color #1fb2a5;
        }
        .drawer-close {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .drawer-close:hover svg path {
          fill: #ccc;
        }
        .drawer-close svg {
          width: 1.5rem;
          height: 1.5rem;
          fill: #fff;
        }
      `}</style>
    </div>
  )
}

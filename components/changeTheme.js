import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"

export default function ChangeTheme() {
  const { theme, setTheme } = useTheme()
  const themes = [
    "light",
    "dark",
    "cupcake",
    "retro",
    "dracula",
    "coffee",
  ]

  const themeColors = {
    light: "#f9f9f9",
    dark: "#2a303c",
    cupcake: "#65c3c8",
    retro: "#ef9995",
    dracula: "#ff79c6",
    coffee: "#db924b",
  }

  const [isOpen, setIsOpen] = useState(false)

  const handleChange = (selectedTheme) => {
    setTheme(selectedTheme)
    setIsOpen(false)
  }

  return (
    <div className="p-8 relative inline-block z-50">
      <button onClick={() => setIsOpen(!isOpen)} className="btn btn-primary">
        {theme}
      </button>
      {isOpen && (
        <div className="absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {themes.map((themeOption, index) => (
              <div
                key={index}
                onClick={() => handleChange(themeOption)}
                className={`cursor-pointer capitalize px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900 ${
                  theme === themeOption ? "bg-gray-100" : ""
                }`}
                role="menuitem"
              >
                <div className="flex justify-between items-center">
                  <span>{themeOption}</span>
                  <button
                    className="rounded w-6 h-6 ml-2"
                    style={{
                      backgroundColor: themeColors[themeOption],
                      borderColor: theme === themeOption ? "black" : "",
                      borderWidth: theme === themeOption ? "1px" : "",
                    }}
                  ></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

import "../styles/global.css"
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from "react-toastify"
import { ThemeProvider } from "../contexts/ThemeContext"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ToastContainer pauseOnFocusLoss={false} pauseOnHover={false} />
    </ThemeProvider>
  )
}

export default MyApp

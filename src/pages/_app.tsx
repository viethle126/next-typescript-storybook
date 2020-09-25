import "sanitize.css"
import "../assets/fonts/stylesheet.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import Theme from "../styles/Theme"

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

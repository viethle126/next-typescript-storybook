import React from "react"
import styled from "styled-components"
import Header from "../Header"
import Footer from "../Footer"

const Container = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

export default Layout

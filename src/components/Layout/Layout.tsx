import { FC, ReactNode } from 'react'
import Footer from '../Footer/Footer'
import MainContainer from '../MainContainer/MainContainer'
import NavBar from '../NavBar/NavBar'

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <NavBar />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}

export default Layout

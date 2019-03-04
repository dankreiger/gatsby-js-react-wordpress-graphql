import React, { FunctionComponent } from "react"
import MainMenu from "../MainMenu/MainMenu"
import { GlobalStyles, LayoutWrapper } from "./Layout.styles";
import Footer from "../Footer/Footer";



const Layout: FunctionComponent<{}> = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </div>
)

export default Layout

import React, { FunctionComponent } from "react"
import MainMenu from "./MainMenu"
import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou');

  body {
    font-family: 'ZCOOL QingKe HuangYou', Helvetica, Arial, Verdana, sans-serif;
    background: black;
    color: white;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
`
const LayoutWrapper = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const Layout: FunctionComponent<{}> = ({ children }) => (
  <div>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
  </div>
)

export default Layout

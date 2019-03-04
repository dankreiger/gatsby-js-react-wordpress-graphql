import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=ZCOOL+QingKe+HuangYou');

  * {
    margin: 0;
    padding: 0;
  }

  html, body, #___gatsby {
    height: 100%;
    box-sizing: border-box;
  }
  body {
    font-family: 'ZCOOL QingKe HuangYou', Helvetica, Arial, Verdana, sans-serif;
    background: black;
    color: white;
    margin: 0 !important;
    padding: 0 !important;
    -webkit-font-smoothing: antialiased;
	  -moz-osx-font-smoothing: grayscale;
  }
  #___gatsby {
    > div {
      height: 100%;
      > div {
        height: 100%;
      }
    }
  }
`
export const LayoutWrapper = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
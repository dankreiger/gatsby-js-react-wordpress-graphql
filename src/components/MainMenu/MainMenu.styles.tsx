import styled from "styled-components"
import { Link } from "gatsby"

export const MainMenuWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: rgba(0,0,0,0.9);
  top: 0;
  left: 0;
`
export const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 20px 15px;
  font-size: 1.5em;
  text-decoration: none;
  &:after {
    content: '';
    background-color: white;
    display: block;
    height: 1px;
    width: 0px;
    transition: 250ms width;
  }
  &:hover {
    &:after {
      width: 100%;
    }
  }
`
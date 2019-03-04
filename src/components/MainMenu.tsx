import React, { FunctionComponent } from "react"
import { graphql, StaticQuery, Link } from "gatsby"
import { WPMenuItems, WPMenuItem } from "src/typings/QueryProps.interface"
import styled from "styled-components"

const MainMenuWrapper = styled.div`
  display: flex;
  /* background-color: rgb(3, 27, 77); */
`
const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
  transition: 250ms font-size;
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
const MainMenu: FunctionComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Main menu" } }
        ) {
          edges {
            node {
              name
              items {
                title
                object_slug
              }
            }
          }
        }
      }
    `}
    render={(props: WPMenuItems) => (
      <MainMenuWrapper>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          (item: WPMenuItem) => (
            <MenuItem to={item.object_slug} key={item.title}>
              {item.title}
            </MenuItem>
          )
        )}
      </MainMenuWrapper>
    )}
  />
)
export default MainMenu

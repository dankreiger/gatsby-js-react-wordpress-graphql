import React, { FunctionComponent } from "react"
import { graphql, StaticQuery } from "gatsby"
import { WPMenuMainMenuItem, WPMenuMainMenuItems } from "src/typings/QueryProps.interface"
import { MainMenuWrapper, MenuItem } from "./MainMenu.styles";

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
    render={(props: WPMenuMainMenuItems) => (
      <MainMenuWrapper>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          (item: WPMenuMainMenuItem) => (
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

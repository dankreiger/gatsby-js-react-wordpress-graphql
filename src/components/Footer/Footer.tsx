import React, { FunctionComponent } from "react"
import { graphql, StaticQuery } from "gatsby"
import { WPMenuFooterItems, WPMenuFooterItem } from "src/typings/QueryProps.interface"
import { FooterWrapper, FooterItem } from "./Footer.styles";

const Footer: FunctionComponent<{}> = () => (
  <StaticQuery
    query={graphql`
      {
        allWordpressWpApiMenusMenusItems(
          filter: { name: { eq: "Footer" } }
        ) {
          edges {
            node {
              name
              items {
                title
                url
              }
            }
          }
        }
      }
    `}
    render={(props: WPMenuFooterItems): JSX.Element => (
      <FooterWrapper>
        {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
          (item: WPMenuFooterItem): JSX.Element => (
            <FooterItem href={item.url} key={item.title}>
              {item.title}
            </FooterItem>
          )
        )}

        <span>Puppy {new Date().getFullYear()}</span>

      </FooterWrapper>
    )}
  />
)
export default Footer

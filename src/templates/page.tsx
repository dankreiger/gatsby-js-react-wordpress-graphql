import React from "react"
import { PageNode } from "../typings/QueryProps.interface"
import Layout from "../components/layout"

export default ({ pageContext }: { pageContext: PageNode }) => (
  <Layout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
)

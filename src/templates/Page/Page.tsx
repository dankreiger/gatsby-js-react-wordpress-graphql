import React from "react"
import { PageNode } from "../../typings/QueryProps.interface"
import Layout from "../../components/Layout/Layout"
import { PageTitle, PageContent } from './Page.styles'

export default ({ pageContext }: { pageContext: PageNode }) => (
  <Layout>
    <PageTitle dangerouslySetInnerHTML={{ __html: pageContext.title }}></PageTitle>
    <PageContent dangerouslySetInnerHTML={{ __html: pageContext.content }}></PageContent>

  </Layout>
)

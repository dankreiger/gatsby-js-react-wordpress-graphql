import React from 'react'
import he from 'he'
import { PageNode } from '../../typings/QueryProps.interface'
import Layout from '../../components/Layout/Layout'
import { PageTitle, PageContent } from './Page.styles'
import SiteSlider from '../../components/SiteSlider/SiteSlider'

export default ({ pageContext }: { pageContext: PageNode }) => {
  let videoIds: string[] = he
    .decode(pageContext.content)
    .replace(/(<([^>]+)>)/gi, '')
    .split(',')
    .map((videoId: string) => videoId.trim())
  return (
    <Layout>
      <PageTitle dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      {pageContext.slug !== 'videos' && (
        <PageContent
          dangerouslySetInnerHTML={{ __html: pageContext.content }}
        />
      )}
      {pageContext.slug === 'videos' && <SiteSlider videoIds={videoIds} />}
    </Layout>
  )
}

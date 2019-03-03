import React from "react"
import { PageNode } from "src/typings/QueryProps.interface"

export default ({ pageContext }: { pageContext: PageNode }) => (
  <div>
    <h1>{pageContext.title}</h1>
  </div>
)

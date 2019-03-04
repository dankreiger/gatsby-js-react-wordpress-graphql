import * as React from "react"
import renderer from "react-test-renderer"

import Page from "../Page/Page"

describe("Page", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Page
          pageContext={{ id: "1234", content: "content", title: "some title" }}
        />
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})

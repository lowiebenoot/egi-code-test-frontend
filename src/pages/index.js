import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import Button from "../components/ui/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>A song of GraphQL and Gatsby</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis
      congue suscipit. Integer gravida iaculis sapien in porta. Pellentesque
      ornare diam non urna tincidunt euismod. Cras mi felis, fringilla ut
      scelerisque nec, molestie id massa. Mauris finibus justo a lacus varius
      varius. Curabitur non pharetra nibh. Pellentesque cursus pellentesque
      elementum.
    </p>
    <Button element={Link} to="/categories">
      Browse categories
    </Button>
  </Layout>
)

export default IndexPage

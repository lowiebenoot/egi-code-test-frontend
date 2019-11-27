import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

class CategoriesPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Categories" />
        <h1>Categories</h1>
      </Layout>
    )
  }
}

export default CategoriesPage

import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Breadcrumbs from "../components/ui/breadcrumbs"
import SEO from "../components/layout/seo"

class CategoriesPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Categories" />
        <Breadcrumbs>
          <Breadcrumbs.Item>
            <Link to="/">Home</Link>
          </Breadcrumbs.Item>
          <Breadcrumbs.Item>Categories</Breadcrumbs.Item>
        </Breadcrumbs>

        <h1>Categories</h1>
        <ul>
          <li>
            <Link to="/category/characters">Characters</Link>
          </li>
          <li>
            <Link to="/category/books">Books</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default CategoriesPage

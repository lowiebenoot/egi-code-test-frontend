import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

class CategoriesPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Categories" />
        <h1>Categories</h1>
        <ul>
          <li>
            <Link to="/characters">Characters</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
        </ul>
      </Layout>
    )
  }
}

export default CategoriesPage

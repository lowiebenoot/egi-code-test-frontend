import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <Link to="/categories">categories</Link>
  </Layout>
)

export default IndexPage

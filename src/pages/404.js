import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Hodor... Page not found</h1>
    <Link to="/">Go to the homepage</Link>
  </Layout>
)

export default NotFoundPage

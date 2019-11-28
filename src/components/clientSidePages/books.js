import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import LoadingSpinner from "../ui/loadingSpinner"
import Breadcrumbs from "../ui/breadcrumbs"

const QUERY_BOOKS = gql`
  {
    books {
      id
      name
    }
  }
`
const BooksPage = props => {
  const { loading, error, data } = useQuery(QUERY_BOOKS)

  return (
    <Layout>
      <SEO title="Books" />
      <Breadcrumbs>
        <Breadcrumbs.Item>
          <Link to="/">Home</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>
          <Link to="/categories">Categories</Link>
        </Breadcrumbs.Item>
        <Breadcrumbs.Item>Books</Breadcrumbs.Item>
      </Breadcrumbs>

      <h1>Books</h1>

      {loading && <LoadingSpinner />}

      {error && <p>Error... :(</p>}

      {!loading && data && data.books && (
        <>
          <ul>
            {data.books.map(book => (
              <li key={book.id}>
                <Link to={`/category/books/${book.id}`}>{book.name}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </Layout>
  )
}

export default BooksPage

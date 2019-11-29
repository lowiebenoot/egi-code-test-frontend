import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import LoadingSpinner from "../ui/loadingSpinner"
import Breadcrumbs from "../ui/breadcrumbs"
import SEO from "../layout/seo"

const QUERY_BOOK = gql`
  query Book($bookId: ID!) {
    book(id: $bookId) {
      id
      name
      isbn
      numberOfPages
    }
  }
`

const BooksDetailPage = ({ bookId }) => {
  const { loading, error, data } = useQuery(QUERY_BOOK, {
    variables: {
      bookId,
    },
  })

  return (
    <Layout>
      {loading && <LoadingSpinner />}
      {error && <p>Error... :(</p>}

      {data &&
        data.book &&
        (() => {
          const book = data.book

          return (
            <>
              <SEO title={book.name} />
              <Breadcrumbs>
                <Breadcrumbs.Item>
                  <Link to="/">Home</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                  <Link to="/categories">Categories</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                  <Link to="/category/books">Books</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{book.name}</Breadcrumbs.Item>
              </Breadcrumbs>

              <h1>{book.name}</h1>

              <div>
                <strong>ISBN:</strong> {book.isbn}
              </div>

              <div>
                <strong>Number of pages:</strong> {book.numberOfPages}
              </div>
            </>
          )
        })()}
    </Layout>
  )
}

export default BooksDetailPage

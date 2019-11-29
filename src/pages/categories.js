import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/layout"
import Breadcrumbs from "../components/ui/breadcrumbs"
import Button from "../components/ui/button"
import SEO from "../components/layout/seo"
import { getName } from "../utils/character"
import styles from "./categories.module.css"

export const query = graphql`
  query {
    got {
      characters(pageSize: 5) {
        id
        name
        aliases
      }
      books(pageSize: 5) {
        id
        name
      }
    }
  }
`

class CategoriesPage extends React.Component {
  render() {
    const {
      data: {
        got: { books, characters },
      },
    } = this.props

    console.log({ books, characters })

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
        <p>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eleifend
          finibus justo vel ornare. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Donec sit amet arcu vitae tellus maximus consectetur.
          Curabitur tincidunt orci at ultricies fringilla. Morbi vulputate sem
          congue, faucibus risus a, accumsan magna.
        </p>

        <div className={styles.categories}>
          <div className={styles.category}>
            <h2>Books</h2>
            <ul className={styles.list}>
              {books.map(book => (
                <li key={book.id}>
                  <Link to={`/category/books/${book.id}`}>{book.name}</Link>
                </li>
              ))}
            </ul>
            <Button to="/category/books" element={Link} size="small">
              Browse all books
            </Button>
          </div>
          <div className={styles.category}>
            <h2>Characters</h2>
            <ul className={styles.list}>
              {characters.map(character => (
                <li key={character.id}>
                  <Link to={`/category/characters/${character.id}`}>
                    {getName(character)}
                  </Link>
                </li>
              ))}
            </ul>
            <Button to="/category/characters" element={Link} size="small">
              Browse all characters
            </Button>
          </div>
        </div>
      </Layout>
    )
  }
}

export default CategoriesPage

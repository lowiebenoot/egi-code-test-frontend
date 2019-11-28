import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import Pagination from "../ui/pagination"
import LoadingSpinner from "../ui/loadingSpinner"
import { getName } from "../../utils/character"
import { usePaginationParam } from "../../utils/routing"
import styles from "./characters.module.css"

const QUERY_CHARACTERS = gql`
  query Characters($pageNumber: Int!) {
    characters(pageNumber: $pageNumber) {
      id
      name
      aliases
    }
  }
`
const CharactersPage = props => {
  const pageNumber = usePaginationParam()
  const { loading, error, data } = useQuery(QUERY_CHARACTERS, {
    variables: {
      pageNumber,
    },
  })

  return (
    <Layout>
      <SEO title="Characters" />
      <h1>Characters</h1>

      {loading && <LoadingSpinner />}

      {error && <p>Error... :(</p>}

      {!loading && data && data.characters && (
        <>
          <ul>
            {data.characters.map(character => (
              <li key={character.id}>
                <Link to={`/category/characters/${character.id}`}>
                  {getName(character)}
                </Link>
              </li>
            ))}
          </ul>
          <Pagination
            className={styles.pagination}
            baseUrl="/category/characters"
            currentPage={pageNumber}
            hasNextPage={data.characters.length === 10}
          />
        </>
      )}
    </Layout>
  )
}

export default CharactersPage

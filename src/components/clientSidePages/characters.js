import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import { getName } from "../../utils/character"

const QUERY_CHARACTERS = gql`
  {
    characters {
      id
      name
      aliases
    }
  }
`
const CharactersPage = () => {
  const { loading, error, data } = useQuery(QUERY_CHARACTERS)

  return (
    <Layout>
      <SEO title="Characters" />
      <h1>Characters</h1>

      {loading && <p>Loading...</p>}

      {error && <p>Error... :(</p>}

      {data && data.characters && (
        <ul>
          {data.characters.map(character => (
            <li key={character.id}>
              <Link to={`/category/characters/${character.id}`}>
                {getName(character)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Layout>
  )
}

export default CharactersPage

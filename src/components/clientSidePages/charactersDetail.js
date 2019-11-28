import React from "react"
import { useQuery } from "@apollo/react-hooks"
import { gql } from "apollo-boost"
import { Link } from "gatsby"

import Layout from "../layout/layout"
import LoadingSpinner from "../ui/loadingSpinner"
import Breadcrumbs from "../ui/breadcrumbs"
import SEO from "../layout/seo"
import { getName, getPlayedBy } from "../../utils/character"

const QUERY_CHARACTER = characterId => gql`
  {
    character(id: ${characterId}) {
      id
      name
      aliases
      gender
      culture
      playedBy
    }
  }
`

const CharactersDetailPage = ({ characterId }) => {
  const { loading, error, data } = useQuery(QUERY_CHARACTER(characterId))

  return (
    <Layout>
      {loading && <LoadingSpinner />}
      {error && <p>Error... :(</p>}

      {data &&
        data.character &&
        (() => {
          const character = data.character
          const name = getName(character)
          const playedBy = getPlayedBy(character)
          const aliases = character.aliases && character.aliases.filter(Boolean)

          return (
            <>
              <SEO title={name} />
              <Breadcrumbs>
                <Breadcrumbs.Item>
                  <Link to="/">Home</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                  <Link to="/categories">Categories</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>
                  <Link to="/category/characters">Characters</Link>
                </Breadcrumbs.Item>
                <Breadcrumbs.Item>{name}</Breadcrumbs.Item>
              </Breadcrumbs>

              <h1>{name}</h1>

              {aliases && aliases.length > 0 && (
                <div>
                  <strong>Aliases:</strong>
                  <ul>
                    {character.aliases.map(alias => (
                      <li key={alias}>{alias}</li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <strong>Gender:</strong> {character.gender}
              </div>

              {playedBy && (
                <div>
                  <strong>Played by:</strong> {playedBy}
                </div>
              )}

              {character.culture && (
                <div>
                  <strong>Culture:</strong> {character.culture}
                </div>
              )}
            </>
          )
        })()}
    </Layout>
  )
}

export default CharactersDetailPage

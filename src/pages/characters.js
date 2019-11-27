import React from "react"

import Layout from "../components/layout/layout"
import SEO from "../components/layout/seo"
import { getName } from "../utils/character"

export const query = graphql`
  query {
    got {
      characters {
        id
        name
        aliases
      }
    }
  }
`

class CharactersPage extends React.Component {
  render() {
    const characters = this.props.data.got.characters

    return (
      <Layout>
        <SEO title="Characters" />
        <h1>Characters</h1>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <a>{getName(character)}</a>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default CharactersPage

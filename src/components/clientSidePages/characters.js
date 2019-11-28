import React from "react"

import Layout from "../layout/layout"
import SEO from "../layout/seo"
import { getName } from "../../utils/character"

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
    // const characters = this.props.data.got.characters
    const characters = [
      { id: 1, name: "111" },
      { id: 2, name: "222222222" },
      { id: 3, name: "333333332" },
    ]

    console.log(this.props)

    return (
      <Layout>
        <SEO title="Characters" />
        <h1>Characters</h1>
        <ul>
          {characters.map(character => (
            <li key={character.id}>
              <a href="/">{getName(character)}</a>
            </li>
          ))}
        </ul>
      </Layout>
    )
  }
}

export default CharactersPage

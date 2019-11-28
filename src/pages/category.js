import React from "react"
import { Router } from "@reach/router"
import { ApolloProvider } from "@apollo/react-hooks"

import client from "../apollo"
import Characters from "../components/clientSidePages/characters"
import CharactersDetail from "../components/clientSidePages/charactersDetail"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Characters path="/category/characters" />
        <CharactersDetail path="/category/characters/:characterId" />
      </Router>
    </ApolloProvider>
  )
}
export default App

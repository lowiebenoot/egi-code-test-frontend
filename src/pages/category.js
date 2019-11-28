import React from "react"
import { Router, globalHistory } from "@reach/router"
import { ApolloProvider } from "@apollo/react-hooks"
import { QueryParamProvider } from "use-query-params"

import client from "../apollo"
import Characters from "../components/clientSidePages/characters"
import CharactersDetail from "../components/clientSidePages/charactersDetail"
import Books from "../components/clientSidePages/books"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryParamProvider reachHistory={globalHistory}>
        <Router>
          <Characters path="/category/characters" />
          <CharactersDetail path="/category/characters/:characterId" />
          <Books path="/category/books" />
        </Router>
      </QueryParamProvider>
    </ApolloProvider>
  )
}
export default App

import React from "react"
import { Router, globalHistory } from "@reach/router"
import { ApolloProvider } from "@apollo/react-hooks"
import { QueryParamProvider } from "use-query-params"

import client from "../apollo"
import Characters from "../components/clientSidePages/characters"
import CharactersDetail from "../components/clientSidePages/charactersDetail"
import Books from "../components/clientSidePages/books"
import BooksDetail from "../components/clientSidePages/booksDetail"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <QueryParamProvider reachHistory={globalHistory}>
        <Router>
          <Characters path="/category/characters" />
          <CharactersDetail path="/category/characters/:characterId" />
          <Books path="/category/books" />
          <BooksDetail path="/category/books/:bookId" />
        </Router>
      </QueryParamProvider>
    </ApolloProvider>
  )
}
export default App

import React from "react"
import { Router } from "@reach/router"
import { ApolloProvider } from "@apollo/react-hooks"

import client from "../apollo"
import Characters from "../components/clientSidePages/characters"

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Characters path="/category/characters" />
      </Router>
    </ApolloProvider>
  )
}
export default App

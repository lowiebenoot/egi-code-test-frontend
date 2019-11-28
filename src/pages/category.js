import React from "react"
import { Router } from "@reach/router"

import Characters from "../components/clientSidePages/characters"

const App = () => {
  return (
    <Router>
      <Characters path="/category/characters" />
    </Router>
  )
}
export default App

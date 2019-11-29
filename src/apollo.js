import ApolloClient from "apollo-boost"
import fetch from "isomorphic-fetch"

const client = new ApolloClient({
  uri: process.env.GOT_API_URL,
  fetch,
})

export default client

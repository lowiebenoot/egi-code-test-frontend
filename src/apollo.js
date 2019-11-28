import ApolloClient from "apollo-boost"

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql", // @todo use env var
})

export default client

import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4pmykot2b1901w7htmtdd79/master',
  cache: new InMemoryCache()
})
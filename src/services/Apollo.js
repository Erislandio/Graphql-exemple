import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

// ! construção do cliente http

const httpLink = new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjndrna3l6o4v0121j7amid9a'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
})

export default client;